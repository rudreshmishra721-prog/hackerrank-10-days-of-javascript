function getSecondLargest(nums) {   

  let sortedNums = Array.from(new Set(nums)).sort((a, b) => b - a);
  return sortedNums[1];
}
