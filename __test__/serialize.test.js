import serialize from '../serialize';

test('Test simple object', () => {
    expect(serialize({
        key1: 'value1',
        key2: 'value2'
    })).toBe('key1=value1&key2=value2');
});

test('Test object with key', () => {
    expect(serialize({
        key1: 'value1',
        key2: 'value2'
    }, 'keyOut')).toBe('keyOut.key1=value1&keyOut.key2=value2');
});

test('Test deep object', () => {
    expect(serialize({
        key1: {
            keyIn1: 'valueIn1',
            keyIn2: 'valueIn2'
        },
        key2: 'value2'
    })).toBe('key1.keyIn1=valueIn1&key1.keyIn2=valueIn2&key2=value2');
});

test('Test array', () => {
    expect(serialize({
        key1: 'value1',
        key2: [1, 2]
    })).toBe('key1=value1&key2[0]=1&key2[1]=2');
});
