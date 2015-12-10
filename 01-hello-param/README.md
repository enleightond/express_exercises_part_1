## hello-param
For this exercise, you'll greet a person (or thing) with a __hard-coded route__ and then refactor to use a parameter.

## Set-up
- Follow the instructions in [start-guide](../start-guide.md)

## Instructions
### Step 1 of 4
- In `server.js`, add a __hard-coded__ route to [`/express`](http://localhost:8000/express). When a user visits this route, the response body should include the greeting `Hello, Express!`
- Start your server (`nodemon server.js`).
- Visit [`/express`](http://localhost:8000/express); then confirm that `Hello, Express!` is being displayed.
- Add and commit.

### Step 2 of 4
- Add a __hard-coded__ route with your first name, such as (`/cho`). When a user visits this route, the response body should display a greeting with your name, such as `Hello, Cho!` __Notice that the name is capitalized in the response, but the name in the route isn't capitalized__.
- Visit the URL with your first name; then confirm that the correct greeting is being displayed.
- Add and commit.

### Step 3 of 4
- Add a __hard-coded__ route with your favorite celebrity's first name, a hypen, and last name, such as (`tom-hanks`). When a user visits this route, the response body should display a greeting with the celebrity's name, such as `Hello, Tom Hanks!` __Notice that the hyphen is removed and each word is capitalized__.
- Visit the URL with your favority celebrity's name; then confirm that the correct greeting is being displayed.
- Add and commit.

### Step 4 of 4
- Refactor your code to replace the three hard-coded routes (`/express`, `/firstname`, and `/celebrity-name`) with one route that uses a parameter.
- Add and commit.
