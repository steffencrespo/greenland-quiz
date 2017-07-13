const QUIZ_START_BUTTON = '.start-btn';
const QUIZ_QUESTION_BOX = '.quiz-question';
const QUIZ_QUESTION_FORM = '.quiz-question-form';
const HIDDEN_ELEMENT = 'hidden';
const QUESTION_SUBMIT_BUTTON = 'quiz-question-submit-btn';

function hideButtonAndDisplayQuestion() {
	$(QUIZ_START_BUTTON).click(function(event) {
		event.preventDefault();
		$(event.currentTarget).addClass(HIDDEN_ELEMENT);
		$(QUIZ_QUESTION_BOX).removeClass(HIDDEN_ELEMENT);
	});
}

function composeQuestion(question) {
	let questionText = question.text;
	let answers = question.answers;
	let helpFromGoogle = question.googleIt;

	let questionHtml = `
				<div class="${QUIZ_QUESTION_BOX}">
				<p>${questionText}</p>
				<form class="${QUIZ_QUESTION_FORM}">
				  <input type="radio" value="${answers[0]}"> ${answers[0]}<br>
				  <input type="radio" value="${answers[1]}"> ${answers[1]}<br>
				  <input type="radio" value="${answers[2]}"> ${answers[2]}<br>
				  <input type="radio" value="${answers[3]}"> ${answers[3]}<br>
				  <input type="radio" value="${answers[4]}"> ${answers[4]}<br>
				  <input class=${QUESTION_SUBMIT_BUTTON} type="submit" value="Next">
				</form>
			</div>
			`
	$(QUIZ_QUESTION_BOX).html(questionHtml);
}

function loadNextQuestion() {
	$("."+QUESTION_SUBMIT_BUTTON).click(function(event) {
		event.preventDefault();
		alert('submitted');
	});
}

$(function() {
	hideButtonAndDisplayQuestion();
	composeQuestion(questions[0]);
	loadNextQuestion();
});

let questions = [
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
];