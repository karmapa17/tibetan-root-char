const testSansStrs2 = [
  'གཎ་ཌཱིའི་དུས་ཀྱི་མདོ།', // ཎ
  'ཌོམྦིའི་གླུ།', // ཌ
  'པརྞ་ཤ་བ་རིའི་མདོ།', // ྞ
  'སཱ་ལུའི་ལྗང་པ་ཞེས་བྱ་བ་ཐེག་པ་ཆེན་པོའི་མདོ།', // ཱ \u0f71
  'ཤྰཀྱ་ཐུབ་པའི་སྙིང་པོའི་གཟུངས།', // ྰ \u0fb0
  'བཅོྃད་མ་ཤེས་རབ་ཀྱི་ཕ་རོལ་ཏུ་ཕྱིན་པའི་སྙིང་པོ།', // ྃ

  'རྀ་ཤི་ཨ་ར་ལིའི་རྒྱུད་ཀྱི་རྒྱལ་པོ་ཞེས་བྱ་བ།', // ྀ
  'སངྱས་ཐྃད་ཀྱི་ཡན་ལག་དང་ལྡན་པ་ཞེས་བྱ་བའི་གཟུངས།', // ངྱ
];

const sansAnswers2 = [
  'ག',
  'ཌ',
  'པ',
  'ས',
  'ཤ',
  'བ',

  'ར',
  'ས',
];

module.exports = [testSansStrs2, sansAnswers2];