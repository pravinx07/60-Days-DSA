// write a func that takes a two parameter,
// a string and a character to count ,
// func should return the number of times the specified
// character appear in the string


function countChar(str, char) {
    str = str.toLowerCase();
    char = char.toLowerCase();
    str = str.split("");
  
    //   str = str.map((item)=>item.char === "l")
  
    let count = 0;
    for (let i = 0; i <= str.length; i++) {
      // console.log(str[i]);
      if (str[i] === char) count++;
    }
    //   console.log(str);
    // console.log(count);
    return count;
  }
  
  console.log(countChar("helllo", "L"));