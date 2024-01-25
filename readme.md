 ** Getting Started **

 -- Clone the following line to your terminal: 

 - git clone https://github.com/Ori787/Final-Node.js-project.git -


* Install dependencies: *

-- npm install

* Start the server *

-- npm watch

** Dependencies **

The project uses the following main dependencies:

 - Express.js: Web framework for Node.js.

 - Mongoose: MongoDB object modeling tool.

 - nodemon: A utility that monitors for changes in your Node.js application and automatically restarts the server when changes are detected. It helps streamline the development process by avoiding the need to manually restart the server after every code change.

 - dotenv: A zero-dependency module that loads environment variables from a .env file into process.env. It simplifies the management of environment-specific configurations and sensitive data (e.g., API keys, database credentials) in Node.js applications.

 - bcrypt: A library used for hashing passwords and comparing hashed passwords during authentication. It provides a secure way to store passwords by generating salted and hashed representations of user passwords.

 - cors: Cross-Origin Resource Sharing (CORS) middleware for Express.js. It enables secure cross-origin requests by allowing you to define which origins are allowed to access your server's resources.

 - joi: A powerful schema description language and data validator for JavaScript. It allows you to define schemas for data validation, including complex data structures, and validate input data against these schemas.

 - jsonwebtoken: A library for generating and verifying JSON Web Tokens (JWT) for implementing token-based authentication in Node.js applications. It provides a secure way to transmit claims between parties as JSON objects.

 - body-parser: A middleware for Express.js that extracts the entire body portion of an incoming request stream and exposes it on req.body. It parses incoming request bodies in various formats (e.g., JSON, URL-encoded) and makes the parsed data available in req.body.


 
 * Functionality *


 -- Cards Management

    The cards.ts file in the routes folder handles requests related to managing cards. The following endpoints are available:


- GET /cards: Retrieve all cards.

- GET /cards/:_id: Retrieve a specific card by ID.

- POST /cards: Create a new card.

- PATCH /cards/:_id: Update a card liked list by ID.

- DELETE /cards/:_id: Delete a card by ID.

-- Users Management

The users.ts file in the routes folder handles requests related to managing users. The following endpoints are available:


- GET /users: Retrieve all users (with admin authorization).

- GET /users/:_id: Retrieve a specific user by ID (Authorization: the registered user or admin).

- POST /users: Create a new user.

- POST /users/login: generate token and encrypt it.

- PUT /users/:_id: edit user's information (Authorization: the registered user).

- PATCH /users/:_id: Update a user's business status by ID (Authorization: the registered user).

- DELETE /users/:_id: Delete a user by ID (Authorization: the registered user or admin).


* Handling Requests *

To test the endpoints and handle requests, you can use the requests.http file.
 This file contains sample HTTP requests that you can execute using tools like Visual Studio Code's REST Client extension or
