const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const answerButtons = document.getElementsByClassName('answerbutton')
const totalStartTime = 15 
const infobox = document.getElementById("infobox")
const realAnswer = document.getElementById("realAnswer")
const timerEl = document.getElementById('countdown');
var shuffledQuestions 
var currentQuestionIndex = 0

startButton.addEventListener('click', startQuiz)
answerButtons[0].addEventListener('click', () => {
    selectAnswer(0)
})
answerButtons[1].addEventListener('click', () => {
    selectAnswer(1)
})
answerButtons[2].addEventListener('click', () => {
    selectAnswer(2)
})
answerButtons[3].addEventListener('click', () => {
    selectAnswer(3)
})

function setQuestion(question){
    questionElement.innerText=question.questionText
    for(var i = 0; i < answerButtons.length; i++){
      answerButtons[i].innerText=question.options[i]  
    }  
}

function countdown() {
    var timeLeft = totalStartTime ;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
          } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
          } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            setNextQuestion()
        }
    }, 1000);
}

function startQuiz() {
    infobox.classList.add('hide')
    currentQuestionIndex = -1
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetAnswer(answerButtons[0])
    resetAnswer(answerButtons[1])
    resetAnswer(answerButtons[2])
    resetAnswer(answerButtons[3])
    countdown()
    currentQuestionIndex++
    setQuestion(questions[currentQuestionIndex])
    realAnswer.innerText = ""
}
  
function selectAnswer(buttonIndex){
    var selectedOption = questions [currentQuestionIndex].options[buttonIndex]
    var answer = questions[currentQuestionIndex].answer
    var isCorrect = selectedOption== answer
    revealAnswer(answerButtons[buttonIndex],isCorrect)
    
    if (isCorrect == false) {
       realAnswer.innerText = answer 
    }
}

function revealAnswer(button, isCorrect) {
    resetAnswer(button)
    if (isCorrect) {
        button.classList.add('correct-answer')
    } else {
        button.classList.add('incorrect-answer')
    }
}

function resetAnswer(button) {
    button.classList.remove('correct-answer')
    button.classList.remove('incorrect-answer')
}
