# hangman-game
A game of hangman using onkeyup events to detect user input.

Pseudocode:

What are the elements of the html/web page I need:
- The blanks for each letter of the word the user is trying to guess
- A header with the name of the game
- Dividers between the various elements of the game
- A section that tracks guessed letters 
- A section that shows your remaining guesses
- A section that shows if you guessed the word correctly or incorrectly
- A section that explains how to play the rules

What does the game need to do?:
- Randomly choose a word from an array for the user to try and guess
    <!-- Also create a button that runs the randomization function to start the game -->
    <!-- Array[Math.floor(math.random()*array.length)] I think to select the word -->
- See how long the chosen word is
    <!-- string.length() I think -->
- Tell the html how many letter blanks to display
    <!-- Some document.getElementbyId.innerhtml("string") or other thing to change the string check the rock paper scissors activity for how I did made the string change -->
    <!-- Use the document.createElement thing I found to create a number of blank <P> elements in the hangmanbox equal to the string.length (or the array.length if I end up going with the method of splitting the chosen word into letters and making that an array of its own)  -->
- detect the user inputs/button presses
    <!-- This is the onkeyup function thingy -->
- convert the user inputs to lowercase, single letter strings
    <!-- Use the .toLowerCase or the /toUpperCase to make it simpler to match (incase someone has caps lock or holds shift or something) -->
- compare the user input to each letter of the selected word and see if any match
    <!-- I guess use a loop over the chosen word and use charAt to check if it matches ever?
    Maybe have the system create an array from the letters of the chosen word and then run forEach on that created array? -->
- If any match tell the html to change that blank into the correct letter
    <!-- the function the forEach runs will be a if/else to change the document.  I think it's something like document.getelementsbyClass("goalLetter").innnerHtml = array[i]-->
- Regardless of if any match add the guessed letter to the bank of already guessed letters
- decrement the number of guesses remaining after each input
- When none of the letters in the "word to guess" section match a string "_" then tell the user that they won
- Also increment the number of wins
- When the number of guesses hits zero check if any of the letters in the "word to guess" section match the string "_" and if they still do tell the user they lost and increment the loss counter.





How do I detect that the user has guessed all the letters of the word?
    - as part of the onkeyup have the page check if goalArray[j] matches the <p id=j> 