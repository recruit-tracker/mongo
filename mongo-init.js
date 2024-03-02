db = new Mongo().getDB("recruit_tracker");

db.createCollection("users", { capped: false });

db.users.insertMany([
  { first_name: "HR", last_name: "Manager", email: "hr@cgi.com" },
  { first_name: "Student", last_name: "Test", email: "student@cgi.com" },
]);
