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

1. My project is to provide an inventory management service to F5 products
2. Will have a list of inventory locations (collection of inventory location objects)
3. The inventory location object will have properties of address, geo code, amount of products
4. Inventory management service (IMS) will take a request for a product in a given amount from
   a customer of known address.
5. IMS will based on requester's address to choose the closest inventory location to fullfil
   customer's requester
6. if the chosen location doesn't have enough products, then moved to next closest location to
   fullfil the request
7. When an inventory location doesn't have enough stocked products, it needs to back order
   and the back order can only be filled in a defined time interval.

additional functionality (if time allowed):

8. Each inventory location only operates during local office hours (for example: 8am-5pm)
9. A request may have a service contract attached to it so that certain SLA has to be met
10. The selection of inventory location then need to be decided by its schedule as well as its geo location

*instruction on running this application*
1. load data to mongodb database use the following command:
    mongo inventoryLocAPI < inventoryLocationJSON.js

    note that, before running the above command, make sure mongodb is running (run mongod at command line)

2. go to project root folder and run nodemon index.js
3. type localhost:3000 in a browser address bar
4. use Add Inventory Location button to add an inventory location record after filling in the form above it
5. the newly added inventory location record should show in the list below the form
6. the added record should be persist, meaning refresh the page won't make it go away (record is stored in a mongodb database).
7. use Remove button to remove a record. Again, the removal should be permanent. The record should also be deleted from db.
