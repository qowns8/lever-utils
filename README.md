# lever-utils
Common utils of LEVER


### getSearchParams
```js
getSearchParams('https://biz.lever.me?a=1&b=2&c=3') // {a: '1', b: '2', c: '3'}
getSearchParams('?aa=11') // { aa: '11' } 
getSearchParams('?aa=11&bb=22') // { aa: '11', bb: '22' }
getSearchParams('') // {}
```

### serializeSearchParams
```js
serializeSearchParams({ a: 1, b: 2 }) // 'a=1&b=2'
serializeSearchParams({ a: 1, b: undefined }) // 'a=1'
serializeSearchParams({ a: 1, b: '' })  //'a=1&b='
serializeSearchParams({})  //''
serializeSearchParams()  //''
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
