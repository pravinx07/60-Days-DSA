// Problem Statement
// You are at a party with n people labeled from 0 to n - 1. A celebrity is defined as someone who:

// Is known by everyone else.

// Doesn't know anyone else.

// You are given a helper function:


var findCelebrity = function(n) {
    let candidate = 0;

    // Step 1: Find the candidate
    for (let i = 1; i < n; i++) {
        if (knows(candidate, i)) {
            candidate = i;
        }
    }

    // Step 2: Verify candidate
    for (let i = 0; i < n; i++) {
        if (i !== candidate) {
            if (knows(candidate, i) || !knows(i, candidate)) {
                return -1;
            }
        }
    }

    return candidate;
};

const M = [
  [false, true, false],  // person 0 knows 1
  [false, false, false], // person 1 knows no one (potential celeb)
  [true, true, false]    // person 2 knows 0 and 1
];

function knows(a, b) {
    return M[a][b];
}


console.log(findCelebrity(3));
