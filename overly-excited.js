// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

// let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// function addExcitement (sentence) {
//   let buildMeUp = ""

//   for ( let i = 0; i < sentence.length; i++) {
//     // buildMeUp = buildMeUp + " " + sentence[i];
//     buildMeUp += `${sentence[i]} `
//     console.log(buildMeUp);
//   }
// }

// addExcitement(sentence);


// Practice: Some words are more exciting than others-
// The learning objective of this exercise is to use the JavaScript if statement inside a loop to do one operation when a certain conditions is true, and a different operation if that condition is false.

// Add logic to addExcitement that places an exclamation point (!) after every third word. Read the following English statement and write the equivalent in JavaSript code to make it work.

// If the current value of the counter variable can be evenly divided by 3 (using the JavaScript remainder operator) add a single exclamation point (!) to the current word in the array.

let excitedSentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

let buildMeUp = "";

// function overlyExcited (excitedSentence) {
  

//   for ( let i = 0; i < excitedSentence.length; i++) {
   
//     if(i % 3 === 0 && i > 0) {
//       buildMeUp += `${excitedSentence[i]} ! `;
//     } else {
//       buildMeUp += `${excitedSentence[i]} `;
//       console.log(buildMeUp);
//     }
//   }
 
// }

// overlyExcited(excitedSentence);

// Practice: Function Arguments
// The learning objective of this exercise is to practice defining and using function arguments.

// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.





// function addExcitement (excitedSentence, punctuation) {
  


//   for ( let i = 0; i < excitedSentence.length; i++) {
//     if(i % 3 === 0 && i > 0) {
//       buildMeUp += ` ${excitedSentence[i]} ${punctuation} `;
     
//     } else {
//       buildMeUp += ` ${excitedSentence[i]} `
//       console.log(buildMeUp)
//     } 
//   }
// }

// addExcitement(excitedSentence, " ? ");

// Challenge: Arrow Function-----------------------------------------


let addExcitement2 = (excitedSentence, punctuation) => {
  


  for ( let i = 0; i < excitedSentence.length; i++) {
    if(i % 3 === 0 && i > 0) {
      buildMeUp += ` ${excitedSentence[i]}${punctuation}`;
      console.log(buildMeUp);
    } else {
      buildMeUp += ` ${excitedSentence[i]}`;
      console.log(buildMeUp)
    
    
    } 
  }
}

addExcitement2 (excitedSentence, "?");