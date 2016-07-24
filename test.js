document.getElementsByTagName("body")[0].onload = function(){
	game = {};
	game.newArr = [];
	game.str = "123+12-(18/4+a)";
	game.strToArray;
	game.podziel = function(){
		game.strToArray = game.str.split('');
		game.strToArray.forEach(game.robol);
		if(game.tmpstr !== ""){
			game.newArr.push(game.tmpstr);
		}
		return game.newArr;
	};
	game.tmpstr = "";
	game.robol = function(elem,index,array){
		if(!checkIfOperator1(elem)){
			game.tmpstr += elem;
		}else{
			game.newArr.push(game.tmpstr);
			game.newArr.push(elem);
			game.tmpstr="";
		}
	};
	document.getElementsByTagName("button")[0].onclick = function(){
		game.str = document.getElementById("input").value;
		document.getElementById("output").innerHTML = game.podziel().toString;
	}
}

function checkIfOperator1(a)
{
	switch (a)
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
		case "^":
			return true;
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