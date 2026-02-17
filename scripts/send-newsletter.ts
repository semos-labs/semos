#!/usr/bin/env bun
/**
 * Send a newsletter via Kit (formerly ConvertKit).
 *
 * Usage:
 *   bun run scripts/send-newsletter.ts <path-to-newsletter.md> [--preview]
 *   bun run scripts/send-newsletter.ts <path-to-newsletter.md> --test <email>
 *
 * Flags:
 *   --preview        Print the HTML email to stdout instead of sending
 *   --test <email>   Send to a single subscriber (for testing)
 *
 * Environment:
 *   KIT_API_SECRET        Your Kit API secret (required unless --preview)
 *   KIT_EMAIL_TEMPLATE_ID Optional Kit email template ID to use for broadcasts
 */

import { readFileSync } from "fs";
import { resolve } from "path";
import matter from "gray-matter";

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const previewMode = args.includes("--preview");
const testMode = args.includes("--test");

// Collect positional args (anything that isn't a flag or flag value)
const positionals = args.filter((a) => !a.startsWith("--"));

// Figure out which positional is the file and which is the email
const filePath = positionals.find((a) => !a.includes("@"));
const testEmail = testMode
  ? positionals.find((a) => a.includes("@"))
  : undefined;

if (!filePath) {
  console.error(
    "Usage: bun run scripts/send-newsletter.ts <newsletter.md> [--preview] [--test <email>]",
  );
  process.exit(1);
}

if (testMode && !testEmail) {
  console.error("Error: --test requires an email address.");
  console.error("       e.g. bun run scripts/send-newsletter.ts newsletters/2026-02-17.md --test you@example.com");
  process.exit(1);
}

const fullPath = resolve(filePath);
const raw = readFileSync(fullPath, "utf-8");
const { data: frontmatter, content } = matter(raw);

if (!frontmatter.subject) {
  console.error("Error: Newsletter is missing a 'subject' in frontmatter.");
  process.exit(1);
}

if (!frontmatter.preview) {
  console.error("Error: Newsletter is missing a 'preview' in frontmatter.");
  process.exit(1);
}

if (frontmatter.draft && !previewMode && !testEmail) {
  console.error("Error: This newsletter is marked as draft. Remove 'draft: true' from frontmatter to send.");
  console.error("       (Use --test <email> to send a test even for drafts.)");
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Markdown → HTML (minimal, no external dep)
// ---------------------------------------------------------------------------

function markdownToHtml(md: string): string {
  let html = md;

  // Headers — match the Kit template's Courier New monospace
  html = html.replace(/^### (.+)$/gm, '<h3 style="font-size: 15px; color: #f0f0f0; margin: 24px 0 8px 0;">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 style="font-size: 17px; color: #f0f0f0; margin: 32px 0 12px 0;">$1</h2>');

  // Bold & italic
  html = html.replace(/\*\*\[([^\]]+)\]\(([^)]+)\)\*\*/g, '<a href="$2" style="color: #e0e0e0; font-weight: bold; text-decoration: underline; text-underline-offset: 3px; text-decoration-color: #606060;">$1</a>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong style="color: #e0e0e0;">$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color: #e0e0e0; text-decoration: underline; text-underline-offset: 3px; text-decoration-color: #606060;">$1</a>');

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, '<li style="margin-bottom: 6px;">$1</li>');
  // Wrap consecutive <li> into <ul>
  html = html.replace(
    /(<li[^>]*>.*?<\/li>\n?)+/gs,
    (match) => `<ul style="padding-left: 20px; margin: 8px 0 16px 0;">${match}</ul>`,
  );

  // Horizontal rule — match template's #2a2a2a border color
  html = html.replace(/^---$/gm, '<hr style="border: none; border-top: 1px solid #2a2a2a; margin: 32px 0;" />');

  // Paragraphs (lines that aren't already HTML)
  const lines = html.split("\n");
  const result: string[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (
      trimmed === "" ||
      trimmed.startsWith("<h") ||
      trimmed.startsWith("<ul") ||
      trimmed.startsWith("<li") ||
      trimmed.startsWith("</ul") ||
      trimmed.startsWith("<hr") ||
      trimmed.startsWith("<a") ||
      trimmed.startsWith("<strong")
    ) {
      result.push(line);
    } else {
      result.push(`<p style="margin: 0 0 16px 0;">${trimmed}</p>`);
    }
  }

  return result.filter((l) => l.trim() !== "").join("\n");
}

// ---------------------------------------------------------------------------
// Kit API  (v3 — https://api.convertkit.com/v3)
// ---------------------------------------------------------------------------

