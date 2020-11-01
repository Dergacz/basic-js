const CustomError = require("../extensions/custom-error");


module.exports = function countCats(arr = []) {
  
  let stack = 0;
    arr.forEach(row =>{
      row.forEach(element => element == '^^' ? stack++ : 1)});
      return stack;

};
