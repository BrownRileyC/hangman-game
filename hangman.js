// This function creates a <p> element in the html, then the text that goes inside, sets the class "goalLetter" on the <P> tag and finally places the element inside the element with the id "hangmanBox"
// function myFunction() {
//     var x = document.createElement("P");
//     var t = document.createTextNode("GG");
//     x.setAttribute("class", "goalLetter")
//     x.appendChild(t);
//     document.getElementById("hangmanBox").appendChild(x);
// }


// Doing it this way takes the array goalArray and creates a number of blanks based upon that
// It does the same thing as before and assigns the class "goalLetter" which lets me style the letters/blanks that appear
// It also assigns an ID that is the same as their letter so that I can use the replace function to change out the __ for the appropriate letter
var goalArray = ["G", "O", "A", "L"]

function myFunction() {
    for (var i = 0; i < goalArray.length; i++){
        console.log(i);
        var goalLetter = document.createElement("P");
        var text = document.createTextNode("__");
        goalLetter.setAttribute("class", "goalLetter");
        goalLetter.setAttribute("id", goalArray[i]);
        goalLetter.appendChild(text);
        document.getElementById("hangmanBox").appendChild(goalLetter);
    };
    
};

// This function watches for when the user releases a key and sets a variable,. userInput, to that key.
// Next it sets userInput to an uppercase string and checks the document for an element with that id name and replaces it with the text of the string.

document.onkeyup = function replaceLetter(event) {
    var userInput = event.key;
    document.getElementById(userInput.toString().toLocaleUpperCase()).innerHTML = userInput.toString().toLocaleUpperCase();
}