function hideButtonAndDisplayQuestion() {
	$(".start-btn").click(function(event) {
		event.preventDefault();
		$(".quiz-question").show();
		$(".quiz-question-counter").show();
		$(".quiz-question-results").show();
		$(".start-btn").hide();
		composeQuestion();
	});
}

function composeQuestion() {
	// get rid of useless variables
	let question = quiz.questions[currentQuestion];
	let helpFromGoogle = question.googleIt;

	let questionHtml = 
		`<div class="quiz-question">
			<p>${question.text}</p>
			<form class="quiz-question-form"> `;

	for(let i = 0; i < question.answers.length; i++) {
		questionHtml += 
			`<input class="quiz-answer" type="radio" name="answer" value="${i}"> ${question.answers[i]}<br>`;
	}

	questionHtml += `</form></div>`;

	$(".quiz-question").html(questionHtml);
	hideNextQuestionButton();
	updateProgressCounter();
}

function updateProgressCounter() {
	$(".quiz-question-counter").html(`<span>This is question number ${currentQuestion+1} of ${quiz.questions.length}</span>`);
	displayRestartButtonIfLastQuestion();
}

function updateCorrectAnswersProgress() {
	correctAnswers ++;
	$(".quiz-question-results").html(`<span> ${correctAnswers} correct so far</span>`)
}

function displayRestartButtonIfLastQuestion() {
	if (currentQuestion+1 == quiz.questions.length) {
		$(".quiz-reset-button").show();
		restartQuiz();
	}
}

function restartQuiz() {
	$(".quiz-reset-button").on('click', function(event) {
		location.reload();
	});
}

function selectAnswerAndDisplayCorrect() {
	$(".quiz-question").on('click', "input[name='answer']", function(event) {
		disableRadioButtons();
		displayNextQuestionButton();
		let userAnswerId = $("input[name='answer']:checked").val();
		if (userAnswerId == quiz.questions[currentQuestion].correct) {
			updateCorrectAnswersProgress();
			$(".quiz-question").html(`<div><span>Well done, your answer is correct!</span></div>`);
		} else {
			$(".quiz-question").html(`
				<div><span>${quiz.questions[currentQuestion].text} <br>  
				You answered ${quiz.questions[currentQuestion].answers[userAnswerId]} <br>
				The correct answer is ${quiz.questions[currentQuestion].answers[quiz.questions[currentQuestion].correct]}
				</span></div>`);
		}

	});

	// this takes care of handling user click on a radio button
	// when user clicks an answer it evaluates it and shows whether correct or not
}

function displayNextQuestionButton() {
	$(".quiz-question-submit-btn").show();
}

function hideNextQuestionButton() {
	$(".quiz-question-submit-btn").hide();
}

function disableRadioButtons() {
	$("input[name='answer']").attr('disabled',true);
}

function loadNextQuestion() {
	$(".quiz-group").on('click', ".quiz-question-submit-btn", function(event) {
		event.preventDefault();
		currentQuestion++;
		composeQuestion();
	});
}

function loadQuiz() {
	$("#quiz-title").text(quiz.name);
	$(".quiz-question").hide();
	$(".quiz-question-counter").hide();
	$(".quiz-question-results").hide();
	$(".quiz-reset-button").hide();
	$(".quiz-group").append(`<input class="quiz-question-submit-btn" type="submit" value="Next">`);
	loadNextQuestion();
	hideNextQuestionButton();
	selectAnswerAndDisplayCorrect();
	hideButtonAndDisplayQuestion();
}

$(function() {
	loadQuiz();
});

let currentQuestion = 0;
let correctAnswers = 0;

let quiz = {
	name: 'Greenland Quiz',
	questions: [
		{
			text: "In what continent is Greenland Physically located?",
			answers: ["north america", "europe", "asia", "oceania", "south america"],
			correct: 0,
			googleIt: ''
		},

		{
			text: "To what country does Greenland belong to as a territory?",
			answers: ["Iceland", "Sweden", "United States", "Canada", "Denmark"],
			correct: 4,
			googleIt: ''
		},

		{
			text: "What is the native name of Greenland?",
			answers: ["North Pole", "Laponia", "Chukotka", "Kalaallit Nunaat", "Danika"],
			correct: 3,
			googleIt: ''
		},

		{
			text: "How is a Greenland native called?",
			answers: ["Esqimo", "Danish", "Innuit", "American", "La ponian"],
			correct: 1,
			googleIt: ''
		},

		{
			text: "What is the current population?",
			answers: ["56 thousand", "1 million", "560 thousand", "5 thousand", "100 million"],
			correct: 0,
			googleIt: ''
		},

		{
			text: "What is the name of the capital?",
			answers: ["Nuuk", "Sisimiut", "Illulisat", "Qaqortoq", "Kangerslussuaq"],
			correct: 0,
			googleIt: ''
		},

		{
			text: "Which animal represents the independent internal government of Greenland?",
			answers: ["Arctic Whale", "Seal", "Polar bear", "Arctic Salmon", "Shark"],
			correct: 2,
			googleIt: ''
		},

		{
			text: "Greenland has a very unique type of soil only found in the Northern Hemisphere. It is called:",
				answers: ["Frozen Clay", "Polar Ice Cap", "Shallow Chalk", "Tar Sand", "Permafrost"],
				correct: 4,
				googleIt: ''
		},

		{
			text: "Out of the total area, what percentage of it is covered by the Greenland Ice Sheet?",
				answers: ["81%", "99%", "95%", "97%", "70%"],
				correct: 0,
				googleIt: ''
		},

		{
			text: "Following the WWII, in 1946 the USA made an unsuccessful offer to buy Greenland from Denmark. The offered amount was:",
				answers: ["100 thousand dollars", "1 million dollars", "100 million dollars", "90 million dollars", "1 billion dollars"],
				correct: 2,
				googleIt: ''
		},

		{
			text: "From 1960 to 1966 the USA tried to build a subterranean network of secret missile launch sites in the Greenlandic Ice Cap, which was later abandoned as unworkable. The project was named:",
				answers: ["Icework", "Iced Weasel", "Underground War", "Iceworm", "Sub Zero Arizona"],
				correct: 3,
				googleIt: ''
		}
]};