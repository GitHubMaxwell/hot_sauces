# Summary

This is the completed Hot Sauce Challenge where you are to build a custom website per provided wireframes and following project restrictions and requirements.

## Installation and Usage

Note: website is deployed at https://githubmaxwell.github.io/hot_sauces/#/ allowing you to skip steps 1 - 4 is you choose.

1. Fork project from github and then clone down to your local machine.
2. Open the project in your preferred code editor.
3. From your command line/terminal opened to the root directory of this project run `npm i` to install dependencies (Note: There is a security issue with a `Node-Sass` nested dependency that is being resolved on their end - you will see the NPM warning after the installation is complete)
4. After dependencies are installed, run `npm start` to spin up the project locally. You should be automatically navigated to your default browser with the project opened in the window. If not, open your browser and enter `localhost:3333` in the URL search bar.
5. While on the Home page, you can click one of the hot suace cards/thumbnails to navigate to its respective Details page.
6. From the Detials page you can go back to the Home page by pressing the `<back to hot sauce list` button at the top left of the page.
7. On the Home page, while hovering over a hot sauce card an `X` will appear at the top right corner of the card. Press the `X` to delete the hot sauce card from the grid.
8. On the Home page, to your top left is an `Add Sauce` button. Clicking this will navigate you to the Add Sauce Page and you can enter details into the provided form and see the changes rendered in real time by the provided preview hot sauce card. When ready click `Submit` and green text saying: `Success! Go "Home" to see your addition` will appear to confirm the sauce addition to the grid.
9. From the Add Sauce page, press the `Home` button at the top left corner and scroll down on the Home page to see you addition.

## Features (Required)

- Site built to wireframe plus some enhancements
- Home page is a grid of sauce cards with image, title, and subtitle of sauce displayed
- Sauce cards on Home page have delete button and functionality
- Details page provides larger image and in-depth description for selected sauce
- Navigation provided from Home page to Details page and vice versa
- Built with React
- Uses provided JSON file as a data source
- Uses custom built components (no libraries)
- Uses custom webpack build system

## Features (Extra)

- The website is responsive and follows the mobile-first approach.
- There is a form page that allows you to add your own sauces to the grid.
- There are a transitions on hover and focus (on Home page sauce cards, Add Sauce menu button, and form submit button).
- Routing added using React Router 4 dependency (App.js component).
- I used the Presentation / Container React pattern for this project (Pres. componets have `Child` in their name and Container components have `Parent` in theirs)

## Learned

- You can have a setTimeout in a Action Creator to fire off another action at a later time

## Problems Overcame

- I had to switch to redux for state management because I needed to share state between unrelated components

## Next Steps

- Expand the sauce card functionality to give more information on hover (have the form for making a new one reflect this)

- Stylistically update the Details page more. Perhaps add more information to the JSON so that you can display a large amount of related data to the user
