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

### parseCookie
```js
parseCookie('aa=11; bb=22')  // {aa:11, bb:22}
```

### serializeCookie
```js
serializeCookie('user', 'John', { secure: true, 'max-age': 3600 })  // 'user=John; path=/; secure; max-age=3600'
serializeCookie('user', 'John', { samesite: true }) // 'user=John; path=/; samesite'
serializeCookie('user', 'John', { samesite: false }) // 'user=John; path=/'
serializeCookie('user', 'John', { samesite: 'lax' })  // 'user=John; path=/; samesite=lax'
```

### strMatched
> should be true when given array matches with target string
```js
strMatched(['aa', 'bb', 'cc'], 'cc')  // true
strMatched(['aa', 'bb', 'cc'], 'dd')  // false
strMatched(['aa', 'bb', 'cc', /dd/], 'dd')  // true
strMatched(['aa', value => value.startsWith('hello')], 'hello world') // true
```

### parseFilename
```js
parseFilename('aa.jpg') // { name: 'aa', ext: 'jpg' }
parseFilename('aa.bb.cc') // { name: 'aa.bb', ext: 'cc' }
parseFilename('aa') // { name: 'aa', ext: '' }
```

### fileSizeUnit
```js
fileSizeUnit(1) // 1B
fileSizeUnit(1024) // 1KB
fileSizeUnit(1024 * 1024) // 1MB
fileSizeUnit(1024 * 1024 * 1024) // 1GB

fileSizeUnit(Math.pow(1024, 2) / 3 + Math.pow(1024, 2)) // 1.33MB

// when seconde argument false return-value use lowercase
fileSizeUnit(1024, false) // 1kb
fileSizeUnit(100, false) // 100b
```

### snakeToCamel
```js
snakeToCamel('hello_world') // helloWolrd
snakeToCamel('snake2_Camel') // snake2Camel
snakeToCamel('camel') // camel
```

### camelToKabab
```js
camelToKabab('helloWolrd') //hello-world
camelToKabab('camel2Kabab') //camel2-kabab
camelToKabab('kabab') //kabab
```

### clsNms
```js
clsNms('visible', {hasContent: true}) // 'visiable has-content'
clsNms('hasContent', {visible: true}) // 'has-content visiable'
clsNms('hasContent', {visible: false}) // 'has-content'
```

<br/>

---
## Browser only

### isIE
```js
isIE(window.navigator)  // true on Internet Explorer
```

### getCookie
```js
// if document.cookie is 'name=keating; id=1234'
getCookie('name') // 'keating'
```

### setCookie
> should use exactly the same path and domain options as when we set it.
```js
setCookie('user', 'John', { secure: true, 'max-age': 3600 })  // the cookie is set
```

### deleteCookie
> should use exactly the same path and domain options as when we set it.
```js
deleteCookie('user')
deleteCookie('user', {domain: '.lever.me'})
```

### pathMatched
> should be true when given array matches with `window.location.pathname`
```js
// when window.location.pathname is `/ads/create`
pathMatched(['/ads/manage', '/ads/update']) // false
pathMatched(['/ads/manage', '/ads/update', '/ads/create']) // true

// Regexp is usable as a condition
pathMatched(['/ads/manage', '/ads/update', /\/ads\/.+/]) // true

// function is also usable
pathMatched(['/creative', value => value.startsWith('/ads')]) // true
```

### downloadFile
```js
downloadFile('https://guide.pdf', 'lever-guide.pdf') // download file with name `lever-guide.pdf`
```

### downloadData
```js
// download file with name 'photo.jpg' in fileData Blob object
axios({
  url: 'https://images.lever.me/photo.jpg',
  method: 'get',
  responseType: 'blob',
}).then(res => downloadData(res.data, 'photo.jpg'))
```

### loadJs
```js
// <script src='https://accounts.google.com/gsi/client' type="text/javascript"></script> should be appended to head tag
loadJs('https://accounts.google.com/gsi/client')
  .then(() => {
    console.log('js loaded')
  })
```