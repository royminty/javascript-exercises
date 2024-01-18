const removeFromArray = function(sampleArray, ...itemsToRemove) {
  //not operator '!', if itemsToRemove array does not include item, send it through / don't filter. If it does, filter it out
  return sampleArray.filter((item) => !itemsToRemove.includes(item)); 
  
};

// Do not edit below this line
module.exports = removeFromArray;
