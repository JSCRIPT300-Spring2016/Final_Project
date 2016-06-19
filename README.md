# Final_Project

Building a Blog App:
1. setting layout in html: Create, Update and Delete Author, Title and URL
2. setting Models and Collects
3. setting Views and Adding to Collections.
4. setting updating and deleting
5. setting GET and POST Requests to MongoDB at http://localhost:3000/
6. setting PUT and DELETE Requests to MongoDB at http://localhost:3000/

Main pages:
/public/scripts/JavaScript.js
/public/index.html
server.js

http://localhost:3000/ (please do not use http://127.0.0.1:3000/)

"dependencies": {
    "body-parser": "^1.15.1",
    "e": "0.0.4",
    "express": "^4.13.4",
    "jade": "^1.11.0",
    "mongoose": "^4.5.0",
    "nodemailer": "^2.4.2",
    "socket.io": "^1.4.6",
    "underscore": "^1.8.3"
  }


install:
>npm install bower -g
>bower install jquery backbone underscore bootstrap
>npm install express mongoose body-parser jade nodemailer e underscore --save

run:
>mongod

>node server


--------

Fork this repository for your final project. For week 3, you will be adding your project proposal to this README. The proposal just needs to be a description of what your project will be. The following elements are required in your project:

1. An Express server running on Node.
2. At least one module you have written `require`'d in and used on this server. This one may not be an Express router module.
3. At least one Express router module (this is in addition to the module required in #2.
4. A single page Backbone application to run in the browser. This application must include the following (4 modules total as a minimum):
   1. At least one Backbone model or collection module. If you're using a collection, define a separate model module for that collection.
   2. At least least 3 total Backbone view modules.
   3. At least one Backbone router module that supports at least 2 separate routes.
5. A **package.json** file that includes all your project dependencies and dev dependencies (basically everything necessary for me to npm install and run your application.)
6. An **.eslintrc** linting file. All of your code must be completely linted.

**I strongly recommend you keep your project simple**. There is a lot to do here, and any complexity will blow up the amount of time and effort required to complete it. Remember to build the simplest thing possible to achieve the task your application is meant to accomplish and avoid feature creep. You can always iterate on what you've built *after* you've completed the minimum viable product.


