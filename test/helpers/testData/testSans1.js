const testSansStrs1 = [
  'བྷཻ་ར་བའི་ཞི་བའི་ལས་ཀྱི་བྱ་བ་བདུན་པ།', // བྷ
  'ཀྵ་ཡའི་ནད་སེལ་བའི་སྔགས།', // ཀྵ
  'ༀ་མ་ཎི་པ་དྨེ་ཧཱུྃ' // ༀ
];

const sansAnswers1 = [
  '\u0f57',
  '\u0f69',
  'ཨ'
];

module.exports = [testSansStrs1, sansAnswers1];