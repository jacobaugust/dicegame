let playForLoss = Math.floor(Math.random() * (0 - -4) + -4);
let shortRunGain = Math.floor(Math.random() * (4 - 1) + 1); 
let medRunGain = Math.floor(Math.random() * (7 - 5) + 5);
let longRunGain = Math.floor(Math.random() * (15 - 7) + 7);
let shortPassGain = Math.floor(Math.random() * (6 - 4) + 4);
let medPassGain = Math.floor(Math.random() * (12 - 7) + 7);
let longPassGain = Math.floor(Math.random() * (20 - 13) + 13);


function gameIntro() {
	//result variable
	let diceRandomNumber;
	//intro
	alert("Welcome to the Red Zone Challenge... [Instructions: You have four downs to score a TD in the Redzone... Pick your play and best of luck!]");
	//sides of dice determined
	let playerName;
	playerName = prompt("What is your name?");
	firstDown (playerName, diceRandomNumber);
	}

function firstDown (playerName, diceRandomNumber, randomSixSided, failSixSided, playResult) {
	let playSelection;
	playSelection = prompt(""+ playerName +"... FIRST DOWN!!!, Which play would you like to run...  {Short Run: Enter 1, Medium Run: Enter 2, Long Run: Enter 3, Short Pass: Enter 4, Medium Pass: Enter 5, Long Pass: Enter 6}");
	let resultOne;
	let resultTwo;
	let resultThree;
	let resultFour;
	let resultFive;
	let resultSix;
	switch (true) {
			case playSelection === "1":
			resultOne = rollDie(6);
			if (resultOne > 1) {
				playResult = shortRunGain;
			}
			else {
				playResult = playForLoss;
			}
			break;
		case playSelection === "2":
		    resultTwo = rollDie(8);
		    if (resultTwo > 3) {
				playResult = medRunGain;
			}
			else {
				playResult = playForLoss;
			}
		    break;
		case playSelection === "3":
			resultThree = rollDie(12);
			if (resultThree > 6) {
				playResult = longRunGain;
			}
			else {
				playResult = playForLoss;
			}
			break;
		case playSelection === "4":
		    resultFour = rollDie(8);
		    if (resultFour > 2) {
				playResult = shortPassGain;
			}
			else {
				playResult = playForLoss;
			}
		    break;
		case playSelection === "5":
			resultFive = rollDie(12);
			if (resultFive > 5) {
				playResult = medPassGain;
			}
			else {
				playResult = playForLoss;
			}
			break;
		case playSelection === "6":
		    resultSix = rollDie(20);
		    if (resultSix > 10) {
				playResult = longPassGain;
			}
			else {
				playResult = playForLoss;
			}
		    break;
		default: 
			alert("What are you doing guy!");
			break;			
	}

	
	alert(playResult + "yards");

	let yardsToTouchdown = 20 - playResult;

	alert(""+ playerName +"... You have "+ yardsToTouchdown +" yards to a TD!");

	secondDown (playerName, diceRandomNumber, yardsToTouchdown);
}

function secondDown (playerName, diceRandomNumber, yardsToTouchdown) {
	let playSelection;
	playSelection = prompt(""+ playerName +"...... SECOND DOWN!!!, Which play would you like to run...  {Short Run: Enter 1, Medium Run: Enter 2, Long Run: Enter 3, Short Pass: Enter 4, Medium Pass: Enter 5, Long Pass: Enter 6}");
	let resultOne;
	let resultTwo;
	let resultThree;
	let resultFour;
	let resultFive;
	let resultSix;
	switch (true) {
		case playSelection === "1":
			resultOne = rollDie(6);
			if (resultOne > 1) {
				playResult = shortRunGain;
			}
			else {
				playResult = playForLoss;
			}
			break;
		case playSelection === "2":
		    resultTwo = rollDie(8);
		    if (resultTwo > 3) {
				playResult = medRunGain;
			}
			else {
				playResult = playForLoss;
			}
		    break;
		case playSelection === "3":
			resultThree = rollDie(12);
			if (resultThree > 6) {
				playResult = longRunGain;
			}
			else {
				playResult = playForLoss;
			}
			break;
		case playSelection === "4":
		    resultFour = rollDie(8);
		    if (resultFour > 2) {
				playResult = shortPassGain;
			}
			else {
				playResult = playForLoss;
			}
		    break;
		case playSelection === "5":
			resultFive = rollDie(12);
			if (resultFive > 5) {
				playResult = medPassGain;
			}
			else {
				playResult = playForLoss;
			}
			break;
		case playSelection === "6":
		    resultSix = rollDie(20);
		    if (resultSix > 10) {
				playResult = longPassGain;
			}
			else {
				playResult = playForLoss;
			}
		    break;
		default: 
			alert("What are you doing guy!");
			break;		
	}

	
	let secondYardsToTouchdown = yardsToTouchdown - playResult;
	if (secondYardsToTouchdown < 1) {
	 	alert("TOUCHDOWN!!!");
	}
	else {
	alert(playResult + "yards");
	alert(""+ playerName +"... You have "+ secondYardsToTouchdown +" yards to a TD!");
	thirdDown (playerName, diceRandomNumber, yardsToTouchdown, secondYardsToTouchdown);
	}
}

