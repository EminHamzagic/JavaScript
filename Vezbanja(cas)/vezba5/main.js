function nextPrime(n){
    num = n;
    while(true){
      for (let i = 2, s = Math.sqrt(num); i <= s; i++){
        if (num % i === 0){
          break;
        }
        return num;
        break
      }
      
    //   continue
    }
    //   return num;
  }

console.log(nextPrime(0));