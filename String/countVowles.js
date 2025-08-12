function countVowels(s){
    let v = ["a", "i","e","o", "u"];
    let i = 0; // for traversing on vowels
    let j = 0 ;//for traversing on str

    let vowelsCount = 0, consonentsCount = 0;
    
    while(i < v.length && j < s.length){
        if(s[j] === v[i]){
            vowelsCount++
            i++;
            j++;
        }
        consonentsCount++;
        j++
    }

    return consonentsCount

}

let s = "Hello World"

console.log(countVowels(s));
