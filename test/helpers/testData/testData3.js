const testStrs3 = [
//subscripts
  'ལྭ་བ་པ།',
  'དགྱེའོ',
  'ཧྲུབ་པ།',
  'བློན་ཆེན།',
  'བརླུགས་པ།',
//vowels
  'མཱ་གྷ།',
  'གིན།',
  'དཱི་རབ།',
  'དངུལ།',
  'དཱུར་ཝ།',
  'རྔེགས།',
  'ནཻ་པཱ་ལ།',
  'འོབས།',
  'སཽ་མ་པུ་རི།',
//special characters
  'དྷཱི་ཏི་ཀ།',
  'དྷཱུ་ཏི།',
//fake samples
  'གྲྀ',
  'གཷ',
  'གླྀ',
  'གཹ',
  'གྀ',
  'གཱྀ'
];

const answers3 = [
//subscripts
  'ལ',
  'ག',
  'ཧ',
  'བ',
  'ར',
//vowels
  'མ',
  'ག',
  'ད',
  'ང',
  'ད',
  'ང',
  'ན',
  'འ',
  'ས',
//special characters
  'ད',
  'ད',
//fake samples
  'ག',
  'ག',
  'ག',
  'ག',
  'ག',
  'ག'
];

module.exports = [testStrs3, answers3];