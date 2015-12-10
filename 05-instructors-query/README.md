# instructors-query
For this exercise, you'll work with query strings to greet a people.

## Set-up
- Follow the instructions in [start-guide](../start-guide.md)

## Instructions
### Step 1 of 6
- Add code in `server.js` that will display the phrase "Hello, Query!"
- Visit [`localhost:8000/`](http://localhost:8000/) and confirm that the phrase is displayed in the response body.
- Add and commit.

### Step 2 of 6
- Create a route `/instructors`. This route should display all the objects in `data` in the file `server.js`.
- Add and commit.

### Step 3 of 6
- When a user visits the route `/instructors?givenname=rosa`, the object with Rosa should be displayed.
- Add and commit.

### Step 4 of 6
- When a user visits the route `/instructors?surname=desai`, the object with Zubair should be displayed.
- Add and commit.

### Step 5 of 6
- When a user visits the route `/instructors?sex=male`, the object with Cho, Zubair, and Tyler should be displayed.
- Add and commit.

### Step 6 of 6
- Refactor your code to greet any instructor by their give-name, surname, or sex. You should need only one route to to achieve this goal.
- Add and commit
