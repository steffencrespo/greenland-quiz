// let quiz = {
// 	questions: {
// 		question: {
// 			text: [''],
// 			correct: 0,
// 			googleIt: ''
// 		},
// 		question: {
// 			text: [''],
// 			correct: 0,
// 			googleIt: ''
// 		}
// 	}
// }

function hideButtonAndDisplayQuestion() {
	$('.start-btn').click(function(event) {
		event.preventDefault();
		$(event.currentTarget).addClass('hidden');
		$('.question-box').removeClass('hidden');
	});
}

$(function() {
	hideButtonAndDisplayQuestion();
});