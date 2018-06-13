/*let playForLoss = Math.floor(Math.random() * (0 - -4) + -4);
let shortRunGain = Math.floor(Math.random() * (4 - 1) + 1); 
let medRunGain = Math.floor(Math.random() * (7 - 5) + 5);
let longRunGain = Math.floor(Math.random() * (15 - 7) + 7);
let shortPassGain = Math.floor(Math.random() * (6 - 4) + 4);
let medPassGain = Math.floor(Math.random() * (12 - 7) + 7);
let longPassGain = Math.floor(Math.random() * (20 - 13) + 13);
*/

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

function firstDown (playerName, diceRandomNumber, playResult) {
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
			playResult= checkResultOne();
			break;
		case playSelection === "2":
		    playResult= checkResultTwo();
		    break;
		case playSelection === "3":
			playResult= checkResultThree();
			break;
		case playSelection === "4":
		    playResult= checkResultFour();
		    break;
		case playSelection === "5":
			playResult= checkResultFive();
			break;
		case playSelection === "6":
		    playResult= checkResultSix();
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

function secondDown (playerName, diceRandomNumber, yardsToTouchdown, playResult) {
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
			playResult= checkResultOne();
			break;
		case playSelection === "2":
		    playResult= checkResultTwo();
		    break;
		case playSelection === "3":
			playResult= checkResultThree();
			break;
		case playSelection === "4":
		    playResult= checkResultFour();
		    break;
		case playSelection === "5":
			playResult= checkResultFive();
			break;
		case playSelection === "6":
		    playResult= checkResultSix();
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

function thirdDown (playerName, diceRandomNumber, yardsToTouchdown, secondYardsToTouchdown, playResult) {
	let playSelection;
	playSelection = prompt(""+ playerName +"THIRD DOWN!!!, Which play would you like to run...  {Short Run: Enter 1, Medium Run: Enter 2, Long Run: Enter 3, Short Pass: Enter 4, Medium Pass: Enter 5, Long Pass: Enter 6}");
	let resultOne;
	let resultTwo;
	let resultThree;
	let resultFour;
	let resultFive;
	let resultSix;

	switch (true) {
	case playSelection === "1":
		case playSelection === "1":
			playResult= checkResultOne();
			break;
		case playSelection === "2":
		    playResult= checkResultTwo();
		    break;
		case playSelection === "3":
			playResult= checkResultThree();
			break;
		case playSelection === "4":
		    playResult= checkResultFour();
		    break;
		case playSelection === "5":
			playResult= checkResultFive();
			break;
		case playSelection === "6":
		    playResult= checkResultSix();
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

function fourthDown (playerName, diceRandomNumber, yardsToTouchdown, secondYardsToTouchdown, thirdYardsToTouchdown, playResult) {
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
			case playSelection === "1":
			playResult= checkResultOne();
			break;
		case playSelection === "2":
		    playResult= checkResultTwo();
		    break;
		case playSelection === "3":
			playResult= checkResultThree();
			break;
		case playSelection === "4":
		    playResult= checkResultFour();
		    break;
		case playSelection === "5":
			playResult= checkResultFive();
			break;
		case playSelection === "6":
		    playResult= checkResultSix();
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

function checkResultOne(resultOne, shortRunGain, playForLoss) {
	if (rollDie(6) > 1) {
				playResult = randomYardsPerPlayShortRun();
			}
			else {
				playResult = randomYardsPerPlayLoss();
			}
	return playResult;
}

function checkResultTwo(resultTwo, medRunGain, playForLoss) {
	if (rollDie(8) > 3) {
				playResult = randomYardsPerPlayMedRun();
			}
			else {
				playResult = randomYardsPerPlayLoss();
			}
	return playResult;
}

function checkResultThree(resultThree, longRunGain, playForLoss) {
	if (rollDie(12) > 6) {
				playResult = randomYardsPerPlayLongRun();
			}
			else {
				playResult = randomYardsPerPlayLoss();
			}
	return playResult;
}

function checkResultFour(resultFour, shortPassGain, playForLoss) {
	if (rollDie(8) > 2) {
				playResult = randomYardsPerPlayShortPass();
			}
			else {
				playResult =randomYardsPerPlayLoss();
			}
	return playResult;
}

function checkResultFive(resultFive, medPassGain, playForLoss) {
	if (rollDie(12) > 5) {
				playResult = randomYardsPerPlayMedPass();
			}
			else {
				randomYardsPerPlayLoss();
				playResult = randomYardsPerPlayLoss();
			}
	return playResult;
}

function checkResultSix(resultSix, longPassGain, playForLoss) {
	if (rollDie(20) > 10) {
				playResult = randomYardsPerPlayLongPass();
			}
			else {
				playResult = randomYardsPerPlayLoss();
			}
	return playResult;
}


function randomYardsPerPlayLoss() {
	let playForLoss = Math.floor(Math.random() * (0 - -4) + -4);
	return playForLoss;
}

function randomYardsPerPlayShortRun() {
	let shortRunGain = Math.floor(Math.random() * (4 - 1) + 1);
	return shortRunGain
}

function randomYardsPerPlayMedRun() {
	let medRunGain = Math.floor(Math.random() * (7 - 5) + 5);
	return medRunGain;
}

function randomYardsPerPlayLongRun() {
	let longRunGain = Math.floor(Math.random() * (15 - 7) + 7);
	return longRunGain;
}

function randomYardsPerPlayShortPass () {
	let shortPassGain = Math.floor(Math.random() * (6 - 4) + 4);
	return shortPassGain;
}

function randomYardsPerPlayMedPass () {
	let medPassGain = Math.floor(Math.random() * (6 - 4) + 4);
	return medPassGain;
}

function randomYardsPerPlayLongPass () {
	let longPassGain = Math.floor(Math.random() * (20 - 13) + 13);
	return longPassGain;

}

function rollDie(playSelection) {
	let diceRandomNumber;
	diceRandomNumber = Math.ceil(Math.random() * (playSelection));
	return diceRandomNumber;
}
gameIntro();