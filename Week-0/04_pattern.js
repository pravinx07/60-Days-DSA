function printPattern(n) {
  for (let row = 1; row <= n; row++) {
    let star = "";
    let space = n - row;
    for (let col = 1; col <= space; col++) {
      star += " ";
    }

    let stars = 2 * row - 1;
    for (let j = 1; j <= stars; j++) {
      star += "*";
    }
    console.log(star);
  }
}
printPattern(5);

/*
       *
      ***
     *****
    *******
   *********
 */
