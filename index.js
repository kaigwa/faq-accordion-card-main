// get all accordion questions through 'class' selector;
const questions = document.querySelectorAll('.question');
const panels = document.querySelectorAll('.panel');

// for each question button clicked add event listener function;
questions.forEach(question => {
  question.addEventListener('click', () => {
      
   
    // click function has to switch to activate the 'active class';
    question.classList.toggle('active');
  })
})







