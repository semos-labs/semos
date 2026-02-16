---
title: 'masks'
---

```ts
const masks: {
  creditCard: (newValue, oldValue) => string | false | void;
  dateEU: (newValue, oldValue) => string | false | void;
  dateISO: (newValue, oldValue) => string | false | void;
  dateUS: (newValue, oldValue) => string | false | void;
  intlPhone: (newValue, oldValue) => string | false | void;
  ipv4: (newValue, oldValue) => string | false | void;
  mac: (newValue, oldValue) => string | false | void;
  ssn: (newValue, oldValue) => string | false | void;
  time: (newValue, oldValue) => string | false | void;
  timeFull: (newValue, oldValue) => string | false | void;
  usPhone: (newValue, oldValue) => string | false | void;
  zip: (newValue, oldValue) => string | false | void;
  zipPlus4: (newValue, oldValue) => string | false | void;
};
```

Pre-built mask patterns for common use cases.

## Type Declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| <a id="property-creditcard"></a> `creditCard()` | (`newValue`, `oldValue`) => `string` \| `false` \| `void` | Credit Card: 1234 5678 9012 3456 |
| <a id="property-dateeu"></a> `dateEU()` | (`newValue`, `oldValue`) => `string` \| `false` \| `void` | Date DD/MM/YYYY |
| <a id="property-dateiso"></a> `dateISO()` | (`newValue`, `oldValue`) => `string` \| `false` \| `void` | Date YYYY-MM-DD |
| <a id="property-dateus"></a> `dateUS()` | (`newValue`, `oldValue`) => `string` \| `false` \| `void` | Date MM/DD/YYYY |
| <a id="property-intlphone"></a> `intlPhone()` | (`newValue`, `oldValue`) => `string` \| `false` \| `void` | International Phone: +1 234 567 8900 |
| <a id="property-ipv4"></a> `ipv4()` | (`newValue`, `oldValue`) => `string` \| `false` \| `void` | IPv4: 192.168.001.001 |
| <a id="property-mac"></a> `mac()` | (`newValue`, `oldValue`) => `string` \| `false` \| `void` | MAC Address: AA:BB:CC:DD:EE:FF |
| <a id="property-ssn"></a> `ssn()` | (`newValue`, `oldValue`) => `string` \| `false` \| `void` | SSN: 123-45-6789 |
| <a id="property-time"></a> `time()` | (`newValue`, `oldValue`) => `string` \| `false` \| `void` | Time HH:MM |
| <a id="property-timefull"></a> `timeFull()` | (`newValue`, `oldValue`) => `string` \| `false` \| `void` | Time HH:MM:SS |
| <a id="property-usphone"></a> `usPhone()` | (`newValue`, `oldValue`) => `string` \| `false` \| `void` | US Phone: (123) 456-7890 |
| <a id="property-zip"></a> `zip()` | (`newValue`, `oldValue`) => `string` \| `false` \| `void` | ZIP Code: 12345 |
| <a id="property-zipplus4"></a> `zipPlus4()` | (`newValue`, `oldValue`) => `string` \| `false` \| `void` | ZIP+4: 12345-6789 |
