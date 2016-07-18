function sendQuery(){
	var log = document.getElementById("log");
	var str = document.getElementById("input").value.replace(/\s+/g, '');
	log.innerHTML += str + "<br/>";
	var wynik = getMeWynik(str);
}

function getMeWynik(str) 
{
	var strArray = str.split('');
	stackOperators = new Array();
	strArray.forEach(myfunction);
	while(stackOperators.length > 0){
		document.getElementById("output").innerHTML += stackOperators.pop() + "<br />";
	}

}

function myfunction(element, index, array)
{
	var output = document.getElementById("output");
	var log = document.getElementById("log");
	
	if (checkIfOperator(element))
	{
		if(element==")")
		{
			log.innerHTML += "element jest nawiasem ) ! <br />"
			while(stackOperators[stackOperators.length-1]!="(")     
				output.innerHTML += stackOperators.pop();
			stackOperators.pop();/*usuwanie "(" z stack*/
		}
		else
		{
			if(stackOperators.length>0)
			{
				if (priorytet(element)<=stackOperators[stackOperators.length-1]) 
				{
					log.innerHTML += "wszedlem do if element <= elementStackOperator <br />"
					output.innerHTML += stackOperators.pop() + "<br />"	
				}	
			}	
			log.innerHTML += "dodaje element " + element + "do stackOperators <br />"
			stackOperators.push(element)
		}
	}
	else
		output.innerHTML += element;
	if(element == array[array.length-1]){
		log.innerHTML+= stackOperators.toString();
	}
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
		case "(":
			return true;
			break;
		case ")":
			return true;
			break;
		case "^":
			return true;
			break;
		default:
		    return false;
	}	
	
}
function priorytet(zmienna)
{
	switch (zmienna)
	{	
		case "+":
			return 0; 
			break; 
		case "-":
			return 0;
		    break;
		case "*":
			return 1;
		    break;
		case "/":
			return 1;
		    break;
		case "=":
			return "?";
		    break;
		case "(":
			return 10;
			break;
		case ")":
			return 10;
			break;
		case "^":
			return 2;
			break;
		default:
			document.getElementById("log").innerHTML += "Nieznany operator(funckja priorytet)";
		    return false;
	}	
	
}