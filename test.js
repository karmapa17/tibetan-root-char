const {getRootChar} = require('./index');

// rule 1
const res1 = getRootChar('ཀཁཅཆཇཉཏཐཔཕཙཚཛཝཞཟཡཤཧཨ');
console.log(`rule 1: input ཀཁཅཆཇཉཏཐཔཕཙཚཛཝཞཟཡཤཧཨ output ${res1} `);

// rule 2
const res2 = getRootChar('ལྷ');
console.log(`rule 2: input ལྷ output ${res2} `);

// rule 3
const res3 = getRootChar('གངས');
console.log(`rule 3: input གངས output ${res3} `);
