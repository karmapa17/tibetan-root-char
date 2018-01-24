const test = require('ava');
const tripleCharArr = require('./../src/tripleCharArr');
const {getRootChar} = require('./../src/');
const testSans1 = require('./helpers/testData/testSans1');
const testSans2 = require('./helpers/testData/testSans2');
const testData1 = require('./helpers/testData/testData1');
const testData2_1 = require('./helpers/testData/testData2_1');
const testData3 = require ('./helpers/testData/testData3');
const testData4_1 = require('./helpers/testData/testData4_1');
const answers4_2 = require('./helpers/testData/testData4_2');
const testData4_3 = require('./helpers/testData/testData4_3');
const testData4_4 = require('./helpers/testData/testData4_4');
const testData4_5 = require('./helpers/testData/testData4_5');

function testRule(ruleDescription, testStrs, answers) {
  test(ruleDescription, (t) => {
    const res = testStrs.map((str) => getRootChar(str));
    t.deepEqual(res, answers);
  });
}

[
  [
    'Sanskrit Rule 1',
    ...testSans1
  ],
  [
    'Sanskrit Rule 2',
    ...testSans2
  ],
  [
    'Rule 1 - Root character can be confirmed at one step match.',
    ...testData1
  ],
  [
    'Rule 2-1 - Root character is behind the superscript character.',
    ...testData2_1
  ],
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
    'Rule 4-2 = Part of triple consonants with secondary suffix ས, 1st character should be root.',
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
].forEach((testData) => testRule(...testData));
