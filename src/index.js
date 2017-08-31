const tokenize = require('tibetan-tokenize');
const rootCharMap = require('./rootCharMap');
const tripleCharArr = require('./tripleCharArr');

function getTibetanRootChar(str) {

  const {tokens: [token]} = tokenize(str);

  const [matchedRule1] = /[ཀཁཅཆཇཉཏཐཔཕཙཚཛཝཞཟཡཤཧཨ]/.exec(token) || [];

  if (matchedRule1) {
    return matchedRule1
  }

  const chars = token.split('');

  for (const char of chars) {
    const [matchedRule2] = /[\u0f90\u0f92\u0f94\u0f95\u0f97\u0f99\u0f9f\u0fa1\u0fa3\u0fa4\u0fa6\u0fa8\u0fa9\u0fab]/.exec(char) || []

    if (matchedRule2) {
      return rootCharMap[matchedRule2];
    }
  }

  // rule 2-2
  if ('ལྷ' === token) {
    return 'ཧ';
  }

  const length = chars.length;

  for (let i = 0; i < length; i++) {
    const [matchedRule3] = /[\u0f71-\u0f7d\u0f80\u0f81\u0fad\u0fb1-\u0fb3\u0fb7]/.exec(chars[i]) || [];
    if (matchedRule3 && (i > 0)) {
      return chars[i - 1];
    }
  }

  const matchedIndices = [];

  let started = false;

  for (let i = 0; i < length; i++) {
    const [matchedRule4] = /[གངདནབམའརལས]/.exec(chars[i]) || [];
    if (matchedRule4) {
      matchedIndices.push(i);
      started = true;
    }
    else if (started && (undefined === matchedRule4)) {
      break;
    }
  }

  const matchedIndicesLength = matchedIndices.length;

  // rule 4-1
  if (4 === matchedIndicesLength) {
    return chars[matchedIndices[1]];
  }

  if (3 === matchedIndicesLength) {
    // 4-2
    const tripleCharStr = matchedIndices.map((index) => chars[index]).join('');
    if (tripleCharArr.includes(tripleCharStr)) {
      return chars[matchedIndices[0]];
    }
    // 4-3
    return chars[matchedIndices[1]];
  }

  // 4-4
  // 4-5
  if ((2 === matchedIndicesLength) || (1 === matchedIndices)) {
    return chars[matchedIndices[0]];
  }
  return null;
}

module.exports.getRootChar = getTibetanRootChar;
