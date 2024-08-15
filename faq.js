const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isActive = question.parentElement.classList.contains('active');

    // Close all other open answers
    faqQuestions.forEach(otherQuestion => {
      if (otherQuestion !== question) {
        otherQuestion.parentElement.classList.remove('active');
        otherQuestion.nextElementSibling.style.maxHeight = null;
      }
    });

    // Toggle the current answer
    if (isActive) {
      question.parentElement.classList.remove('active');
      answer.style.maxHeight = null;
    } else {
      question.parentElement.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});
