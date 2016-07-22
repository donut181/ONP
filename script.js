function sendQuery(){
	document.getElementById("output").innerHTML = "";
	var log = document.getElementById("log");
	var str = document.getElementById("input").value.replace(/\s+/g, '');
	log.innerHTML = str + "<br/>";
	var wynik = getMeWynik(str);
}

function getMeWynik(str) 
{
	var strArray = str.split('');
	stackOperators = new Array();
	strArray.forEach(myfunction);
	while(stackOperators.length > 0){
		outputAdd(stackOperators.pop());
	}

}
function outputAdd(str)
{
	document.getElementById("output").innerHTML += str+";";
}
function myfunction(element, index, array)
{
	var log = document.getElementById("log");
	if (element=="(")
		stackOperators.push(element);
	if(element==")")
	{
		log.innerHTML += "element jest nawiasem ) ! <br />"
		while(stackOperators[stackOperators.length-1]!="(")     
			outputAdd(stackOperators.pop());
		stackOperators.pop();/*usuwanie "(" z stack*/
	}
	if (checkIfOperator(element).operator)	/*dopoki na stosie jest jakis operator i:*/
	{
		while(stackOperators.length>0 && ((checkIfOperator(element).lacznosc=="left"&&priorytet(element)<=priorytet(stackOperators[stackOperators.length-1])) || (checkIfOperator(element).lacznosc=="right"&&priorytet(element)<priorytet(stackOperators[stackOperators.length-1])) ))
		{
			outputAdd(stackOperators.pop());
		}		
		log.innerHTML += "dodaje element " + element + "do stackOperators <br />";
		stackOperators.push(element);
	}
	else if (element!="("&&element!=")")
		outputAdd(element);
	/*Jeśli dojdziemy do końca wyrażenia, to ze stosu operatorów pobieramy operatory 
	i przenosimy je kolejno na wyjście aż do wyczyszczenia stosu. Algorytm kończymy.*/
	if(index == array.length-1){
		log.innerHTML+= stackOperators.toString();
	}
}
function checkIfOperator(zmienna)
{
	switch (zmienna)
	{	
		case "+":
			return {operator:true, lacznosc:"left"}; 
			break; 
		case "-":
			return {operator:true, lacznosc:"left"};
		    break;
		case "*":
			return {operator:true, lacznosc:"left"};
		    break;
		case "/":
			return {operator:true, lacznosc:"left"};
		    break;
		case "^":
			return {operator:true, lacznosc:"right"};
			break;
		default:
		    return false;
	}	
	
}
function priorytet(zmienna)
{
	switch (zmienna)
	{	
		case "(":
			return 0; 
			break; 
		case ")":
			return 0;
		    break;
		case "+":
			return 1; 
			break; 
		case "-":
			return 1;
		    break;
		case "*":
			return 2;
		    break;
		case "/":
			return 2;
		    break;
		case "^":
			return 3;
			break;
		default:
			document.getElementById("log").innerHTML += "Nieznany operator(funckja priorytet)";
		    return false;
	}	
	
}