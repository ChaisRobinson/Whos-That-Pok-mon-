# Pokemon Guessing Game

This is a simple web-based game where users have to guess the Pokemon displayed in the image. The game randomly selects a Pokemon image from a predefined set and prompts the user to enter their guess. If the guess is correct, the Pokemon image is revealed along with its name. Otherwise, the user is prompted to try again.

## How to Play

1. Open the `index.html` file in a web browser.
2. Click the "Take a Guess" button.
3. A prompt will appear asking you to enter the name of the Pokemon shown in the image.
4. Type in your guess and click "OK".
5. If your guess is correct, the Pokemon image and name will be revealed.
6. If your guess is incorrect, you'll be prompted to try again.
7. Click the "Play Again" button to start a new game.

## Files

- `index.html`: The HTML file that structures the game's layout and elements.
- `style.css`: The CSS file that styles the game's appearance.
- `java.js`: The JavaScript file that handles the game's logic and interactivity.
- `Gengar.webp`, `Pok%C3%A9mon_Charizard_art.png`, `Mew-PNG-Pic.png`, `65-Alakazam.webp`, `527Woobat.webp`: Image files for the Pokemon used in the game.

## Technologies Used

- HTML
- CSS
- JavaScript

## JavaScript Methods Used

- `Math.random()`: Used to generate a random number for selecting the Pokemon image.
- `Math.floor()`: Used to round down the random number to the nearest integer.
- `document.getElementById()`: Used to select HTML elements by their ID.
- `element.style.display`: Used to show or hide HTML elements.
- `document.querySelector()`: Used to select HTML elements using CSS selectors.
- `element.classList.add()`: Used to add CSS classes to HTML elements.
- `element.classList.remove()`: Used to remove CSS classes from HTML elements.
- `element.addEventListener()`: Used to attach event listeners to HTML elements.
- `window.alert()`: Used to display an alert message to the user.
- `window.location.reload()`: Used to reload the current page.

## How to Contribute

If you'd like to contribute to this project, you can follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b my-new-feature`.
3. Make your changes and commit them: `git commit -am 'Add some feature'`.
4. Push your changes to your forked repository: `git push origin my-new-feature`.
5. Create a new pull request.

## License

This project is licensed under the [MIT License](LICENSE).
