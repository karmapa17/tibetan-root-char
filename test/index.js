const test = require('ava');
const {getRootChar} = require('./../src/');

test('Rule 1 - "Good afternoon" in Tibetan', (t) => {
  t.is(getRootChar('ཕྱི་དྲོ་བདེ་ལེགས།'), 'ཕ');
});

