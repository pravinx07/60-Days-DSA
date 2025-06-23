function atoi(str) {
  let i = 0;
  let sign = 1;
  let result = 0;
  while (str[i] === " ") i++;

  if (str[i] === "+" || str[i] === "-") {
    sign = str[i] === "-" ? -1 : 1;
    i++;
  }

  while (i < str.length && (str[i] >= "0" && str[i] <= "9")) {
    let digit = Number(str[i]);
    if (
      result > Math.floor(Math.max / 10) ||
      (result === Math.floor(Math.max / 10) && digit > (sign === 1 ? 7 : 8))
    ) {
      return sign === 1 ? Math.max: Math.min;
    }

    result = result * 10 + digit;
    i++;
  }

   if (sign * result > 2147483647) return 2147483647;
  if (sign * result < -2147483648) return -2147483648;

  
  return result * sign;
}

let s = " -042";
let s3 = "231-abc"

console.log(atoi(s));
console.log(atoi("-91283472332"));
