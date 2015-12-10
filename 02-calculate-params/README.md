# express-calculator
For this exercise, you'll work with more than one parameter to create a simlple calculator. 

## Set-up
- Follow the instructions in [start-guide](../start-guide.md)

## Instructions
__From steps 2 to 6, you'll generate an error if you pass a number to `res.send()`, such as `res.send(12)`__. In that scenario, Express will mistaken the number for a status code. To fix this problem, you'll need to pass all numbers as strings, such as `res.send("12")`.

### Step 1 of 6
- Add code in `server.js` that will display the phrase "Hello, Calculator!"
- Visit [`localhost:8000/`](http://localhost:8000/) and confirm that the phrase is displayed in the response body.
- Add and commit.

### Step 2 of 6
- Create the route [`/add/9/3`](http://localhost:8000/add/9/3`). When a user visits that route, they should see `12`.
- Add and commit.

### Step 3 of 6
- Create the route [`/subtract/9/3`](http://localhost:8000/subtract/9/3`). When a user visits that route, they should see `6`.
- Add and commit.

### Step 4 of 6
- Create the route [`/multiply/9/3`](http://localhost:8000/multiply/9/3`). When a user visits that route, they should see `27`.
- Add and commit.

### Step 5 of 6
- Create the route [`/divide/9/3`](http://localhost:8000/divide/9/3`). When a user visits that route, they should see `3`.
- Add and commit.

### Step 6 of 6
- Refactor your code to have two routes: one for the homepage (`/`) and one for the arithmetic operations.
- Add and commit
