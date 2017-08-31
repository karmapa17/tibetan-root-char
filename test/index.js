const test = require('ava');
const testData3 = require ('./../testData/testData3');
const testData4_1 = require('./../testData/testData4_1');
const tripleCharArr = require('./../src/tripleCharArr');
const answers4_2 = require('./../testData/testData4_2');
const testData4_3 = require('./../testData/testData4_3');
const testData4_4 = require('./../testData/testData4_4');
const testData4_5 = require('./../testData/testData4_5');

const {getRootChar} = require('./../src/');

function ruleTest(ruleDescription, testStrs, answers) {
  test(ruleDescription, (t) => {
    const res = testStrs.map((str) => getRootChar(str));
    t.deepEqual(res, answers);
  });
}

[
  [
    'Rule 2-2 - The root character of ལྷ (\\u0f63\\u0fb7) is ཧ (\\u0f67)',
    ['ལྷའི་རྔ་ཅན།'], ['ཧ']
  ],
  [
    'Rule 3 - Root is before vowels, subscript, special characters.',
    ...testData3
  ],
  [
    'Rule 4-1 - Quadruple consonants, 2nd character should be root.',
    ...testData4_1
  ],
  [
    'Rule 4-2 = A part of triple consonants with secondary suffix ས, 1st character should be root.',
    tripleCharArr, answers4_2
  ],
  [
    'Rule 4-3 - Normal triple consonants, 2nd character should be root.',
    ...testData4_3
  ],
  [
    'Rule 4-4 - Double consonants, 1st character should be root.',
    ...testData4_4
  ],
  [
    'Rule 4-5 - Single consonant that can also be prefix or suffix, is the root.',
    ...testData4_5
  ]
].map((testData) => ruleTest.apply(null, testData));

/*
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

test('Rule 2-2 - The root character of ལྷ (\\u0f63\\u0fb7) is ཧ (\\u0f67)', (t) => {
  t.is(getRootChar('ལྷ'), 'ཧ');
});
*/