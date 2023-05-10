// declare function all question 'class' selector;
const questions = document.querySelectorAll('.question');

// for each question button clicked add event listener function;
questions.forEach(question => {
  question.addEventListener('click', () => {
   
    // click fuction has to switch to activate the 'active class';
    question.classList.toggle('active')
  })
})


