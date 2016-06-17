/* eslint-disable no-undef, max-len */
db.categories.insert([
    {
        name: "House",
        description: "Projects to do inside the house"
    },
    {
        name: "Vacations",
        description: "Places I want to go to"
    },
    {
        name: "Bucket List",
        description: "Thing to do befoe EOL"
    }]);

db.categories.find().forEach(function(category) {
    if (category.name === "House") {
        db.tasks.insert({ "categoryId" : category._id, "name" : "paint kitchen", "complete" : "false", "updated_at" : new Date() });
        db.tasks.insert({ "categoryId" : category._id, "name" : "mow grass", "complete" : "false", "updated_at" : new Date() });
        db.tasks.insert({ "categoryId" : category._id, "name" : "grout bathtub", "complete" : "false", "updated_at" : new Date() });
    } else if (category.name === "Vacations") {
        db.tasks.insert({ "categoryId" : category._id, "name" : "Hawaii", "complete" : "false", "updated_at" : new Date() });
        db.tasks.insert({ "categoryId" : category._id, "name" : "Great Wall of China", "complete" : "false", "updated_at" : new Date() });
    } else if (category.name === "Bucket List") {
        db.tasks.insert({ "categoryId" : category._id, "name" : "Go skydiving", "complete" : "false", "updated_at" : new Date() });
        db.tasks.insert({ "categoryId" : category._id, "name" : "Climb Mt Everest", "complete" : "false", "updated_at" : new Date() });
    }
});
/* eslint-enable no-undef, max-len */

