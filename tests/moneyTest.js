import formatCurrency from "../scripts/utils/money.js";

//Basic Test Cases
// Test case : 1
console.log('Test suite: formatCurrency');
console.log('convert cents into dollars');
if(formatCurrency(2095) === '20.95'){
  console.log('passed');
}
else{
  console.log('failed');
}

//Edge Test cases(something tricky)
// Test case : 2
console.log('work with 0');
if(formatCurrency(0) === '0.00'){
  console.log('passed');
}
else{
  console.log('failed');
}

// Test case : 3
console.log('rounds up to the nearest cent');
if(formatCurrency(2000.5) === '20.01'){
  console.log('passed');
}
else{
  console.log('failed');
}

