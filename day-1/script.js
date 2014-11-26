// window.onl'// // $(document).ready(function() {

// 	// //randon number
// 	// var randomNumber = Math.random(Math.floor() * answers.length);
// }
$(function() {
	var answers = [ "No", "Not today", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it",
									"As I see it yes", "Most likely", "Outlook good", "Signs point to yes", "Reply hazy try again",
									"Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
									"Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

	$('button').on('click', function() {
		var randomNumber = Math.floor(Math.random() * answers.length);
		$('#answer-here').addClass('alert-success alert');
		$('#answer-here').html(answers[randomNumber]);
	});
});