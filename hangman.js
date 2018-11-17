// This is the parent array that a word is chosen from
var hangmanArrayEasy = ["Click", "User", "Mouse", "Icon", "Pixel"];
var hangmanArrayMedium = ["Select", "Clicker", "Google", "Gourmet", "Fortune"];
var hangmanArrayHard = ["Computer","Application","Software","Keyboard","Javascript"];


// This creates an empty global array and variable
var goalArray = [];
var goalWord;
var guessedArray = [];
var guessedGoalArray = [];
var guessesUsed = 0;
var wins = 0;
var losses = 0;
var gameStarted = false;

// This removes any elements previously added to the hangmanBox and resets the guesses used variable and the guessedArray
function resetGame(index) {
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
    // return guessesUsed;
};
function resetWins() {
    wins = 0;
    document.getElementById("winBox").innerHTML = wins;
    return wins;
    // return num;
    // Add the part that changes the text
};

function resetLosses() {
    losses = 0;
    document.getElementById("lossBox").innerHTML = losses;
    return losses;
};

// This randomly selects the goalWord and returns it to a the global variable.
function selectGoal(array) {
    goalWord = array[Math.floor(Math.random()*array.length)];
    goalWord = goalWord.toUpperCase();
    console.log(goalWord);
    return goalWord;
};

// This function is called when the user clicks the "start game" button
function startGameEasy() {
    
    // This randomly selects a element from the hangman array
    console.log("Starting Goalword: "+ goalWord)
    selectGoal(hangmanArrayEasy);

    gameStarted = true;
    
    // Here I check to see what goal array is set to currently
    console.log("Starting Array: "+goalArray);

    // this calls the resetGame Function
    for (var k = 0; k <goalArray.length; k++) {
        resetGame(k);
        };

    // This takes the goalWord and splits it into single uppercase characters and enters that into goalArray
    goalArray = goalWord.toUpperCase().split("");
    console.log("New value: "+ goalArray);
    console.log(goalArray.length);
    // This makes <p> elements and gives them ids equal to their index position so I can change them later
    for (var i = 0; i < goalArray.length; i++){
        console.log(i);
        var goalLetter = document.createElement("P");
        var text = document.createTextNode("__");
        switch (goalArray.length) {
            case 4:
            goalLetter.setAttribute("class", "goalLetter4");
            break;
            case 5:
            goalLetter.setAttribute("class", "goalLetter5");
            break;
            default:
                console.log("Something went wrong");
        };
        goalLetter.setAttribute("id", i);
        goalLetter.appendChild(text);
        document.getElementById("hangmanBox").appendChild(goalLetter);
        };

    // Here I return the value of goalArray so I can reference it elsewhere in the program
    console.log("Post Blanks: "+goalWord);
    return goalArray;
};

function startGameMedium() {
    
    // This randomly selects a element from the hangman array
    console.log("Starting Goalword: "+ goalWord)
    selectGoal(hangmanArrayMedium);
    gameStarted = true;
    
    // Here I check to see what goal array is set to currently
    console.log("Starting Array: "+goalArray);

    // this calls the resetGame Function
        for (var k = 0; k <goalArray.length; k++) {
        resetGame(k);
        };

    // This takes the goalWord and splits it into single uppercase characters and enters that into goalArray
    goalArray = goalWord.toUpperCase().split("");
    console.log("New value: "+ goalArray);
    console.log(goalArray.length);
    // This makes <p> elements and gives them ids equal to their index position so I can change them later
    for (var i = 0; i < goalArray.length; i++){
        console.log(i);
        var goalLetter = document.createElement("P");
        var text = document.createTextNode("__");
        switch (goalArray.length) {
            case 6:
            goalLetter.setAttribute("class", "goalLetter6");
            break;
            case 7:
            goalLetter.setAttribute("class", "goalLetter7");
            break;
            default:
                console.log("Something went wrong");
        };
        goalLetter.setAttribute("id", i);
        goalLetter.appendChild(text);
        document.getElementById("hangmanBox").appendChild(goalLetter);
        };

    // Here I return the value of goalArray so I can reference it elsewhere in the program
    console.log("Post Blanks: "+goalWord);
    return goalArray;
};

