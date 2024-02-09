# express-server

Creating a web server with Express.js

## Setup

### 0. Cloning and branching

- [ ] Clone this repo and create a new branch for you or your pair
- [ ] Start the server with `npm run dev`

---

After each section:

- Check your work by viewing the new route in [Thunderclient](https://www.thunderclient.com/)
- Stage, commit, and push your work to Github

---

## Server responses

### 1. Respond with a string

- [ ] Create a route called `/compliment` within `server.ts` that responds with a nice compliment using `res.send("What a fancy blazer~")`
- [ ] Check the `Content-Type` header in Thunderclient, this is the default type for `res.send` when you pass a string
- [ ] Use `res.json()` instead of `res.send()`, what difference can you observe between these two methods?
      
### 2. Respond with some JSON

- [ ] On that same route, change your `res.json` to pass an object with a few keys. Something like:

  ```js
  {
    category: 'fashion',
    powerLevel: 10,
    text: 'What a fancy blazer~'
  }
  ```


### 3. Respond with a predefined file

- [ ] In the server folder, create an `secrets.txt` file
  <details style="padding-left: 2em">
    <summary>Tips</summary>

  - This could include name, username, location, shopping list or anything you want really.
  </details>

- [ ] Create a GET route called `/secrets` and respond with the new file
<details style="padding-left: 2em">
<summary>Tips</summary>

- use `res.sendFile` and pass it the path
- `res.sendFile` wants an absolute path, so we'll use `Path.resolve('./server/secrets.txt')`
- Use `import * as Path from 'node:path'` to get access to all the path functions
</details>

- [ ] Check your route in Thunderclient, make a note of the value of the `Content-Type` header
- [ ] Create another secrets file as a [JSON](https://www.json.org/json-en.html) document called `secrets.json`, you will now send that file instead of your text file
  <details style="padding-left: 2em">
    <summary>Notes</summary>

  - This file should be an array of strings
  - Tell us some secrets
  - I'm going to read these secrets, so don't put anything too good in there
  </details>

- [ ] Check your route in Thunderclient again, make a note of the `Content-Type`

### 4. Respond based on the query

- [ ] Create two more JSON files called `mystical-secrets.json` and `kitchen-secrets.json`
<details style="padding-left: 2em">
  <summary>Tip</summary>
  
  - These can also contain arrays of strings
  - Remember! JSON strings _always_ use double quotes `"` and never single-quotes `'`
  - Make sure the contents are different enough that you can easily tell them apart
</details>

- [ ] Change the `/secrets` route to accept query string parameters
  <details style="padding-left: 2em">
    <summary>More about query string params</summary>

  - If you request `/secrets?type=mystical` respond with `mystical-secrets.json`
  - If you request `/secrets?type=kitchen` respond with `kitchen-secrets.json`
  - If you request `/secrets` respond with `secrets.json`
  - You'll likely use `if/else` statements or a `switch/case` that uses `req.query.type`
  </details>

### 5. Respond based on a URL parameter

- [ ] Create a GET route for `/secrets/:type`, `:type` is a path parameter
  <details style="padding-left: 2em">
    <summary>Tips</summary>

  - look at `req.params.type`
  - You'll likely use `if/else` statements or a `switch/case` statement
  - If you request `/secrets/mystical` respond with `mystical-secrets.json`
  - If you request `/secrets/kitchen` respond with `kitchen-secrets.json`
  - If you request `/secrets/lizards` use `res.sendStatus(404)` to send "Not Found"

  </details>

### 6. Post data to the server

- [ ] Add a POST route at `/compliment-me`
  <details style="padding-left: 2em">
    <summary>More about handling submission</summary>

  - Add `express.json` as middleware to `server.ts`
    ```js
    server.use(express.json())
    ```
  - We want `req.body` to be an object with `name`, `age`, `heightM`, something like this -

    ```json
    {
      "name": "Gerard",
      "age": 49,
      "heightM": 1.75
    }
    ```

  - Respond with a compliment customised for the request,
    1. First you'll need to define the variables we need from req.body, eg.
       ```js
       const { name, age, heightM } = req.body
       ```
    2. Let's have the compliment based on height. Say a fair cutoff for someone considered to be "tall" is 1.8288. Write the logic to determine if someone "isTall" or not based on the heightM that we get from req.body and if it is greater than 1.8288
    3. Construct the compliment message using template literals (backticks) to insert the dynamic values (name, age) and the result of the height comparison (isTall). You can use a ternary operator to choose between "big fella" or "short king" based on the value of isTall.
    4. Additionaly, you can also include a compliment about their age. eg.
       ```js
       `you don't look ${age} at all (not implying that looking older is worse)`
       ```
    5. And just for fun add a  sincerity rating to the response. This could be a random number or a predetermined value depending on the context. eg. "sincerety:0.6"
    6. Make sure the compliment message and any additional data is wrapped as a JSON object using res.json()


- [ ] POST to the new endpoint from Thunderclient
      Make a POST request to `http://localhost:3000/compliment-me` with a JSON object and see the compliment come back at you!
      
  </details>
---

[Provide feedback on this repo](https://docs.google.com/forms/d/e/1FAIpQLSfw4FGdWkLwMLlUaNQ8FtP2CTJdGDUv6Xoxrh19zIrJSkvT4Q/viewform?usp=pp_url&entry.1958421517=express-server)
