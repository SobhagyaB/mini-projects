const quizData = [
    { correctAnswer: "d0" },
    { correctAnswer: "b1" }, 
    { correctAnswer: "a2" },
    { correctAnswer: "b3" },  
    { correctAnswer: "a4" },
    { correctAnswer: "a5" },
    { correctAnswer: "a6" },
    { correctAnswer: "a7" },
    { correctAnswer: "a8" },
    { correctAnswer: "a9" },
];

const submitBtn = document.getElementById('submit');
let currentQuiz = 0;
let score = 0;

// Hide all question containers except the first one
const questionContainers = document.querySelectorAll('.question-container');

// Load the first question
// questionContainers[currentQuiz].classList.remove('hidden');

function getSelectedAnswer() {
    const answerOptions = document.querySelectorAll(`input[name="answer${currentQuiz}"]`);
    let selectedAnswer;
    
    // Check which radio button is selected
    for (let i = 0; i < answerOptions.length; i++) {
        if (answerOptions[i].checked) {
            selectedAnswer = answerOptions[i].id; // Get the selected answer's id
            break;
        }
    }
    
    return selectedAnswer;
}

submitBtn.addEventListener('click', () => {
    const selectedAnswer = getSelectedAnswer();
    
    if (selectedAnswer) {
        // Check if selected answer is correct
        if (selectedAnswer === quizData[currentQuiz].correctAnswer) {
            score++;
        }

        // Hide the current question and move to the next one
        questionContainers[currentQuiz].classList.add('hidden');
        currentQuiz++;

        // If there are more questions, show the next one
        if (currentQuiz < quizData.length) {
            questionContainers[currentQuiz].classList.remove('hidden');
        } else {
            // Show the score
            document.getElementById('quiz').innerHTML = `
                <h2 class="result">You answered ${score}/${quizData.length} questions correctly</h2>
                <button class="reload-btn" onclick="location.reload()">Reload</button>
            `;
        }
    }
});

