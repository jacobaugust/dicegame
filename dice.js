//run game


function gameIntro() {
	//result variable
	let diceRandomNumber;
	//intro
	alert("Welcome to the Red Zone Challenge[Instructins: You have four downs to score a TD in the Redzone... Pick your play and best of luck!]");
	//sides of dice determined
	let playerName;
	playerName = prompt("What is your name?");
	firstDown (playerName, diceRandomNumber);
	}

function firstDown (playerName, diceRandomNumber) {
	let playSelection;
	playSelection = prompt("FIRST DOWN!!! "+ playerName +", Which play would you like to run (Short Run: Enter 1, Medium Run: Enter 2, Long Run: Enter 3, Short Pass: Enter 4, Medium Pass: Enter 5, Long Pass: Enter 6)");
	let result;
	let playResult;
	switch (true) {
		case playSelection === "1":
			result = rollDie(6);
			break;
		case playSelection === "2":
		    result = rollDie(8);
		    break;
		case playSelection === "3":
			result = rollDie(12);
			break;
		case playSelection === "4":
		    result = rollDie(8);
		    break;
		case playSelection === "5":
			result = rollDie(12);
			break;
		case playSelection === "6":
		    result = rollDie(20);
		    break;
		default: 
			alert("What are you doing guy!");
			break;		
	}
	alert(result + "yards gained");


}

function rollDie(playSelection) {
	let diceRandomNumber;
	diceRandomNumber = Math.ceil(Math.random() * (playSelection));
	return diceRandomNumber;
}

gameIntro ();