[![Netlify Status](https://api.netlify.com/api/v1/badges/d09a03b4-12f5-487e-a109-bef9879aa5d4/deploy-status)](https://app.netlify.com/sites/cocky-joliot-b68bd9/deploys)

# Chuck Norris Searcher
This is a web application that allows users from different backgrounds to search Chuck Norris facts.

## View the application
The application is hosted on [Netlify](https://cocky-joliot-b68bd9.netlify.app/)

## Setup Application

- Clone the application with this url `https://github.com/myrdstom/chuck-norris-searcher.git`
- install the dependencies using `yarn` or `npm install`

## Run the application
- CD into the root of the folder
- Run `yarn start` or `npm start`

## Run end to end tests

- Open the terminal and run the command `yarn run cypress` or `npm run cypress`

## Technologies used / not used

*State management*

I did not use any form of State Management  `Redux` / `Context API` etc as there is only one call made and no need to 
really manage state. I opted to make an axios call inside the respective React component

*Hosting*
I used `Netlify` to host the application as it is very to use when React application

*Code Quality*
I used `Prettier` as the application is small and it is much faster to get started with prettier as it requires less 
setup

*Documentation*
I used simple comments in the interest of time but for a larger application, tools like `React Styleguidist` would be
better suited for the job

## Author

Paul Kayongo