const KIT_V3 = "https://api.convertkit.com/v3";

function getApiSecret(): string {
  const s = process.env.KIT_API_SECRET;
  if (!s) {
    console.error("Error: KIT_API_SECRET environment variable is not set.");
    process.exit(1);
  }
  return s;
}

/** Look up a subscriber by email. Returns their ID or null. */
async function findSubscriber(
  email: string,
  apiSecret: string,
): Promise<number | null> {
  const url = `${KIT_V3}/subscribers?api_secret=${apiSecret}&email_address=${encodeURIComponent(email)}`;
  const res = await fetch(url);

  if (!res.ok) {
    const err = await res.text();
    console.error(`Kit API error (find subscriber): ${res.status} ${err}`);
    return null;
  }

  const data = (await res.json()) as {
    total_subscribers: number;
    subscribers: { id: number; email_address: string }[];
  };

  return data.subscribers[0]?.id ?? null;
}

/** Create a broadcast draft in Kit and return its ID. */
async function createBroadcast(
  subject: string,
  htmlContent: string,
  previewText: string,
  apiSecret: string,
): Promise<number> {
  const res = await fetch(`${KIT_V3}/broadcasts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      api_secret: apiSecret,
      subject,
      content: htmlContent,
      description: previewText,
      ...(process.env.KIT_EMAIL_TEMPLATE_ID
        ? { email_template_id: Number(process.env.KIT_EMAIL_TEMPLATE_ID) }
        : {}),
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error(`Kit API error (create broadcast): ${res.status} ${err}`);
    process.exit(1);
  }

  const data = (await res.json()) as { broadcast: { id: number } };
  return data.broadcast.id;
}

// ---------------------------------------------------------------------------
// Send modes
// ---------------------------------------------------------------------------

async function sendTestToSubscriber(
  email: string,
  subject: string,
  htmlContent: string,
  previewText: string,
): Promise<void> {
  const apiSecret = getApiSecret();

  // 1. Find the subscriber
  console.log(`Looking up subscriber: ${email}...`);
  const subscriberId = await findSubscriber(email, apiSecret);

  if (!subscriberId) {
    console.error(`\n❌ Subscriber not found: ${email}`);
    console.error(`   Make sure this email is subscribed to your Kit list.`);
    process.exit(1);
  }

  console.log(`Found subscriber (id: ${subscriberId}).`);

  // 2. Create a draft broadcast with [TEST] prefix
  const testSubject = `[TEST] ${subject}`;
  console.log(`Creating test broadcast: "${testSubject}"...`);

  const broadcastId = await createBroadcast(
    testSubject,
    htmlContent,
    previewText,
    apiSecret,
  );

  console.log(`Broadcast created (id: ${broadcastId}).`);
  console.log(`\n✅ Test broadcast created!`);
  console.log(`   Subject: ${testSubject}`);
  console.log(`\n   To send it to yourself:`);
  console.log(`   1. Go to https://app.kit.com/broadcasts`);
  console.log(`   2. Find the "[TEST]" broadcast → Edit`);
  console.log(`   3. Filter recipients to: ${email}`);
  console.log(`   4. Send`);
  console.log(`\n   Broadcast ID: ${broadcastId}`);
}

async function createAndSendBroadcast(
  subject: string,
  htmlContent: string,
  previewText: string,
): Promise<void> {
  const apiSecret = getApiSecret();

  console.log(`Creating broadcast: "${subject}"...`);

  const broadcastId = await createBroadcast(
    subject,
    htmlContent,
    previewText,
    apiSecret,
  );

  console.log(`\n✅ Broadcast created successfully!`);
  console.log(`   ID: ${broadcastId}`);
  console.log(`   Subject: ${subject}`);
  console.log(`\n   The broadcast has been created as a draft in Kit.`);
  console.log(`   You can review and send it from: https://app.kit.com/broadcasts`);
  console.log(`\n   To auto-send in the future, set 'send_at' in the API call.`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const messageHtml = markdownToHtml(content.trim());

if (previewMode) {
  console.log(messageHtml);
  console.log("\n--- Preview mode. This HTML goes into {{ message_content }} in your Kit template. ---");
} else if (testEmail) {
  await sendTestToSubscriber(
    testEmail,
    frontmatter.subject as string,
    messageHtml,
    frontmatter.preview as string,
  );
} else {
  await createAndSendBroadcast(
    frontmatter.subject as string,
    messageHtml,
    frontmatter.preview as string,
  );
}
