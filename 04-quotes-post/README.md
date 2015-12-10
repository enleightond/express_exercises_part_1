## quotes-post
For this exercise, you'll use a form to create a new quote.

- Follow the instructions in [start-guide](../start-guide.md)

## Instructions
### Step 1 of 5
- Add a route called [`/`](http://localhost:8000/) with the `GET` method. This route should display the greeting `Hello, Quote!`
- Visit [`/`](http://localhost:8000/) and confirm that `Hello, Quote!` is displayed.
- Add and commit.

### Step 2 of 5
- Add a route called [`/quotes/new`](http://localhost:8000/quotes) with the `GET` method. As its response, serve `form.html`. You'll have to create this file and give the form two text input fields: `quote` and `author`.
- Visit [`/quotes/new`](http://localhost:8000/quotes) and confirm that the form is being rendered.
- Add and commit.

### Step 3 of 5
- When a form is submitted, it should be routed to `/quotes` with a method of `POST`. In this method, the new quote should be pushed as an object to an array named `data`. (This array has already been created for you on line 4 of [`server.js`](./server.js).)
- After the quote is saved, a user should be re-directed (`res.redirect()`) to a path that includes __both__  `/quotes` and the index number of the new quote in `data`, such as `/quotes/1`. This route needs to be created (read step 4 of 5)!

### Step 4 of 5
- Add a route called `/quotes/:id` with the `GET` method. This route should display the most recently added quote.
- Visit this route; then confirm that the newest post is being displayed.
- Add and commit.

### Step 5 of 5
- Add a route called [`/quotes`](http://localhost:8000/quotes) with the `GET` method. This route should display all quotes that are stored in `data`.
- Visit [`/quotes`](http://localhost:8000/quotes) and confirm that all posts are being displayed.
- Add and commit.
