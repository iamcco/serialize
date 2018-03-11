### install

```
npm install --save serialize

// or

yarn add serialize
```

### usage

```javascript
import serialize from 'serialize';

serialize({
    key1: 'value1',
    key2: 'value2'
})
// => key1=value1&key2=value2

serialize({
    key1: 'value1',
    key2: 'value2'
}, 'keyOut')
// => keyOut.key1=value1&keyOut.key2=value2

serialize({
    key1: {
        keyIn1: 'valueIn1',
        keyIn2: 'valueIn2',
    },
    key2: 'value2'
})
// => key1.keyIn1=valueIn1&key1.keyIn2=valueIn2&key2=value2

serialize({
    key1: 'value1',
    key2: [1, 2],
})
// => key1=value1&key2[0]=1&key2[1]=2

```
