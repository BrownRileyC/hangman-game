// This is the parent array that a word is chosen from
var hangmanArrayEasy = ["Click", "User", "Mouse", "Icon", "Pixel"];
var hangmanArrayMedium = ["Select", "Clicker", "Google", "Gourmet", "Fortune"];
var hangmanArrayHard = ["Computer","Application","Software","Keyboard","Javascript"];
var hangmanArrayLatin = ['Dies','Calidus','In Silviam','Rivus','Frigidus','Errant','Prope','Vult','Ignavus','Respondet','Neque','Temerarius','Lupus','Perterritus','Statim','Ferte Auxilium','Clamor','Ad Puellas','Petit','Arripit','Repellit','E Silva','Salvae','Adveniunt']
var latinMeaningsArray = ['Day','Warm','Into the Woods','Stream','Cool, Cold','Wander','Near','(He/She) Wants, Wishes','Cowardly, Lazy','(he/she) Replies','Neither...Nor','Rash, Reckless, Bold','Wolf','Frightened, Terrified','Immediately','Bring Help! Help!','Shout, Shouting','Towards the Girls','(he/she) Looks for, Seeks','(he/she) grabs hold of, snatches','(he/she) drives off','Out of the Woods','Safe','(they) reach, arrive (at)']; 
var alphabet = ["A","B","C",'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' ']

// These are my global variables I'll reference throughout the program
var goalArray = [];
var goalWord;
var guessedArray = [];
var guessedGoalArray = [];
var guessesUsed = 0;
var wins = 0;
var losses = 0;
var gameStarted = false;
var latinGame = false;
var randomNumber;

// This removes any elements previously added to the hangmanBox and resets the guesses used variable and the guessedArray
function resetGame(index) {
    latinGame = false;
    var hangmanBox = document.getElementById("hangmanBox");
    var goalLetter = document.getElementById(index);
    hangmanBox.removeChild(goalLetter);
    guessesUsed = 0;
    document.getElementById("guesses").innerHTML = "";
    guessedArray.length = 0;
    document.getElementById("guessBox").innerHTML = "Nothing Yet";
    guessedGoalArray.length= 0;
    for (var m = 1; m<10;m++) {
        document.getElementById("head"+m).style.display = "none";
    };
};

// These reset functions update the relevent text on the webpage and resets the relevent global variable 
function resetWins() {
    wins = 0;
    document.getElementById("winBox").innerHTML = wins;
    return wins;
};

function resetLosses() {
    losses = 0;
    document.getElementById("lossBox").innerHTML = losses;
    return losses;
};

// This randomly selects the goalWord and returns it to a the global variable.
function selectGoal(array) {
    randomNumber = Math.floor(Math.random()*array.length)
    goalWord = array[randomNumber];
    goalWord = goalWord.toUpperCase();
    console.log(goalWord);
    return goalWord;
};


// This function is called when the user clicks the "start easy game" button
function startGameEasy() {
    
    // This randomly selects a element from the easy hangman array
    selectGoal(hangmanArrayEasy);

    // This sets the gameStarted Variable to true, telling the onkey functions later to start working
    gameStarted = true;

    // this calls the resetGame Function, getting rid of the elements made the last time the startgame function ran
    // When first called this does nothing because no elements have been added to the goalArray yet
    for (var k = 0; k <goalArray.length; k++) {
        resetGame(k);
        };

    // This takes the goalWord and splits it into single uppercase characters and enters that into goalArray
    goalArray = goalWord.toUpperCase().split("");

    // This makes <p> elements and gives them ids equal to their index position so I can reference them later
    for (var i = 0; i < goalArray.length; i++){
        var goalLetter = document.createElement("P");
        var text = document.createTextNode("__");

        // This switch case assigns the approprate class so I can change the spacing of the letters based upon the length of the word
        switch (goalArray.length) {
            case 4:
            goalLetter.setAttribute("class", "goalLetter4");
            break;
            case 5:
            goalLetter.setAttribute("class", "goalLetter5");
            break;
            default:
        };
        goalLetter.setAttribute("id", i);
        goalLetter.appendChild(text);
        document.getElementById("hangmanBox").appendChild(goalLetter);
        };

    // Here I return the value of goalArray so I can reference it elsewhere in the program
    return goalArray;
};

// This is the same as the startGameEasy function except I pass the hangmanArrayMedium to selectGoal instead of hangmanArrayEasy
function startGameMedium() {
    
    // This randomly selects a element from the hangman array
    selectGoal(hangmanArrayMedium);
    
    // This sets the gameStarted Variable to true, telling the onkey functions later to start working
    gameStarted = true;

    // this calls the resetGame Function, getting rid of the elements made the last time the startgame function ran
    // When first called this does nothing because no elements have been added to the goalArray yet
    for (var k = 0; k <goalArray.length; k++) {
        resetGame(k);
        };

    // This takes the goalWord and splits it into single uppercase characters and enters that into goalArray
    goalArray = goalWord.toUpperCase().split("");
    console.log(goalArray);

    // This makes <p> elements and gives them ids equal to their index position so I can reference them later
    for (var i = 0; i < goalArray.length; i++){
        var goalLetter = document.createElement("P");
        var text = document.createTextNode("__");

        // This switch case assigns the approprate class so I can change the spacing of the letters based upon the length of the word
        switch (goalArray.length) {
            case 6:
            goalLetter.setAttribute("class", "goalLetter6");
            break;
            case 7:
            goalLetter.setAttribute("class", "goalLetter7");
            break;
            default:
        };
        goalLetter.setAttribute("id", i);
        goalLetter.appendChild(text);
        document.getElementById("hangmanBox").appendChild(goalLetter);
        };

    // Here I return the value of goalArray so I can reference it elsewhere in the program
    return goalArray;
};

function startGameHard() {
    
    // This randomly selects a element from the hangman array
    selectGoal(hangmanArrayHard);
    
    // This sets the gameStarted Variable to true, telling the onkey functions later to start working
    gameStarted = true;

    // this calls the resetGame Function, getting rid of the elements made the last time the startgame function ran
    // When first called this does nothing because no elements have been added to the goalArray yet
    for (var k = 0; k <goalArray.length; k++) {
        resetGame(k);
        };

    // This takes the goalWord and splits it into single uppercase characters and enters that into goalArray
    goalArray = goalWord.toUpperCase().split("");

    // This makes <p> elements and gives them ids equal to their index position so I can reference them later
    for (var i = 0; i < goalArray.length; i++){
        var goalLetter = document.createElement("P");
        var text = document.createTextNode("__");
        switch (goalArray.length) {
            case 8:
            goalLetter.setAttribute("class", "goalLetter8");
            break;
            case 9:
            goalLetter.setAttribute("class", "goalLetter9");
            break;
            case 10:
            goalLetter.setAttribute("class", "goalLetter10");
            break;
            case 11:
            goalLetter.setAttribute("class", "goalLetter11");
            break;
            default:
        };
        goalLetter.setAttribute("id", i);
        goalLetter.appendChild(text);
        document.getElementById("hangmanBox").appendChild(goalLetter);
        };

    // Here I return the value of goalArray so I can reference it elsewhere in the program
    return goalArray;
};

function startGameLatin() {
    
    
    // This randomly selects a element from the easy hangman array
    selectGoal(hangmanArrayLatin);

    // This sets the gameStarted Variable to true, telling the onkey functions later to start working
    gameStarted = true;

    // this calls the resetGame Function, getting rid of the elements made the last time the startgame function ran
    // When first called this does nothing because no elements have been added to the goalArray yet
    for (var k = 0; k <goalArray.length; k++) {
        resetGame(k);
        };

    latinGame = true;
    // This takes the goalWord and splits it into single uppercase characters and enters that into goalArray
    goalArray = goalWord.toUpperCase().split("");

    // This makes <p> elements and gives them ids equal to their index position so I can reference them later
    for (var i = 0; i < goalArray.length; i++){
        var goalLetter = document.createElement("P");
        if (goalArray[i] === " "){
            var text = document.createTextNode(" ");
            guessedGoalArray.length = goalArray.length;
            guessedGoalArray.fill(goalArray[i],i,i+1);
            console.log(goalArray[i]);
            console.log(guessedGoalArray, goalArray);
        } else {
        var text = document.createTextNode("__");
        };
        // This switch case assigns the approprate class so I can change the spacing of the letters based upon the length of the word
        switch (goalArray.length) {
            case 4:
            goalLetter.setAttribute("class", "goalLetter4");
            break;
            case 5:
            goalLetter.setAttribute("class", "goalLetter5");
            break;
            case 6:
            goalLetter.setAttribute("class", "goalLetter6");
            break;
            case 7:
            goalLetter.setAttribute("class", "goalLetter7");
            break;
            case 8:
            goalLetter.setAttribute("class", "goalLetter8");
            break;
            case 9:
            goalLetter.setAttribute("class", "goalLetter9");
            break;
            case 10:
            goalLetter.setAttribute("class", "goalLetter10");
            break;
            case 11:
            goalLetter.setAttribute("class", "goalLetter11");
            break;
            case 12:
            goalLetter.setAttribute("class", "goalLetter12");
            break;
            case 13:
            goalLetter.setAttribute("class", "goalLetter13");
            break;
            case 14:
            goalLetter.setAttribute("class", "goalLetter14");
            break;
            default:
        };
        goalLetter.setAttribute("id", i);
        goalLetter.appendChild(text);
        document.getElementById("hangmanBox").appendChild(goalLetter);
        };

    // Here I return the value of goalArray so I can reference it elsewhere in the program
    return goalArray;
};
// This function watches for when the user releases a key and sets a variable, userInput, to that key and converts it to upper case.
document.onkeydown = function userInput(event) {
        // This if statement checks to see if gameStarted is true and only runs the rest of the program is so, thus the user can't make an input until they start the game.
        if (gameStarted === true) {
        var userInput = event.key.toLocaleUpperCase();
            if (alphabet.includes(userInput)) {
            // This sets the guessedGoalArray to the same length as the goalArray but leaves it empty
            guessedGoalArray.length = goalArray.length;
            
            // This pushes the user inputs to the guessed array and sends that to the HTML
            guessedArray.push(userInput);
            document.getElementById("guessBox").innerHTML = guessedArray;
            
            // Next it checks each index of goalArray to see if it matches userInput, and if it does it changes the <p> element with id = to the index it was checking with the letter that is UserInput
            for (var j = 0; j < goalArray.length; j++) {
                if (goalArray[j] === userInput) {
                    document.getElementById(j).innerHTML = userInput.toString().toLocaleUpperCase();
                    
                    // This line adds the value to the same index in the gussedGoalArray
                    guessedGoalArray.fill(document.getElementById(j).innerHTML, j, j+1);
                } else {
                    // Each time the userinput doesn't match the goal array we increment the guessesUsed variable by a fraction based upon the goalArray.length.  This allows us to increment guessesUsed by 1 even when running through the loop multiple times
                    guessesUsed = guessesUsed + (1/goalArray.length);
                };
            };
            // Here we use math.floor and add a small amount to the guessesUsed variable because fractions are wonky, in the end this ensures that the number added is above 1 if no elements matched the userInput in the for loop above but it still rounds down to zero if even one matched
            guessesUsed = Math.floor(guessesUsed+0.05)
            document.getElementById("guesses").innerHTML = 9-guessesUsed;
            // This switch case looks at the guessesUsed variable and changes the styling on the hidden images on the page.  This causes the "hangman" to progress as you miss guesses like in the game.
            switch (guessesUsed) {
                case 1:
                    document.getElementById("head1").style.display = "block";
                    break;
                case 2:
                    document.getElementById("head1").style.display = "none";
                    document.getElementById("head2").style.display = "block";
                    break;
                case 3:
                    document.getElementById("head2").style.display = "none";
                    document.getElementById("head3").style.display = "block";
                    break;
                case 4:
                    document.getElementById("head3").style.display = "none";
                    document.getElementById("head4").style.display = "block";
                    break;
                case 5:
                    document.getElementById("head4").style.display = "none";
                    document.getElementById("head5").style.display = "block";
                    break;
                case 6:
                    document.getElementById("head5").style.display = "none";
                    document.getElementById("head6").style.display = "block";
                    break;
                case 7:
                    document.getElementById("head6").style.display = "none";
                    document.getElementById("head7").style.display = "block";
                    break;
                case 8:
                    document.getElementById("head7").style.display = "none";
                    document.getElementById("head8").style.display = "block";
                    break;
                case 9:
                    document.getElementById("head8").style.display = "none";
                    document.getElementById("head9").style.display = "block";
                    break;
                    default:
                    document.getElementById("head9").style.display = "none";
            };
        };
    };
};
    

// This function runs when the user releases a key and it looks for the two game end conditions, no more guesses or you got the whole word correct.
document.onkeyup = function gameEndCheck() {
    // Same as before this makes it so the game won't check if the player has won or lost unless they are playing the game
    if (gameStarted === true) {
        // Here we check if the guessedGoalArray (where we fill in the correct userInputs) matches the string in the goalWord variable, which is the win condition.
        if (guessedGoalArray.join("") === goalWord) {
            // When it does match we alert the user they won and increment the wins counter
            if (latinGame) {
                alert("You won! This word means " + latinMeaningsArray[randomNumber]);
            } else {
                alert("You Won!");
            };
            wins++;
            document.getElementById("winBox").innerHTML = wins;
            // Here we prompt the user with a confirm request of to keep playing.  If they respond yes we check what dificulty they were on and restart the game.
            var replay = confirm("Would you like to play again?");
            if (replay === true) {
                if (!latinGame) {
                    if (goalArray.length < 6) {
                        startGameEasy();
                    } else if (goalArray.length < 8) {
                        startGameMedium();
                    } else {
                        startGameHard();
                    };
                } else {
                    startGameLatin();
                };
            } else {
                // If they respond no to the cofirm prompt we alert them to their record for that play session and call the reset win and loss functions
                alert("Your record was: Wins: " + wins + " Losses: " + losses);
                resetWins();
                resetLosses();
                // Here we set the gameStarted to false again making the onkey events not run, preventing the game from trying to see if the player wins while the game isn't running
                gameStarted=false;
                // Here I'm going to hide the goalLetter elements and any hangmanhead elements and reset the letter bank text
                for (var y = 1; y<10; y++){
                    document.getElementById("head"+y).style.display = "none";
                };
                document.getElementById("guesses").innerHTML = "";
                guessedArray.length = 0;
                guessesUsed = 0;
                document.getElementById("guessBox").innerHTML = "Nothing Yet";
                for (var n = 0; n <goalArray.length; n++) {
                    var goalLetter = document.getElementById(n);
                    goalLetter.textContent = "";
                };
            };
            // This is the loss condition, if the user has used all their guesses and didn't satisfy the win condition then this section runs.
        } else if (guessesUsed === 9) {
            // It is basically the same as the above win condition but increments the loss counter
            if (latinGame) {
                alert("You lost!  The word was " + goalWord + ".  It means "+latinMeaningsArray[randomNumber]);
            } else {
                alert("You lost!  The word was " + goalWord + ". Better luck next time.");
            };
            losses++;
            document.getElementById("lossBox").innerHTML = losses;
            var replay = confirm("Would you like to play again?");
            document.getElementById("head9").style.display = "none";
            if (replay === true) {
                if (!latinGame) {
                    if (goalArray.length < 6) {
                        startGameEasy();
                    } else if (goalArray.length < 8) {
                        startGameMedium();
                    } else {
                        startGameHard();
                    };
                } else {
                    startGameLatin();
                };
            } else {
                alert("Your record was: Wins: " + wins + " Losses: " + losses);
                resetWins();
                resetLosses();
                document.getElementById("guesses").innerHTML = "";
                guessedArray.length = 0;
                gameStarted=false;
                guessesUsed = 0;
                document.getElementById("guessBox").innerHTML = "Nothing Yet";
                for (var n = 0; n <goalArray.length; n++) {
                    var goalLetter = document.getElementById(n);
                    goalLetter.textContent = "";
                };
            };
        };
    };
};

