const testSansStrs1 = [
  'ཀྵ་ཡའི་ནད་སེལ་བའི་སྔགས།', // ཀྵ

  'བྷཻ་ར་བའི་ཞི་བའི་ལས་ཀྱི་བྱ་བ་བདུན་པ།', // བྷ

  'ༀ་མ་ཎི་པ་དྨེ་ཧཱུྃ' // ༀ
];

const sansAnswers1 = [
  '\u0f69',

  '\u0f57',

  'ཨ'
];

module.exports = [testSansStrs1, sansAnswers1];