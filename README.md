# lever-utils
Common utils of LEVER


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
