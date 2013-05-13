// JavaScript Document

//function onload 
$(document).ready(function(){
	
	//Set Array Variables that set game layout 
	var game1 = [8,0,0,0,0,9,0,0,2,0,0,3,0,0,4,0,9,0,0,0,7,0,3,0,0,4,6,0,8,0,9,0,0,5,0,4,0,0,0,0,7,0,0,0,0,6,0,5,0,0,2,0,7,0,4,9,0,0,8,0,1,0,0,0,3,0,4,0,0,6,0,0,5,0,0,6,0,0,0,0,3];
	var game2 = [0,0,5,0,3,8,0,4,0,0,0,6,2,0,0,3,0,0,0,0,0,0,5,0,7,6,2,0,4,0,7,0,0,0,0,3,0,0,1,0,0,0,5,0,0,6,0,0,0,0,1,0,9,0,5,1,4,0,8,0,0,0,0,0,0,2,0,0,3,9,0,0,0,7,0,5,6,0,4,0,0];
	var game3 = [0,0,0,0,0,1,7,0,0,5,0,0,9,0,7,1,8,0,0,8,0,0,0,0,2,0,5,4,0,1,0,9,0,0,0,2,0,7,0,0,0,0,0,5,0,2,0,0,0,6,0,8,0,1,7,0,9,0,0,0,0,2,0,0,5,4,2,0,8,0,0,6,0,0,6,3,0,0,0,0,0];
	var game4 = [7,8,4,0,0,5,0,0,0,0,0,5,0,6,0,0,0,1,9,0,0,0,4,7,0,5,0,3,0,2,0,0,4,0,0,7,0,0,0,0,1,0,0,0,0,1,0,0,3,0,0,9,0,6,0,7,0,9,5,0,0,0,4,5,0,0,0,7,0,2,0,0,0,0,0,4,0,0,7,1,5];
	var game5 = [0,9,1,0,0,7,0,0,0,4,0,0,5,8,0,0,0,2,3,0,0,0,0,1,0,0,0,7,5,0,0,0,0,6,8,0,0,0,0,1,0,8,0,0,0,0,8,2,0,0,0,0,5,4,6,0,0,8,0,0,0,0,3,5,0,0,0,9,3,0,0,8,0,0,0,7,0,0,1,9,0];
	
	var games = [game1, game2, game3, game4, game5];
	
	//Answers 
	var ansGame1 = [8,0,0,0,0,9,0,1,0,0,0,3,0,0,4,0,9,0,0,0,7,0,3,0,0,4,6,0,8,0,9,0,0,5,0,4,0,0,0,0,7,0,0,0,0,6,0,5,0,0,2,0,7,0,4,9,0,0,8,0,1,0,0,0,3,0,4,0,0,6,0,0,5,0,0,6,0,0,0,0,3];
	var ansGame2 = [7,2,5,6,3,8,1,4,9,1,9,6,2,7,4,3,5,8,4,8,3,1,5,9,7,6,2,2,4,8,7,9,5,6,1,3,9,3,1,8,4,6,5,2,7,6,5,7,3,2,1,8,9,4,5,1,4,9,8,7,2,3,6,8,6,2,4,1,3,9,7,5,3,7,9,5,6,2,4,8,1];
	var ansGame3 = [8,0,0,0,0,9,0,1,0,0,0,3,0,0,4,0,9,0,0,0,7,0,3,0,0,4,6,0,8,0,9,0,0,5,0,4,0,0,0,0,7,0,0,0,0,6,0,5,0,0,2,0,7,0,4,9,0,0,8,0,1,0,0,0,3,0,4,0,0,6,0,0,5,0,0,6,0,0,0,0,3];
	var ansGame4 = [8,0,0,0,0,9,0,1,0,0,0,3,0,0,4,0,9,0,0,0,7,0,3,0,0,4,6,0,8,0,9,0,0,5,0,4,0,0,0,0,7,0,0,0,0,6,0,5,0,0,2,0,7,0,4,9,0,0,8,0,1,0,0,0,3,0,4,0,0,6,0,0,5,0,0,6,0,0,0,0,3];
	var ansGame5 = [8,0,0,0,0,9,0,1,0,0,0,3,0,0,4,0,9,0,0,0,7,0,3,0,0,4,6,0,8,0,9,0,0,5,0,4,0,0,0,0,7,0,0,0,0,6,0,5,0,0,2,0,7,0,4,9,0,0,8,0,1,0,0,0,3,0,4,0,0,6,0,0,5,0,0,6,0,0,0,0,3];
	

	
	//For adding games
	/*var gamex = 
	[0,9,1,0,0,7,0,0,0,
	 4,0,0,5,8,0,0,0,2,
	 3,0,0,0,0,1,0,0,0,
	 7,5,0,0,0,0,6,8,0,
	 0,0,0,1,0,8,0,0,0,
	 0,8,2,0,0,0,0,5,4,
	 6,0,0,8,0,0,0,0,3,
	 5,0,0,0,9,3,0,0,8,
	 0,0,0,7,0,0,1,9,0];*/
	//answer keys
	
	


	
	
function setGame(){
	//Randomize Game
		var gameNum = Math.floor(Math.random()*5)
		
		
		///console.log(gameNum);
	
	
	var currentGame = games[gameNum]
	
	//console.log(currentGame);
			
			//////////////////////////////////////////////////////////////////Reset Current Game Board
				$("#ResetFunction").click(function(){
					for (var i = 0; i < currentGame.length; i++){
					
					//if value is equal to zero then omit 0 amd leave cell blank
					if(currentGame[i] == 0){
						var test = $("#"+i+"c > .cell").val ("");
			
					}
					
					//set number from array and change to readonly
					else{
						$("#"+i+"c > .cell").val (currentGame[i]);
						$("#"+i+"c > .cell").prop('readonly', true);
							
						}
					}	
				});
			///////////////////////////////////////////////////////////////////////////////////////////
			
			//////////////////////////////////////////////////////////////////Get a new random game
				$("#RandomFunction").click(function(){
					var newgameNum = Math.floor(Math.random()*5)
					
					var currentGame = games[newgameNum];
						console.log("Game #"+newgameNum);
						
						for (var i = 0; i < currentGame.length; i++){
							$("#"+i+"c > .cell").prop('readonly', false);
						//if value is equal to zero then omit 0 amd leave cell blank
						if(currentGame[i] == 0){
							var test = $("#"+i+"c > .cell").val ("");
				
						}
						
						//set number from array and change to readonly
						else{
							$("#"+i+"c > .cell").val (currentGame[i]);
							$("#"+i+"c > .cell").prop('readonly', true);
							
						}
					}
				});	
			///////////////////////////////////////////////////////////////////////////////////////////
					console.log(currentGame);
			//go through and assign numbers in game to cells.	
			for (var i = 0; i < currentGame.length; i++){
				
				//if value is equal to zero then omit 0 amd leave cell blank
				if(currentGame[i] == 0){
					var test = $("#"+i+"c > .cell").val ("");
		
				}
				
				//set number from array and change to readonly
				else{
					$("#"+i+"c > .cell").val (currentGame[i]);
					$("#"+i+"c > .cell").prop('readonly', true);
					
				}
			}

}
	
	//randomizeGame();
	
	//////////
	setGame();
	///////////	
	
	$("#checkFunction").click(function(){

///////////////////////////////////////////////////////////// Creates Clone Function to Clone main Array Source: http://my.opera.com/GreyWyvern/blog/show.dml/1725165		
	Object.prototype.clone = function() {
		var newObj = (this instanceof Array) ? [] : {};
			
			for (i in this) {
			
			if (i == 'clone') continue;
			 
			 if (this[i] && typeof this[i] == "object") {
			 
			 newObj[i] = this[i].clone();
				
				} else newObj[i] = this[i]
			
			} return newObj;
		
		};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////					
	
	//removes previous error codes
	$("td").find("input").removeClass("error");
	
	//create Array for Results		
	var results = [];
	//var boxresults = [];
		
		for (var i = 0; i < 81; i++){
			
			var c = "c";
			
			var id = ""+i+c;
		
					//console.log(id);
			
			//get the value of each cell
			var cellVal = parseInt(document.getElementById(id).firstChild.value);
			
			
			
			
			//console.log(cellVal);
			
			
			if(cellVal == ""|| isNaN(cellVal)){
				
				//console.log("please fill out all the cells");	
				//return false;
			}
			
			//add value to array creating master array
			results.push(cellVal);
			
		
			//boxresults.push(boxVal);
					//console.log(boxresults);
		}

		//main row 1
				rowA = results.slice(0,9);
				rowB = results.slice(9,18);
				rowC = results.slice(18,27);
				//main row 2
				rowD = results.slice(27,36);
				rowE = results.slice(36,45);
				rowF = results.slice(45,54);
				//main row 3
				rowG = results.slice(54,63);
				rowH = results.slice(63,72);
				rowI = results.slice(72,81);

		//////////////////////////////////// The Array of Rows
				var resultsArr = [rowA, rowB, rowC, rowD, rowE, rowF, rowG, rowH, rowI];
		//////////////////////////////////			
				
				var resultsRow = resultsArr.clone();
				var resultsCol = resultsArr.clone();
				var resultsBox = resultsArr.clone();
				
				//console.log(resultsArr);
				//console.log(resultsRow);
				//console.log(resultsBox);
		
////////////////////////////////////////////////////////////////////////////////////////////////////////Get Columns
			
				//where we are going to store our columns
				var mainCol = [];
				
				for (var y = 0; y < 9; y++){
					
					
					
					for (var z = 0; z <9; z++){	
						
							id = resultsCol[z].pop(y);	
							
							if(isNaN(id)){
								
								mainCol.push(0);
							
							}else{
								
								mainCol.push(id);
							
							}
						}
					}
				
				
				//Split mainCol
					
					//main col 1
					col9 = mainCol.slice(0,9);
					col8 = mainCol.slice(9,18);
					col7 = mainCol.slice(18,27);
					//main col 2
					col6 = mainCol.slice(27,36);
					col5 = mainCol.slice(36,45);
					col4 = mainCol.slice(45,54);
					//main col 3
					col3 = mainCol.slice(54,63);
					col2 = mainCol.slice(63,72);
					col1 = mainCol.slice(72,81);
					
					
				//////////////////////////////////// The Array of Columns
					columnArr = [col1, col2, col3, col4, col5, col6, col7, col8, col9];
				///////////////////////////////////////
				
				//console.log(columnArr);
				//console.log(resultsArr);
				
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Get Boxes
	/*	boxes = [];
		box1 = [];
		
	for (var r = 0; r < 9; r++){
		
		for (var d = 0; d < 3; d++){
			w = r+=3
			box = parseInt(resultsBox[d].slice(r,w));
			//console.log(box);
			box1.push(box);
			
		
		}
			//box1[0].concat(box1[1],box1[2]);
			
		
	}

	console.log(box1);
				
				*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Check Rows
		for (var x = 0; x < 9; x++){
			
			for (var i = 0; i < 9; i++){
			
			
				var ok = resultsRow[x].indexOf(i);
				var over = resultsRow[x].lastIndexOf(i);

			if (ok != over){
								
				//alert('rows');
									
					x++
					for (var s = 1; s < 10; s++){
									
										
					$("#"+x+""+s).addClass("error");
										
						//console.log(q+""+p);
											
						}
				return false;					
			}
				
				//console.log(x + " " + i);
				//console.log(resultsArr[x]);
				
			}
		}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Check Columns		
			for (var q = 1; q < 9; q++){
					
					for (var p = 1; p < 9; p++){
					//console.log(mainCol);
					//console.log(q+""+p);
						var ok = columnArr[q].indexOf(p);
						var over = columnArr[q].lastIndexOf(p);
						//console.log(ok);
						//console.log(over);
						
							if (ok != over){
								
								//alert('columns');
									
									q++
									for (var s = 1; s < 10; s++){
									
										
										$("#"+s+""+q).addClass("error");
										
										
											
									}
									
									return false;
								}
						
					//console.log(q + "" + p);
					//console.log(resultsArr[x]);
				}
			}
	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Final Comparisson	
		


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Check Boxes		
			
	
	
	});//Closes Check Function
		
});//Closes Doc Ready


