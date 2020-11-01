const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(a = []) {
  let first = [];
  console.log(typeof a);
  if (!Array.isArray(a)){
    return false;
  }
  
  let Str = a.filter(function (el) {
    return typeof el === "string";
  });

  console.log(Str);
  for (let S of Str) {
    S = S.trim().charAt(0).toUpperCase();
    first.push(S);
  }
  console.log(first.sort().join(""));

  return first.sort().join("");
};
