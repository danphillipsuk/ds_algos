
function myFunc(event) {
    if (event.keyCode == 13) {
      console.log("ENter pressed")
        let num = document.getElementById("num").value;
        return num;
    }
  }

    console.log(myFunc());

    const num = '4444';

    function luhnsArray(num) {

      numb = []; // inititalise empty array to store result

      // define whether input number is odd or even
      let cont = 0;

      // determine length for modulo
      if (num.length % 2 === 1) {
        cont = 1;
      } else {
        cont = 0;
      }


      for (let i = num.length-1; i > -1; i--) {
        
        if (i % 2 === cont) {
          let test = num[i];   
          let dig =parseInt(test); // convert string to number
          dig += dig; // double the number
          if (dig > 9) {
            let sum = dig % 10;
            numb.push(1 + sum)
          } else { 
            numb.push(dig)
          }
        }
      else {
        let test = num[i];   
        let dig =parseInt(test); // convert string to number
        numb.push(dig)
      }     
    }
      return numb;
    }


    let test = luhnsArray(num);

    console.log(test);

    let luhns = test.reduce(function(a, b) {
      return a+b;
    });

    console.log(luhns%10)