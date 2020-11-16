'use stict';

const s2 = '123 456789 \'Раз два три\' 12345 aren\'t 123 wasn\'t abc';
const expr1 = /'/g;
const expr2 = /aren"t/g;
const expr3 = /wasn"t/g;
let t2 = s2.replace(expr1, '"');
t2 = t2.replace(expr2, 'aren\'t');
t2 = t2.replace(expr3, 'wasn\'t');
console.log('s2=', s2);
console.log('t2=', t2);