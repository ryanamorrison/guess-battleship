# battleship-themed guessing game

TL;DR - I was reviewing javascipt and found an exercise in a book to build a battleship game.  It was pretty basic and I felt like it would be fun to expand it.

## Getting Started

Prerequisites: a browser

Download the repo, click on `index.html` to start the game.  The defaults are optimal, click the `start` button to begin playing.  Press `Ctrl-R` to restart the game.

## What is this? (the longer version)
The original exercise was not really a battleship game.  It was a guessing game with a battleship theme to it.  The 7x7 coordinates grid was baked into a background image (the boardgame is 10x10).  The fixed number of ships were all three cells long and randomly placed.   It had a guess form to submit guesses to and a display at the top to give the player feedback.  When the game was over, one could keep playing so if you did not know how many ships were on the board then you might miss the game was over.

I decided to expand some of the above.  I eliminated the background image and borrowed a new one (apologies to [vecteezy.com](https://www.vecteezy.com/vector-art/11058810-vector-green-radar-in-searching-on-black-background) for using their image).  I created a grid instead using a table and script which meant I could expand the script to larger than 7x7.  I broke out elements of the game into classes such as ship and fleet to make the code more extensible.  After breaking out into classes, the ships acquired their labels from the [boardgame](https://en.wikipedia.org/wiki/Battleship_(game)#Description) and put I in the options so that either the "classic" or newer labels could be used (the newer are easier to understand so they became the default).  I then added code to generate both a fixed and variable number of variable-length ships and assign them the proper label when generating a fleet.  I also changed the number of ships based on the size of the board.  Finally, I added a new scoreboard to keep track of what was happening in the game and added an end-of-game state that disables the controls after the game has been won.

### Road Map

As I have time I might...

* Fix some of the visual elements I'm not satisfied with (e.g., the centering on the game options form).
* Add guess accuracy to the gave over message. 
* Create player classes, add an additional board for an opponent, change the icons so they are smaller, and make the game player vs. computer.  The latter would require something a bit more sophisticated than random guesses.
* Add (optional) corny insults when the ships are sunk.
* Create a server-side component that could allow 2 players to play against one another like the board game.

### Known Issues
* there are 2 subs in play but it should be one of them + another ship

## Additional Documentation and Acknowledgments

* Thanks to: [O'Reilly](https://www.oreilly.com/library/view/head-first-javascript/9781098147938/) for the starter project and the images.  
* Apologies to Hasbro.
