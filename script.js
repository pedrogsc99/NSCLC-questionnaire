let currentQuestion = 0;
let userAnswers = [];

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('start-btn').addEventListener('click', startQuiz);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('submit-btn').addEventListener('click', submitQuiz);
});

function startQuiz() {
    document.getElementById('startup-screen').style.display = 'none';
    document.getElementById('questionnaire').style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const question = questions[currentQuestion];
    let html = `<div class="question">
                    <h3>Question ${currentQuestion + 1} of ${questions.length}</h3>
                    <p>${question.question}</p>`;

    if (question.type === 1) {
        html += `<div class="options">`;
        question.options.forEach((option, index) => {
            html += `<label>
                        <input type="radio" name="answer" value="${option}">
                        ${option}
                    </label>`;
        });
        html += `</div>`;
    } else if (question.type === 2 || question.type === 3) {
        html += `<input type="text" id="answer">`;
    } else if (question.type === 4) {
        html += `<div class="steps">`;
        question.steps.forEach((step, index) => {
            html += `<label>
                        <input type="checkbox" name="step" value="${index}">
                        ${step}
                    </label>`;
        });
        html += `</div>`;
    }

    html += `</div>`;
    questionContainer.innerHTML = html;

    document.getElementById('next-btn').style.display = 'inline-block';
    document.getElementById('submit-btn').style.display = 'none';
}

function nextQuestion() {
    saveAnswer();
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        finishQuiz();
    }
}

function saveAnswer() {
    const question = questions[currentQuestion];
    let answer;

    if (question.type === 1) {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        answer = selectedOption ? selectedOption.value : null;
    } else if (question.type === 2 || question.type === 3) {
        answer = document.getElementById('answer').value;
    } else if (question.type === 4) {
        answer = Array.from(document.querySelectorAll('input[name="step"]:checked'))
            .map(checkbox => checkbox.value);
    }

    userAnswers[currentQuestion] = answer;
}

function finishQuiz() {
    document.getElementById('question-container').style.display = 'none';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'inline-block';
}

function submitQuiz() {
    let score = 0;
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = question.correct_answer;

        if (userAnswer === null || userAnswer === undefined) {
            score += scoring.unanswered;
        } else if (Array.isArray(correctAnswer) && Array.isArray(userAnswer)) {
            if (JSON.stringify(userAnswer.sort()) === JSON.stringify(correctAnswer.sort())) {
                score += scoring.correct_answer;
            } else {
                score += scoring.failed_type_1_or_4;
            }
        } else if (userAnswer === correctAnswer) {
            score += scoring.correct_answer;
        } else {
            if (question.type === 1 || question.type === 4) {
                score += scoring.failed_type_1_or_4;
            } else if (question.type === 2) {
                score += scoring.failed_type_2;
            } else if (question.type === 3) {
                score += scoring.failed_type_3;
            }
        }
    });

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your score: ${score.toFixed(2)} / ${questions.length}`;
    resultElement.style.display = 'block';
    document.getElementById('submit-btn').style.display = 'none';
}
