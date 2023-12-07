const quizData = [
    {
        question: "How old is Xander?",
        a: '23',
        b: '24',
        c: '25',
        d: '26',
        correct: 'b'
    }, {
        question: "Which highschool did Xander attend?",
        a: "Mang'u High",
        b: "Murang'a High",
        c: "Njiiris",
        d: "Alliance High",
        correct: 'c'
    }, {
        question: "Which team does Xander support?",
        a: 'Liverpool',
        b: 'Manchester United',
        c: 'Manchester City',
        d: 'Chelsea',
        correct: 'd'
    }, {
        question: "What is Xander's favourite drink?",
        a: 'Gilbeys Gin',
        b: 'Best Gin',
        c: 'Soda',
        d: 'None',
        correct: 'd'
    }, {
        question: "What word would best describe Xander?",
        a: 'Weirdo',
        b: 'Nerd',
        c: 'Funny',
        d: 'Bad',
        correct: 'b'
    }, {
        question: "What is Xander's favourite Phrase?",
        a: 'Look at you',
        b: 'That was very unnecessary',
        c: 'Alaaaaa',
        d: 'Alright then',
        correct: 'b'
    }, {
        question: "What is Xander's favourite game?",
        a: 'Among Us',
        b: 'UNO',
        c: 'Pubg',
        d: 'GTA V',
        correct: 'c'
    }, {
        question: "What pet do you think Xander would want?",
        a: 'Cat',
        b: 'Dog',
        c: 'Tiger',
        d: 'Camel',
        correct: 'c'
    }, {
        question: "Which of these would Xander oftenly do?",
        a: 'Blackout in a club',
        b: 'Dress awkwardly',
        c: 'Love unconditionally',
        d: 'Slip and fall',
        correct: 'b'
    }, {
        question: "What is Xander's biggest fear?",
        a: 'Losing a loved one',
        b: 'Bee stings and injections',
        c: 'Being broke',
        d: 'Getting Raped',
        correct:'a'
    }
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll(".answer");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz () {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

function getSelected () {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
};

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
};


submitBtn.addEventListener('click', () => {
    // Check if there is an answer

    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
       currentQuiz++;
       if(currentQuiz < quizData.length) {
        loadQuiz();
        } else {
            alert("You Have Finished!");
    }

    }
});