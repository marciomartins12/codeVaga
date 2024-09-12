const isFibonacci = (num)=> {
    if (num < 0) return false; 
    
   
    let a = 0;
    let b = 1;
    
   
    if (num === a || num === b) return true;
  
   
    while (b < num) {
      const next = a + b;
      a = b;
      b = next;
    }
  
   
    return b === num;
  }
  
  
  const numberToCheck = 21; 
  
 
  if (isFibonacci(numberToCheck)) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
  }