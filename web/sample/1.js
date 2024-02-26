// quiz.js

function submitQuiz() {
    // Retrieve user selections
    const answers = ['B', 'B', 'A', 'B']; // Correct answers for each question
    let score = 0;

    // Check user answers
    for (let i = 1; i <= answers.length; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);

        if (selectedAnswer) {
            if (selectedAnswer.value === answers[i - 1]) {
                score++;
            }
        }
    }

    // Provide feedback
    const totalQuestions = answers.length;
    const feedbackMessage = `You scored ${score} out of ${totalQuestions}.`;

    document.getElementById('quiz-feedback').innerHTML = `<p>${feedbackMessage}</p>`;
}
