use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
    name: "Jack Torrance",
    email: "jack.t@overlook.com",
    checked_in: true
    },
    {
    name: "Wendy Torrance",
    email: "wendy.t@overlook.com",
    checked_in: true
    },

    {
    name: "Danny",
    email: "danny.t@overlook.com",
    checked_in: true
    }
]);