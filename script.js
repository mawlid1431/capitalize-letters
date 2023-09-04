// Good Luck 💪🏾
 



function makeCapital(inputString) {
  // Split the input string into an array of words
  const words = inputString.split(' ');

  // Iterate through the words and capitalize the first character
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the words back into a sentence
  const formattedString = words.join(' ');

  return formattedString;
}

// Example usages:
console.log(makeCapital("my name is ali")); // Output: "My Name Is Ali"
console.log(makeCapital("fikrcamp Bootcamp")); // Output: "Fikrcamp Bootcamp"
console.log(makeCapital("i live In Paris")); // Output: "I Live In Paris"

