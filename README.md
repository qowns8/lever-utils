# lever-utils
Common utils of LEVER

## Install

```
$ yarn add @madup-inc/utils
```

To use with node:

```js
const { parseSearchParams } = require('@madup-inc/utils')
```

or to use with esm

```js
import { parseSearchParams } from '@madup-inc/utils'
```


To use directly in the browser:

latest version:
```html
<script src="https://unpkg.com/@madup-inc/utils" />
<script>
  utils.parseSearchParams('https://biz.lever.me?a=1&b=2&c=3') 
</script>
```

or the specific version:

```html
<script src="https://unpkg.com/@madup-inc/utils@0.8.4/dist/index.umd.js" />
<script>
  utils.parseSearchParams('https://biz.lever.me?a=1&b=2&c=3') 
</script>
```

<br />

## Basic usage

### parseSearchParams
```js
parseSearchParams('https://biz.lever.me?a=1&b=2&c=3') // {a: '1', b: '2', c: '3'}
parseSearchParams('?aa=11') // { aa: '11' } 
parseSearchParams('?aa=11&bb=22') // { aa: '11', bb: '22' }
parseSearchParams('') // {}
```

### serializeSearchParams
```js
serializeSearchParams({ a: 1, b: 2 }) // 'a=1&b=2'
serializeSearchParams({ a: 1, b: undefined }) // 'a=1'
serializeSearchParams({ a: 1, b: '' })  //'a=1&b='
serializeSearchParams({})  // ''
serializeSearchParams()  // ''
```

### randomStr
```js
randomStr() // '1e82e'
```

### isNil
```js
isNil(null) // true
isNil(undefined) // true
isNil(0) // false
isNil('') // false
```

### isNotNil
```js
isNotNil(null) // false
isNotNil(undefined) // false
isNotNil(0) // true
isNotNil('') // true
```

### validateBiznum
```js
validateBiznum('blabla') // false
validateBiznum('1198706634')  // true
validateBiznum('')   // false
validateBiznum() // false
```

### classNames
```js
classNames({ a: true, b: false }) // 'a'
classNames({ a: true, b: false }, { c: true, d: true }) // 'a c d'
classNames('xx', { a: true, b: false }, 'vv') // 'xx a vv'
classNames({ a: false, b: false })  // undefined
classNames('aa', undefined, 'cc') // 'aa cc'
classNames('aa', null, 'cc')  // 'aa cc'
```

### oneOf
```js
oneOf([[true, 2]])  // 2
oneOf([
  [false, 1],
  [false, 2],
  [true, 3],
])  // 3
oneOf([
  [false, 1],
  [true, 2],
])  // 2
oneOf([[false, 1]]) // undefined
oneOf([[false, 1]], 'zzz')  // 'zzz'

// Lazy evaluation
oneOf([() => true, 1])  // 1
oneOf([true, () => 2])  // 2
oneOf([() => true, () => 3])  // 3
oneOf([false, 1], () => 4)  // 4
```

### toComma
```js
toComma(100000)	// '100,000'
toComma(10.234)	// '10.234'
toComma(-10.234)	// '-10.234'
toComma(-10123.234)	// '-10,123.234'
toComma(-10123.23434)	// '-10,123.23434'
toComma(null)	// '0'
toComma(NaN)	// '0'
toComma(undefined)	// '0'
toComma('abc')	// 'NaN'
```

### toNumber
```js
toNumber('12,345')	// 12345
toNumber('-1,234')  // -1234
toNumber('1,900,000')	// 1900000
toNumber(1234)	// 1234
toNumber(null)	// 0
toNumber(NaN)	// 0
toNumber(undefined)	// 0
toNumber('abcd')  // NaN
```

~~### isIE~~

deprecated on v0.9.1

```js
isIE(window.navigator)  // true on Internet Explorer
```
