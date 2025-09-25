// Function to build LPS (Longest Prefix Suffix) array
function computeLPS(pattern) {
    let lps = new Array(pattern.length).fill(0);
    let len = 0; // length of previous longest prefix suffix
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1]; // backtrack
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}

// KMP Search Function
function KMPSearch(text, pattern) {
    let lps = computeLPS(pattern);
    let i = 0; // index for text
    let j = 0; // index for pattern
    let result = []; // store positions of matches

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === pattern.length) {
            result.push(i - j); // match found at index (i - j)
            j = lps[j - 1]; // continue searching
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // use LPS to skip
            } else {
                i++;
            }
        }
    }

    return result;
}

// Example Usage
let text = "ababcabcabababd";
let pattern = "ababd";
console.log("Pattern found at indices:", KMPSearch(text, pattern));
