$(function(){
	//inicializa a estrutura minima do objeto json
	objeto = {since_id:0,results:[],refresh_url:-1};
	//Constante de tempo
	TIME_OUT = 900;
	
	//Evento para iniciar a API
	$("#submit").click(function(){
		eventStartListenet()
	});
	$("#searchbox").keypress(function(e) {
		if(e.keyCode == 13) {
			eventStartListenet();
		}
	});

	//Evento para salvar os tweets e parar a API
	$("#loading").click(function(){
		$.saveListener();
		$.countListener('#count',0);
		$.countListener('#countShow',0);
		$('#load').fadeOut();
		$("#submit").show();
		$("#display").html('');
		$("#loading").hide();
	});
});
function eventStartListenet(){
	if($("#searchbox").val() != ''){
		$('#load').fadeIn(TIME_OUT);
		$("#submit").hide();
		$("#loading").show();
		$.startListener();
	}
}