function startGameHard() {
    
    // This randomly selects a element from the hangman array
    console.log("Starting Goalword: "+ goalWord)
    selectGoal(hangmanArrayHard);
    gameStarted = true;
    
    // Here I check to see what goal array is set to currently
    console.log("Starting Array: "+goalArray);

    // this calls the resetGame Function
    for (var k = 0; k <goalArray.length; k++) {
        resetGame(k);
        };

    // This takes the goalWord and splits it into single uppercase characters and enters that into goalArray
    goalArray = goalWord.toUpperCase().split("");
    console.log("New value: "+ goalArray);
    console.log(goalArray.length);
    // This makes <p> elements and gives them ids equal to their index position so I can change them later
    for (var i = 0; i < goalArray.length; i++){
        console.log(i);
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
                console.log("Something went wrong");
        };
        goalLetter.setAttribute("id", i);
        goalLetter.appendChild(text);
        document.getElementById("hangmanBox").appendChild(goalLetter);
        };

    // Here I return the value of goalArray so I can reference it elsewhere in the program
    console.log("Post Blanks: "+goalWord);
    return goalArray;
};

// This function watches for when the user releases a key and sets a variable, userInput, to that key and converts it to upper case.
document.onkeydown = function userInput(event) {
        if (gameStarted === true) {
        var userInput = event.key.toLocaleUpperCase();

        // This sets the guessedGoalArray to the same length as trhe goalArray but leaves it empty
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
                guessesUsed = guessesUsed + (1/goalArray.length);
                console.log(guessesUsed)
            };
        };
        // This increments the number of guesses used so far each key stroke and sends that to the guesses element in the html
        console.log("After guess: " +guessesUsed)
        guessesUsed = Math.floor(guessesUsed+0.05)
        console.log("After lowering :" +guessesUsed)
        document.getElementById("guesses").innerHTML = 9-guessesUsed;
        switch (guessesUsed) {
            case 1:
                document.getElementById("head1").style.display = "block";
                console.log("Did my Job, Made it Show up1")
                break;
            case 2:
                document.getElementById("head1").style.display = "none";
                document.getElementById("head2").style.display = "block";
                console.log("Did my Job, Made it Show up1")
                break;
            case 3:
                document.getElementById("head2").style.display = "none";
                document.getElementById("head3").style.display = "block";
                console.log("Did my Job, Made it Show up1")
                break;
            case 4:
                document.getElementById("head3").style.display = "none";
                document.getElementById("head4").style.display = "block";
                console.log("Did my Job, Made it Show up1")
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
        console.log("After for: "+guessedGoalArray);
    };
};
    

// This function runs when the user releases a key and it looks for the two game end conditions, no more guesses or you got the whole word correct.
document.onkeyup = function gameEndCheck() {
    
    if (guessedGoalArray.join("") === goalWord) {
        alert("You won!");
        wins++;
        document.getElementById("winBox").innerHTML = wins;
        var replay = confirm("Would you like to play again?");
        if (replay === true) {
            if (goalArray.length < 6) {
                startGameEasy();
            } else if (goalArray.length < 8) {
                startGameMedium();
            } else {
                startGameHard();
            };
        } else {
            alert("Your record was: Wins: " + wins + " Losses: " + losses);
            resetWins();
            resetLosses();
            gameStarted=false;
            console.log("Did reset run: "+wins);
            // Here I'm going to hide the goalLetter elements and reset the letter bank text
            document.getElementById("guesses").innerHTML = "";
            guessedArray.length = 0;
            document.getElementById("guessBox").innerHTML = "Nothing Yet";
            for (var n = 0; n <goalArray.length; n++) {
                var goalLetter = document.getElementById(n);
                goalLetter.textContent = "";
            };
        };
    } else if (guessesUsed === 9) {
        alert("You lost!  The word was " + goalWord + ".  Better luck next time!");
        losses++;
        document.getElementById("lossBox").innerHTML = losses;
        var replay = confirm("Would you like to play again?");
        document.getElementById("head9").style.display = "none";
        if (replay === true) {
            if (goalArray.length < 6) {
                startGameEasy();
            } else if (goalArray.length < 8) {
                startGameMedium();
            } else {
                startGameHard();
            };
        } else {
            alert("Your record was: Wins: " + wins + " Losses: " + losses);
            resetWins();
            resetLosses();
            console.log("Did reset run: "+wins);
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

