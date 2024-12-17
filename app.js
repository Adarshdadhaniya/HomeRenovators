const express = require("express");
const app = express();
const path = require('path');
const engine=require('ejs-mate');








app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.engine('ejs', engine);
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});



app.get("/bathroom", (req, res) => {
    res.render("bathroom.ejs")
  });
  
  

// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Villa",
//     description: "By the beach",
//     price: 1200,
//     location: "Calangute, Goa",
//     country: "India",
//   });

//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("successful testing");
// });

app.listen(8080, () => {
  console.log("server is listening to port 8080");
});  