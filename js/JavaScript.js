$(document).ready(function(){
		$("#text_a").hide();
		$("#value_login").click(function(){
			$("#text_a").show();
		});
	});
function validasi(){
	var username=document.getElementById("user").value;
	var password=document.getElementById("pass").value;
	if(username != "" && password != ""){
		window.location = "main.html";
	}
}