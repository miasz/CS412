// function
const a_order = word => word.split('').sort().join('');

// given test
console.log(`The word "supercalifragilisticexpialidocious" is "${a_order('supercalifragilisticexpialidocious')}" in alphabetical order.`);
module.exports = {a_order};