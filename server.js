const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

// this bit of config enables our express app to read incoming data payloads
// via our routes - the user data we pass in via the fetch all in the login component
// we can use a JSON encoded object or URL parameters to pass data in
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // ?username="value"&&password="anothervalue"
app.use("/ums", require("./routes/api"));

app.listen(port, () => {
  console.log(`ums is running at port ${port}`);
})