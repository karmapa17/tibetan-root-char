const test = require('ava');
const tripleCharArr = require('./../src/tripleCharArr');
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

test('Rule 3 - Root character is before subscript like གླང contains a root character ག', (t) => {
  t.is(getRootChar('གླང'), 'ག');
});

test('Rule 3 - Root character is before vowol like སུ contains a root character ས', (t) => {
  t.is(getRootChar('སུ'), 'ས');
});

test('Rule 4-2', (t) => {
  const res = tripleCharArr.map((tripleChars) => getRootChar(tripleChars));
  t.deepEqual(res, ['ག', 'ན', 'ན', 'ན', 'བ', 'བ', 'བ', 'ར', 'ར', 'ར', 'ར', 'ལ', 'ལ', 'ལ', 'ས']);
})