function thirdDown (playerName, diceRandomNumber, yardsToTouchdown, secondYardsToTouchdown) {
	let playSelection;
	playSelection = prompt(""+ playerName +"THIRD DOWN!!!, Which play would you like to run...  {Short Run: Enter 1, Medium Run: Enter 2, Long Run: Enter 3, Short Pass: Enter 4, Medium Pass: Enter 5, Long Pass: Enter 6}");
	let resultOne;
	let resultTwo;
	let resultThree;
	let resultFour;
	let resultFive;
	let resultSix;2

	switch (true) {
		case playSelection === "1":
			resultOne = rollDie(6);
			if (resultOne > 1) {
				playResult = shortRunGain;
			}
			else {
				playResult = playForLoss;
			}
			break;
		case playSelection === "2":
		    resultTwo = rollDie(8);
		    if (resultTwo > 3) {
				playResult = medRunGain;
			}
			else {
				playResult = playForLoss;
			}
		    break;
		case playSelection === "3":
			resultThree = rollDie(12);
			if (resultThree > 6) {
				playResult = longRunGain;
			}
			else {
				playResult = playForLoss;
			}
			break;
		case playSelection === "4":
		    resultFour = rollDie(8);
		    if (resultFour > 2) {
				playResult = shortPassGain;
			}
			else {
				playResult = playForLoss;
			}
		    break;
		case playSelection === "5":
			resultFive = rollDie(12);
			if (resultFive > 5) {
				playResult = medPassGain;
			}
			else {
				playResult = playForLoss;
			}
			break;
		case playSelection === "6":
		    resultSix = rollDie(20);
		    if (resultSix > 10) {
				playResult = longPassGain;
			}
			else {
				playResult = playForLoss;
			}
		    break;
		default: 
			alert("What are you doing guy!");
			break;		
	}

	
	let thirdYardsToTouchdown = secondYardsToTouchdown - playResult;
	if (thirdYardsToTouchdown < 1) {
	 	alert("TOUCHDOWN!!!");
	}
	else {
	alert(playResult + "yards");
	alert(""+ playerName +"... You have "+ thirdYardsToTouchdown +" yards to a TD!");
	fourthDown (playerName, diceRandomNumber, yardsToTouchdown, secondYardsToTouchdown, thirdYardsToTouchdown);
	}
}

function fourthDown (playerName, diceRandomNumber, yardsToTouchdown, secondYardsToTouchdown, thirdYardsToTouchdown) {
	let playSelection;
	playSelection = prompt(""+ playerName +"... FINAL PLAY... FOURTH DOWN!... Which play would you like to run (Short Run: Enter 1, Medium Run: Enter 2, Long Run: Enter 3, Short Pass: Enter 4, Medium Pass: Enter 5, Long Pass: Enter 6)");
	let resultOne;
	let resultTwo;
	let resultThree;
	let resultFour;
	let resultFive;
	let resultSix;
	switch (true) {
		case playSelection === "1":
			resultOne = rollDie(6);
			if (resultOne > 1) {
				playResult = shortRunGain;
			}
			else {
				playResult = playForLoss;
			}
			break;
		case playSelection === "2":
		    resultTwo = rollDie(8);
		    if (resultTwo > 3) {
				playResult = medRunGain;
			}
			else {
				playResult = playForLoss;
			}
		    break;
		case playSelection === "3":
			resultThree = rollDie(12);
			if (resultThree > 6) {
				playResult = longRunGain;
			}
			else {
				playResult = playForLoss;
			}
			break;
		case playSelection === "4":
		    resultFour = rollDie(8);
		    if (resultFour > 2) {
				playResult = shortPassGain;
			}
			else {
				playResult = playForLoss;
			}
		    break;
		case playSelection === "5":
			resultFive = rollDie(12);
			if (resultFive > 5) {
				playResult = medPassGain;
			}
			else {
				playResult = playForLoss;
			}
			break;
		case playSelection === "6":
		    resultSix = rollDie(20);
		    if (resultSix > 10) {
				playResult = longPassGain;
			}
			else {
				playResult = playForLoss;
			}
		    break;
		default: 
			alert("What are you doing guy!");
			break;		
	}

	
	let fourthYardsToTouchdown = thirdYardsToTouchdown - playResult;
	if (fourthYardsToTouchdown < 1) {
	 	alert("Coming through in the Clutch! TOUCHDOWN!!!");
	}
	else {
	alert(playResult + "yards");
	alert(""+ playerName +"...FAIL!!! You fell "+ thirdYardsToTouchdown +" short yards of a TD!");
	}
}

function rollDie(playSelection) {
	let diceRandomNumber;
	diceRandomNumber = Math.ceil(Math.random() * (playSelection));
	return diceRandomNumber;
}
	
gameIntro ();