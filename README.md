
# GitHub Gist api

### 1. Search gists:
- uses Axios library to make a call to public gists by user
- if the user is not found an error message is displayed

### 2. Forks:
- it fetches the list of forks with the fork_url call in ascending order by date
- popped the last 3 recent users who forked the gist and push to the state array
- if there are less the 3 users, all users are displayed with avatar image and username

### 3. User file component:
- an array with all files of the gist
- it shows the name of the file and the programming language in a badge

### 4. Gist content:
- when the name of the file is pressed, a modal opens that shows the code content with the possiblity of copying the entire content
- uses the **react-code-block** library to highlight the code and format it 
- when pressing the outside of the modal, it closes



## Optimizations

- because of the large size of the public gists, and for every gist there were at least 3 forks, the app makes a lot of requests and the list of gists can make the app laggy.
- instead I fetched the entire public gists in an array, and I made pagination that expects 5 results for per_page
- when the next button is clicked, the array is sliced with the next 5 results, making a performance improvement without the need for more requests
- when the previous button is clicked, the arrat is sliced with the previous 5 results

## Further improvements

- making an authentification protocol that uses OAuth2 to let the user to make CRUD operations on gists, and to see his private gists
- this app can be used as a guest user that needed no authentification



## Tech Stack

React, TailwindCSS




## Installation

Install my-project with npm

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

    