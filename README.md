# Rock, Paper, Scissors

## Overview

This app is both a traditional game of Rock, Paper, Scissors as well as an alternative game with an exciting twist. The user simply selects the version they would like to play, and chooses their fighter. The computer randomly selects it's fighter and a win, loss or draw is displayed! The game then allows the user to select a new game and wins persist across all games. [here](file:///Users/chaddegange/turing/module_1/projects/rock-paper-scissors/index.html).

## How Does It Work?

1) The page loads and the user is presented with a Rock, Paper, Scissors header along with two game choices and the rules for each within their own containers. On the right and left of the page are full height columns displaying a player, and token as well as the computer. Each game choice, Classic or Spicy presents hover states to the user to define a clickable property.

<img width="1440" alt="Screen Shot 2021-11-08 at 6 04 57 PM" src="https://user-images.githubusercontent.com/41452531/142101013-a131f7d1-7e32-41bc-bd67-83ba35bcfe89.png">


2) Once a game type is selected, the user is presented with a fighter selection page. The left side of the page below player column now displays a change game and new game button with hover states. The fighter options are displayed in the middle of the page and the header now reads "Choose your fighter." The fighter icons each have hover states and when clicked display at the top a win, loss or draw. The outcome heading is displayed for 3 seconds before timing out and reverting to "Choose your figher". Score is cumulative in the computer and player columns as games are played.

<img width="1440" alt="Screen Shot 2021-11-08 at 5 58 44 PM" src="https://user-images.githubusercontent.com/41452531/142104206-f0a925a4-7774-41bf-b2da-805ca443033f.png">

<img width="1440" alt="Screen Shot 2021-11-08 at 5 58 59 PM" src="https://user-images.githubusercontent.com/41452531/142105105-d9c482ba-059a-434d-96ef-ac148993cc8b.png">

3) When change game button is selected, the user is returned to the home screen to once again choose between a classic or spicy game play. The new game and change game buttons are hidden but the cumulative scores persist.

<img width="1440" alt="Screen Shot 2021-11-08 at 6 06 08 PM" src="https://user-images.githubusercontent.com/41452531/142109340-c512e8bd-6e30-41f4-a6e8-5da8ff6574d8.png">

4) Clicking the new game button at any point resets the game and scores.

<img width="1440" alt="Screen Shot 2021-11-08 at 6 11 51 PM" src="https://user-images.githubusercontent.com/41452531/142109596-4ce9fc9d-ba21-40ff-8650-8b1518ef85b7.png">

## Contributors

- Turing School of Software & Design Front-End Student
   - Chad DeGange (https://github.com/cdegange)

## Future Feature Additions

- Add animations to make the game more interactive.
- Leaderboard.
- Change game theme to something more user friendly.

## Technologies Used

-HTML, CSS, Javascript

The spec for this project can be found [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html).

## Installation Instructions

- Fork this project to your own Github account
- Clone the repository to your local machine
- `cd` into the project
- Run open `index.html` to see the app
