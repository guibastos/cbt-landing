$(document).ready(function() {

	$.getJSON('https://guibastos.github.io/cbt-landing/js/qna.json', function(data){
	
		$.each(data, function(indx, json){
			$('.questions-answers').append(
			'<div class = "section-title">'+json.Topic+'</div>');
			for (var w=0;w<json.QuestionAnswers.length;w++){
				$('.questions-answers').append('<div class="question"><ul class = "test-block"><li class = "items-list"><i class="fa fa-caret-right"></i><span class="question-text">'+json.QuestionAnswers[w]["Question"]+'</span></li></ul></div><div class="answer">'+json.QuestionAnswers[w]["Answer"]+'</div>');
			}
		});		

		$('.question').each(function(){
		   $(this).on('click', function() {
				$(this).find("i").toggleClass("fa-caret-right fa-caret-down");
				$(this).next('.answer').toggle();    		
			});
	   });
	});   
});
