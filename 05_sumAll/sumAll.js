const sumAll = function(num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);
  let finalNum = 0;
  
  if (min < 0 || max < 0) return "ERROR";

  for (; min <= max; min++) {
    finalNum += min;
  };

  return finalNum;
};

// Do not edit below this line
module.exports = sumAll;
