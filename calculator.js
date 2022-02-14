var num1;
var op;
	
function pressBtn(value){
	var prev = document.forms["calc"]["display"].value;
	if (!(prev == "" && value==0)){
		var newval = prev+value;
		document.forms["calc"]["display"].value = newval;
	}
		 
}
	
function pressOP(operator){
	op = operator;
	var display = document.forms["calc"]["display"].value;
	num1 = parseInt(display);
	document.forms["calc"]["display"].value = "";
}
	
function pressEqual(){
	var display = document.forms["calc"]["display"].value;
	var num2 = parseInt(display);
	switch(op){
		case "P":
			var ans=num1+num2;
			break;
		case "M":
			var ans=num1-num2;
			break;	
		case "Multiply":
			var ans=num1*num2;
			break;
		case "D":
			var ans=num1/num2;	
			break;
	}
	document.forms["calc"]["display"].value = ans;
}

function inverse(){
	var display = document.forms["calc"]["display"].value;
	var ans= 1/display;
	document.forms["calc"]["display"].value = ans;
}