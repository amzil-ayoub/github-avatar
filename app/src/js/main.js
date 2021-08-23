var avatar = document.getElementById("avatar"),
	clear = document.getElementById("clear"),
	colorInput = document.getElementById("colorInput"),
	generate = document.getElementById("generate"),
	arrOptions = ['0','1'],
	result="";

generate.onclick = function(){
	result="";
	for(let i=0;i<49;i++){
		var n = Math.round(Math.random());
		if(n=='0'){
			result = result + '<div></div>';
		} else { result = result + '<div style="background-color:'+colorInput.value+'"></div>'; }	
	}
	avatar.innerHTML = result;
}

clear.onclick = function(){
	avatar.innerHTML = ""; 
}