const palindromes = string => {

        // strip out spaces and special characters using regex
        const newPal = string.replace(/[.,!?\s]/g, '').toLowerCase();
    
        // get length of input
        const len = newPal.length-1;

        // compare first and last characters to see if they match, then step in one if they do, or return false if not
        for (let i = 0; i < len/2; i++) {
            if (newPal[i] != newPal[len-i]) { 
                return false;
            } 
        }
        return true;
  };

  console.log(palindromes('red rum, sir, is murder'));

  console.log(palindromes('Eva, can I see bees in a cave?'));

  console.log(palindromes('Doc, note, I dissent. A fast never prevents a fatness. I diet on cod.'));

 