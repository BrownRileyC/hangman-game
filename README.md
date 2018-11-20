# hangman-game
A game of hangman using onkey events to detect user input.

Functions used in the game:
startGameEasy() (medium and hard as well): This sets the gameStarted variable to true, allowing the onkey events to run and calls the resetGame() function and the selectGoal() function.  It also creates the <p> tags in the html where the letters the user guesses correctly will go.  In addition it fills in the goalArray with the letters of the goalWord selected in the selectGoal() function.

resetGame(): This removes the <p> elements created when startGame ran last (it does this based upon the length of the goalArray created after this is called in the startGame() function so it doesn't do anything when startGame() is called first). It also changes any text elements altered as the user plays back to the original state and hides any of the hangman "heads" shown as the user makes incorrect guesses.

resetWins()/resetLosses(): This one is simple.  It sets the wins/losses variable to 0, changes the wins/losses counter on the page to 0 and returns wins/losses so it is changed to 0 globally.  These functions are only called when the user hits no on the confirm prompt asking if they want to continue playing.

selectGoal(): This is called when the startGame() function runs.  Each difficulty startGame passes a different array to selectGoal() so it chooses a word from the correct set of lengths.  It generates a random number from 0 to the length of the hangman array for each different difficulty using math.random and math.floor.

onkeydown: There are two if statments that surround the majority of the code in this function.  The first checks the gameStarted Variable, and if it is true then it continues to run the function.  The key press is converted to uppercase and set to the userInput variable.  We then get to the next if statement which checks if the userInput variable is a letter by using the includes method on the alphabet array at the head of the script  If the userInput is a part of that array it carries on, else it stops the function running.  This ensures a user doens't lose a guess by accidentally hitting a number or special character.
When the user makes a guess by pressing a key we loop through the goalArray to check if it is correct and for each time it isn't correct we increment the guessesUsed by a fractional amount.  We also create another array the same length as the goalArray and fill in the correct guesses to that one.  This lets us check if the user has won in the onkeyup event later.  After finishing the loop we round the number down and that results in the misses left either decrementing by 1 if they missed or remaining the same if they got at least one letter correct.  This also runs a switch function on the guessesUsed variable to decide what part of the "hangman" head image to show and changes the display styling on the nine different images.

onkeyup: This only has one the if statment checking for that gameStarted Variable.  We don't need the second statment checking to see if the userInput is an alphabetical character because we don't even check the key pressed in this function.  Instead this is simply checking if the game is over after each guess.  
We do this by having an if/elseif statment.  The first if checks if the user won by comparing the goalWord to a string made from that new array we pushed the user's correct guesses to.  If that portion runs we know the user won and increment the wins counter as well as make an alert to let the user know they won!  After that we ask the user if they wish to keep playing and call the startGame function if they do (it will check what difficulty they were using and call that one). If they don't we tell them their record for that play session and reset the board as well as set the gameStarted to false, thus preventing the game from tracking their inputs.  We also run a loop to re-hide any and all of the "hangman" head stages they may have revealed with any missed guesses.
The elseif checks for the loss condition, having the guessesUsed variable = 9.  We do all the same things as above but increment the loss counter and we also tell them what the word was.
In both the win and loss sides of this function we only call the resetWins and resetLosses function when the players decide not to continue playing as that resets those values back to 0.


Pseudocode:  Here's what I started with and my thought process as I worked out what I needed to do.

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
    Also create a button that runs the randomization function to start the game
    Array[Math.floor(math.random()*array.length)] I think to select the word
- See how long the chosen word is
    string.length() I think
- Tell the html how many letter blanks to display
    Some document.getElementbyId.innerhtml("string") or other thing to change the string check the rock paper scissors activity for how I did made the string change
    Use the document.createElement thing I found to create a number of blank <P> elements in the hangmanbox equal to the string.length (or the array.length if I end up going with the method of splitting the chosen word into letters and making that an array of its own) 
- detect the user inputs/button presses
    This is the onkeyup function thingy
- convert the user inputs to lowercase, single letter strings
    Use the .toLowerCase or the .toUpperCase to make it simpler to match (incase someone has caps lock or holds shift or something)
    I used Upper case in the end
- compare the user input to each letter of the selected word and see if any match
    I guess use a loop over the chosen word and use charAt to check if it matches ever?
    Maybe have the system create an array from the letters of the chosen word and then run forEach on that created array?
- If any match tell the html to change that blank into the correct letter
    -When they match I had the program add them to another array in the proper position
    -the function the forEach runs will be a if/else to change the document.  I think it's something like document.getelementsbyClass("goalLetter").innnerHtml = array[i]
- Regardless of if any match add the guessed letter to the bank of already guessed letters
- decrement the number of guesses remaining after each input
- When none of the letters in the "word to guess" section match a string "_" then tell the user that they won
    -Instead I gad the game check the secondary array of correct guesses and compare it to a string of the word to guess
- Also increment the number of wins
- When the number of guesses hits zero check if any of the letters in the "word to guess" section match the string "_" and if they still do tell the user they lost and increment the loss counter.
    -Here I had the game first check if the user won (via that secondary array made of their correct guesses) and then, failing the win condition I had the onkey event check if they used all their guesses as the loss condition


How do I detect that the user has guessed all the letters of the word?
    - as part of the onkeyup have the page check if goalArray[j] matches the <p id=j> 