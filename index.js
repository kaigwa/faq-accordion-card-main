// declare function all question 'class' selector;
const questions = document.querySelectorAll('.question');
// const panels = document.querySelectorAll('.panel');

// for each question button clicked add event listener function;
questions.forEach(question => {
  question.addEventListener('click', (e) => {
   
    
    // click fuction has to switch to activate the 'active class';
    question.classList.toggle('active')
  })
})


// panels.forEach((acc) => {
//   if (
//     e.target.nextElementSibling !== acc &&
//     acc.classList.contains('active')
//   ) {
//     acc.classList.remove('active');
   
//   }
// });
