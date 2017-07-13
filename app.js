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

function hideElement() {
	$('.start-btn').click(function(event) {
		event.preventDefault();
		$(event.currentTarget).addClass('hidden');
	});
}

$(function() {
	hideElement();
});