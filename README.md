# Palminha do Twygo

Palminha do Twygo is a simple web application that allows you to randomly select a member from a predefined list of people, in this case two different Software Engineers/QAs squads. The app also allows you to exclude members who are not available.

In our use, Squad One and Squad Two have different dailies. It can be used to determine who gets the "Palminha do dia" (a virtual clapping) after each's squad daily cerimony.

You can check the latest deploy [here](https://gxolivei.github.io/palminha-twygo/).

## Features

- Randomly selects a member from a list of people.
- Supports two squads (Squad 1 and Squad 2), with different sets of members.
- Displays the squad members in alphabetical order and highlights selected members.
- Allows you to exclude members who are not available at the time of the daily in order to optimize time and prevent for the need to keep spinning until someone selected is at the daily meeting.
- Uses a colorful and customizable spinning wheel to display the results.
- Shows a confetti animation when a winner is selected.

## Technologies Used

- [React](https://react.dev/)
- [react-custom-roulette](https://www.npmjs.com/package/react-custom-roulette)
- [react-modal](https://www.npmjs.com/package/react-modal)
- [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)
- CSS

## Installation and Usage

1. Clone this repository to your local machine.
2. Install the dependencies by running npm install.
3. Start the application by running npm start.
4. Go to http://localhost:3000/ to view the application in your browser.
5. Click on the "Squad 1" or "Squad 2" button to select the squad you want to use.
6. Click on the hand icon to spin the wheel and select a winner.
7. The selected member's name will be displayed on the screen and confetti will appear.

## Contributing

Contributions are always welcome! If you would like to contribute to this project, please follow these steps:

1. Fork this repository.
2. Create a new branch with your changes: git checkout -b my-feature-branch.
3. Make your changes and commit them: git commit -m "Add my feature".
4. Push your changes to your fork: git push origin my-feature-branch.
5. Create a pull request to the main repository.

## Credits

This project was created by [Gabriel Oliveira](https://github.com/gxolivei/) as a demo project.

## License

This project is licensed under the [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt). Feel free to use, modify, and distribute this code as you see fit.
