### install

```
npm install --save serialize-tool

// or

yarn add serialize-tool
```

### usage

```javascript
import serialize from 'serialize-tool';

serialize({
    key1: 'value1',
    key2: 'value2'
})
// => key1=value1&key2=value2

serialize({
    key1: 'value1',
    key2: 'value2'
}, {key: 'keyOut'})
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
}, {withBracket: true})
// => key1=value1&key2[0]=1&key2[1]=2

serialize({
    key1: 'value1',
    key2: [1, 2],
})
// => key1=value1&key2=1&key2=2

```
