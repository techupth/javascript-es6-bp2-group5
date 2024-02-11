let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let studentScores = {
  math: 30,
  english: 70,
  tech: 100,
};

// Start coding here

// Merge scores from studentProfile and studentScores
let mergedScores = {
  ...studentProfile.scores,
  ...studentScores,
};
console.log(mergedScores)

// Update studentProfile with the merged scores
let newStudentProfile = {
  ...studentProfile,
  scores: mergedScores,
};

console.log(newStudentProfile);