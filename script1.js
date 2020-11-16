'use stict';

const s = '123 456789 \'Раз два три\' 12345';
const expr = /'/g;
let t = s.replace(expr, '"');
console.log(s, expr, t);