const test = require('ava');
const testData1 = require('./../testData/testData1');
const testData2_1 = require('./../testData/testData2_1');
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
].forEach((testData) => ruleTest(...testData));