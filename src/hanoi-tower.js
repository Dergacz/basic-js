const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
console.log(turnsSpeed);
 let turns = Math.pow(2, disksNumber) - 1;
 let seconds = Math.floor(turns / turnsSpeed * 3600);
 console.log('число ходов = ' + turns);
 console.log('second = ' + seconds);
 return {
     turns,
     seconds
 };
 }