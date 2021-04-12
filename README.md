# lever-utils
Common utils of LEVER


### getSearchParams
```js
getSearchParams('?aa=11') // { aa: '11' } 
getSearchParams('?aa=11&bb=22') // { aa: '11', bb: '22' }
getSearchParams('') // {}
```
