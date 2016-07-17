function sendQuery(){
	var log = document.getElementById("log");
	var str = document.getElementById("input").value.replace(/\s+/g, '');
	log.innerHTML += str + "<br/>";
	var wynik = getMeWynik(str);
}

function getMeWynik(str) 
{
	var strArray = str.split('');
	var cos = new Array();
}

function checkIfOperator(zmienna)
{
	switch (zmienna)
	{	
		case "+":
			return true; 
			break; 
		case "-":
			return true;
		    break;
		case "*":
			return true;
		    break;
		case "/":
			return true;
		    break;
		case "=":
			return true;
		    break;
		case "s":
			return "?";
			break;
		case "(":
			return true;
			break;
		case ")":
			return true;
			break;
		default:
		    return false;
	}	
	
}