const test = require('ava');
const {getRootChar} = require('./../src/');

test('Rule 1 - ཕྱི་དྲོ་བདེ་ལེགས། should have a root character ཕ', (t) => {
  // "Good afternoon" in Tibetan
  t.is(getRootChar('ཕྱི་དྲོ་བདེ་ལེགས།'), 'ཕ');
});

test('Rule 1 - ཁྱེད་རང་སྐུ་གཇུགས་བདེ་པོ་ཡིན་པས། should have a root character ཁ', (t) => {
  // "How are you" in Tibetan
  t.is(getRootChar('ཁྱེད་རང་སྐུ་གཇུགས་བདེ་པོ་ཡིན་པས།'), 'ཁ');
});

test('Rule 2 - ལྷ (\\u0f63\\u0f67) should have a root character ཧ (\\u0f67)', (t) => {
  t.is(getRootChar('ལྷ'), 'ཧ');
});

test('Rule3 - Root character is before subscript ླ \\u0fb3', (t) => {
  t.is(getRootChar('གླང་པོ་ཆེ་པའི་'), 'ག');
});
