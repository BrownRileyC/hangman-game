// This function creates a <p> element in the html, then the text that goes inside, sets the class "goalLetter" on the <P> tag and finally places the element inside the element with the id "hangmanBox"
// function myFunction() {
//     var x = document.createElement("P");
//     var t = document.createTextNode("GG");
//     x.setAttribute("class", "goalLetter")
//     x.appendChild(t);
//     document.getElementById("hangmanBox").appendChild(x);
// }


// This is the parent array that a word is chosen from
var hangmanArray = ["Select", "User", "Repository", "Governer", "Royalty", "Gourmet", "Unification"];


// Doing it this way takes the array goalArray and creates a number of blanks based upon that
// It does the same thing as before and assigns the class "goalLetter" which lets me style the letters/blanks that appear
// It also assigns an ID that is the same as their letter so that I can use the replace function to change out the __ for the appropriate letter
// The if statement checks if there already exists an element with id = i, and if so it changes the text to a blank again, if not it makes a new element

// This creates a global array called goalArray
var goalArray = []

// This function is called when the user clicks the "start game" button
function startGame() {
    
    // This randomly selects a element from the hangman array
    var goalWord = hangmanArray[Math.floor(Math.random()*hangmanArray.length)];
    
    // Here I check to see whaty goal array is set to currently
    console.log("Start: "+goalArray);

    // Here I look at the current value of goal Array and remove <p> elements equal to its length from the hangmanBox element, one at a time.
    for (var k = 0; k <goalArray.length; k++) {
        var hangmanBox = document.getElementById("hangmanBox");
        var goalLetter = document.getElementById(k);
        hangmanBox.removeChild(goalLetter);
    };
    // Here I set goal Array equal to an array made from the individual characters of goalWord and set each character to uppercase I also check to make sure goal Array took the new value
    goalArray = goalWord.toUpperCase().split("");
    console.log("New value: "+ goalArray);
    
    // Here I create <p> elements and give them ids equal to their index position in the goal Array and give them the class goalLetter so I can style them if I wish.
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
    return goalArray
    
};


// This function watches for when the user releases a key and sets a variable, userInput, to that key and converts it to upper case.
// Next it checks each index of goalArray to see if it matches userInput, and if it does it changes the <p> element with id = to the index it was checking with the letter that is UserInput

document.onkeyup = function replaceLetter(event) {
    var userInput = event.key.toLocaleUpperCase();

    for (var j = 0; j < goalArray.length; j++) {
        if (goalArray[j] === userInput) {
            document.getElementById(j.toString().toLocaleUpperCase()).innerHTML = userInput.toString().toLocaleUpperCase();
        }
        };
    
};