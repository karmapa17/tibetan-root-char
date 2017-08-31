const test = require('ava');
const {getRootChar} = require('./../src/');

test('Rule 1 - "Good afternoon" in Tibetan', (t) => {
  t.is(getRootChar('ཕྱི་དྲོ་བདེ་ལེགས།'), 'ཕ');
});

test('Rule 1 - "How are you" in Tebetan', (t) => {
  t.is(getRootChar('ཁྱེད་རང་སྐུ་གཇུགས་བདེ་པོ་ཡིན་པས།'), 'ཁ');
});

test('Rule 2 - ལྷ (\\u0f63\\u0f67) should have root character ཧ (\\u0f67)', (t) => {
  t.is(getRootChar('ལྷ'), 'ཧ');
});
