const tokenize = require('tibetan-tokenize');
const rootCharMap = require('./rootCharMap');
const tripleCharArr = require('./tripleCharArr');
const sansCharMap = require('./sansCharMap');

function getTibetanRootChar(str) {

  const dePrefixStr = str.replace(/^(འཕགས་(པ|བ)|དཔལ(?!་གྱི)(་ལྡན)?)་/, '');

  const {tokens: [token]} = tokenize(dePrefixStr);

  if (/[ཊྚཋྛཌྜཎྞཥྵ\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9ཱྰ\u0f73\u0f75-\u0f79\u0f7b\u0f7d-\u0f83ྶྺ]|(ངྱ)|(གྶ)|(ནྡ)|(དྨ)|(ཙྪ)|(མྦ)|([གཌདབཛ]ྷ)|(ཀྵ)|(ྒྷ)|(ྜྷ)|(ྡྷ)|(ྦྷ)|(ྫྷ)|(ྐྵ)/.test(token)) {
    const [matchedSansRule1] = /^([གཌདབཛ]ྷ)|^(ཀྵ)/.exec(token) || [];

    if (matchedSansRule1) {
      return sansCharMap[matchedSansRule1];
    }

    const [matchedSansRule2] = /[ཀཁགངཅཆཇཉཊཋཌཎཏཐདནཔཕབམཙཚཛཝཞཟའཡརལཤཥསཧཨ\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69]/.exec(token) || [];

    if (matchedSansRule2) {
      return matchedSansRule2;
    }
  }

  const [matchedRule1] = /[ཀཁཅཆཇཉཏཐཔཕཙཚཛཝཞཟཡཤཧཨ]/.exec(token) || [];

  if (matchedRule1) {
    return matchedRule1;
  }

  const chars = token.split('');

  for (const char of chars) {
    const [matchedRule2] = /[\u0f90\u0f92\u0f94\u0f95\u0f97\u0f99\u0f9f\u0fa1\u0fa3\u0fa4\u0fa6\u0fa8\u0fa9\u0fab]/.exec(char) || []

    if (matchedRule2) {
      return rootCharMap[matchedRule2];
    }
  }

  // rule 2-2
  if (/ལྷ/.test(token)) {
    return 'ཧ';
  }

  const length = chars.length;

  for (let i = 0; i < length; i++) {
    const [matchedRule3] = /[\u0f72\u0f74\u0f7a\u0f7c\u0fad\u0fb1-\u0fb3\u0fb7]/.exec(chars[i]) || [];
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
    // rule 4-2
    const tripleCharStr = matchedIndices.map((index) => chars[index]).join('');
    if (tripleCharArr.includes(tripleCharStr)) {
      return chars[matchedIndices[0]];
    }
    // rule 4-3
    return chars[matchedIndices[1]];
  }

  // rule 4-4
  // rule 4-5
  if ((2 === matchedIndicesLength) || (1 === matchedIndicesLength)) {
    return chars[matchedIndices[0]];
  }
  return null;
}

module.exports.getRootChar = getTibetanRootChar;
