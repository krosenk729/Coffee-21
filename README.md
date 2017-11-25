### Week-4-Homework

[https://krosenk729.github.io/Week-4-Homework/](https://krosenk729.github.io/Week-4-Homework/)

## Rules
* The system creates a random number as the winning number, four user buttons with randomly assigned values, and gives the user a total of zero points
* The user can click on any of the four buttons to increase their points -- trying to reach the winning number
* When the winning number is reached exactly, the player wins
* When the winning number is exceeded, the player loses

## Homework Instructions

   * There will be buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a buttons, it will add a specific amount of points to the player's total score. 

     * Your game will hide this amount until the player clicks a button.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the user buttons will have four **new** hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

##### Option 1 Game design notes

* The random number shown at the start of the game should be between 19 - 120.

* Each user button should have a random hidden value between 1 - 12.