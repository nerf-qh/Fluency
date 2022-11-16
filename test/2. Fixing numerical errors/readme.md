# 2. Fixing numerical errors:

Program below outputs a value of `0.020000000000000004` instead of expected `0.02`. Can you
determine what is the reason for this “strange” behaviour? How does arithmetic calculations are
performed in JavaScript? What kind of tools would you suggest using for performing calculations which
require absolute precision?

```javascript
var x = 0.1 * 0.2;
console.log(x);
```

## Answer

That's a tipical problem almost for every lang
Moslty knows as `0.1 + 0.2` = `0.30000000000000004` and != `0.3`
There is even sites for that

https://0.30000000000000004.com/

https://floating-point-gui.de/

JS doesn't have special number types everethyng is 64-bit Floating Point (double precision)
And 0.1, 0.2 are stored differently from initial (value, eponent and sign)
And when we multiply such fractional numbers in their representation we get again fractional number in floating point representation

As havent worked with precise calculations can't suggest any by experience
But solutions can be different:

- One option is to switch to integer
E.g. working with $ you can store values in cents, calculate everethyng as integers
And only in representation add point

```js
10 * 20 = 200
200 / 10000 => 0.02
```

- Extend JS number representation for such munbers
  e.g.

  https://github.com/MikeMcl/decimal.js

  ```js
  Decimal.mul(0.1, 0.2) => 0.02
  ```

  https://github.com/MikeMcl/bignumber.js/

  ```js
  new BigNumber(0.1).multipliedBy(0.2)
  ```

  https://github.com/royNiladri/js-big-decimal

  ```js
  bigDecimal.add(0.1, 0.2) => 0.3
  ```
