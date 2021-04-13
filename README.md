# lever-utils
Common utils of LEVER


### getSearchParams
```js
getSearchParams('https://biz.lever.me?a=1&b=2&c=3') // {a: '1', b: '2', c: '3'}
getSearchParams('?aa=11') // { aa: '11' } 
getSearchParams('?aa=11&bb=22') // { aa: '11', bb: '22' }
getSearchParams('') // {}
```

### randomStr
```js
randomStr() // '1e82e'
```
