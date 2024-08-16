const faqQuestions = document.querySelectorAll('.faq-question');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const noResultsMessage = document.getElementById('no-results-message');

// Function to filter FAQs based on search query
function filterFAQs() {
    const query = searchInput.value.toLowerCase();
    let hasResults = false;

    faqQuestions.forEach(question => {
        const questionText = question.textContent.toLowerCase();
        const answer = question.nextElementSibling;
        const answerText = answer.textContent.toLowerCase();

        const isMatch = questionText.includes(query) || answerText.includes(query);

        if (isMatch) {
            question.parentElement.style.display = 'block';
            hasResults = true;
        } else {
            question.parentElement.classList.remove('active'); // Close the answer if it doesn't match
            answer.style.maxHeight = null; 
            question.parentElement.style.display = 'none';
        }
    });

    // Show/hide "no results" message
    noResultsMessage.style.display = hasResults ? 'none' : 'block';
}

// Add event listeners for search
searchInput.addEventListener('input', filterFAQs); // Filter as user types
searchButton.addEventListener('click', filterFAQs); // Filter on button click

// FAQ Toggle Functionality
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