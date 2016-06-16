# Final_Project

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

*include your proposal in this README after this line:*

This is an application to enter, rank and evaluate ideas.

A user will be able to enter their name for identification.

A user will be able to enter their ideas, one at a time.

A user will be able to evaluate ideas in a given group of ideas.

Done with basic product.

Advanced features are:

A user will be able to rank the ideas best to worst.

A user will be able to delete an idea he owns.

A user will be determine equivalent ideas.

AS BUILT NOTES:

Load mongo database data using -- mongo idea_1API < ideaJSON.js

Only the application display sections were developed.
