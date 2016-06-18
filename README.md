# Final_Project

Fork this repository for your final project. For week 3, you will be adding your project proposal to this README. The proposal just needs to be a description of what your project will be. The following elements are required in your project:

1. An Express server running on Node. 
        Done
2. At least one module you have written `require`'d in and used on this server. This one may not be an Express router module.
    colorGen -> color.js
3. At least one Express router module (this is in addition to the module required in #2.
    gameRoutes.js
4. A single page Backbone application to run in the browser. This application must include the following (4 modules total as a minimum):
    public/index.html
   1. At least one Backbone model or collection module. If you're using a collection, define a separate model module for that collection.
    gameCollect.js
   2. At least least 3 total Backbone view modules.
    scoreView
    boxView
    totalView
   3. At least one Backbone router module that supports at least 2 separate routes.

5. A **package.json** file that includes all your project dependencies and dev dependencies (basically everything necessary for me to npm install and run your application.)
6. An **.eslintrc** linting file. All of your code must be completely linted.

**I strongly recommend you keep your project simple**. There is a lot to do here, and any complexity will blow up the amount of time and effort required to complete it. Remember to build the simplest thing possible to achieve the task your application is meant to accomplish and avoid feature creep. You can always iterate on what you've built *after* you've completed the minimum viable product.

*include your proposal in this README after this line:*
Andrew Reid final project will consist of a game where players try to match guesses with the server. Player must give name in order to play, then places their guessed colors in 4 boxes.

Upon hitting Play button, server will generate 4 colors and display them as borders in the 4 boxes. Matches will result in a scored value. A total score will be computed by the server and displayed through view methods.

A mockup of the game can be seen at:
https://github.com/wildalmondz/Final_Project.git