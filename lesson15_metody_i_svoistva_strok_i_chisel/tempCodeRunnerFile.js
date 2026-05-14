let question = 'would you wear sambrero?'
let indexLetter = '';
for (let i = 0; i < question.length; i++) {
   if (question[i] === 'u') {
      indexLetter += i + ' ';
   }
}
console.log(indexLetter);