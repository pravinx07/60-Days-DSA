for (let i = 1; i <= 5; i++) {        // outer loop → rows
  for (let j = 1; j <= i; j++) {      // inner loop → columns
    process.stdout.write("* ");       // prints in same line
  }
  console.log(); // new line after each row
}