var emojis = ['😠','😦','😑','😀','😍'];

$("input").mousemove(function(){
	var i = $(this).val();
	$(".emojis").html(emojis[i]);
});
