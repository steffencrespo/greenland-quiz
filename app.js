// let quiz = {
// 	questions: {
// 		question: {
// 			text: '',
//			answers: [],
// 			correct: 0,
// 			googleIt: ''
// 		},
// 		question: {
// 			text: '',
//			answers: [],
// 			correct: 0,
// 			googleIt: ''
// 		}
// 	}
// }

const QUIZ_START_BUTTON = '.start-btn';
const QUIZ_QUESTION_BOX = '.question-box';
const HIDDEN_ELEMENT = 'hidden';

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
				<p>What is your favorite question?</p>
				<form>
				  <input type="radio" name="gender" value="male" checked> Male<br>
				  <input type="radio" name="gender" value="female"> Female<br>
				  <input type="radio" name="gender" value="other"> Other
				</form>
			</div>
			`
}

$(function() {
	hideButtonAndDisplayQuestion();
});