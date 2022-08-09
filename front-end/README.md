# Getting Started with frontend

## :bangbang: Prerequisite

This project is run by 
### `yarn`
check if you have yarn installed by running:
`yarn --version`

Installing yarn through npm:
`npm install --global yarn`

see [more about yarn](https://classic.yarnpkg.com/en/docs/getting-started)

## Run The App Locally

If you just cloned the repository, run:
### `yarn install`
to install dependencies, no need to run it again until there is a change in dependecies. 

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### When there is changes in dependencies
:pray: :bangbang:Please inform everyone when you upgrade/install packages. 
To update, delete folder `/node_modules` completely and run `yarn install`to install all dependencies again in order to prevent conflicts.

## Deployment

See the deploy on Heroku:
https://it-project-your-password.herokuapp.com/

Buildpacks using:
[subdir-heroku-buildpack](https://github.com/timanovsky/subdir-heroku-buildpack)

### Set up Heroku

Download and install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.
`heroku login`

Set up Heroku in your local repository, run:
`heroku git:remote -a it-project-your-password`

### To Deploy:
run:
`git push heroku <branch>`
    


## Coding Style

Enforced by Prettier and ESlint
Make sure to use :vs: `VScode` and install extensions
#### [`Prettier`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) [`ESlint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### End-of-Line Character Sequences: LF
Check at the bottom line of your VScode
![image](https://user-images.githubusercontent.com/76548593/183066753-b3c8a3b1-89b7-42c4-9007-ae5fa7cc0401.png)
:bangbang: if you are on Windows system, git will tempt to convert LF to CRLF. To cahnge this, configured your git by 
`git config core.autocrlf false`

### Using PropTypes




