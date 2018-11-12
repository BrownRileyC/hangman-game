// This function creates a <p> element in the html, then the text that goes inside, sets the class "goalLetter" on the <P> tag and finally places the element inside the element with the id "hangmanBox"
// function myFunction() {
//     var x = document.createElement("P");
//     var t = document.createTextNode("GG");
//     x.setAttribute("class", "goalLetter")
//     x.appendChild(t);
//     document.getElementById("hangmanBox").appendChild(x);
// }


// This is the parent array that a word is chosen from
var hangmanArray = ["Select", "User", "Clicker", "Governer", "Royalty", "Gourmet", "Fortune"];


// This creates an empty global array and variable
var goalArray = [];
var goalWord;
var guessedArray = [];
var guessedGoalArray = [];
var guessesUsed = 0;

// This removes any elements previously added to the hangmanBox and resets the guesses used variable and the guessedArray
function resetGame(index) {
    var hangmanBox = document.getElementById("hangmanBox");
    var goalLetter = document.getElementById(index);
    hangmanBox.removeChild(goalLetter);
    guessesUsed = 0;
    document.getElementById("guesses").innerHTML = 9;
    guessedArray.length = 0;
    document.getElementById("guessBox").innerHTML = "Nothing Yet";
    guessedGoalArray.length= 0;
    // return guessesUsed;
};

// This randomly selects the goalWord and returns it to a the global variable.
function selectGoal(array) {
    goalWord = array[Math.floor(Math.random()*array.length)];
    goalWord = goalWord.toUpperCase();
    console.log(goalWord);
    return goalWord;
};
// This function is called when the user clicks the "start game" button
function startGame() {
    
    // This randomly selects a element from the hangman array
    console.log("Starting Goalword: "+ goalWord)
    selectGoal(hangmanArray);
    
    // Here I check to see what goal array is set to currently
    console.log("Starting Array: "+goalArray);

    // this calls the resetGame Function
    for (var k = 0; k <goalArray.length; k++) {
        resetGame(k);
        };

    // This takes the goalWord and splits it into single uppercase characters and enters that into goalArray
    goalArray = goalWord.toUpperCase().split("");
    console.log("New value: "+ goalArray);
    
    // This makes <p> elements and gives them ids equal to their index position so I can change them later
    for (var i = 0; i < goalArray.length; i++){
        console.log(i);
        var goalLetter = document.createElement("P");
        var text = document.createTextNode("__");
        goalLetter.setAttribute("class", "goalLetter");
        goalLetter.setAttribute("id", i);
        goalLetter.appendChild(text);
        document.getElementById("hangmanBox").appendChild(goalLetter);
        };

    // Here I return the value of goalArray so I can reference it elsewhere in the program
    console.log("Post Blanks: "+goalWord);
    return goalArray;
};

// This function watches for when the user releases a key and sets a variable, userInput, to that key and converts it to upper case.
document.onkeyup = function userInput(event) {
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
        };
    };
    // This increments the number of guesses used so far each key stroke and sends that to the guesses element in the html
    guessesUsed++;
    document.getElementById("guesses").innerHTML = 9-guessesUsed;
    console.log("After for: "+guessedGoalArray);
    if (guessedGoalArray.join("") === goalWord) {
        alert("You won!");
    };
};


