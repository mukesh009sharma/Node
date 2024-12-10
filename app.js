// import express from "express";
// const app = express()

// app.get("/", (req, res,next)=>{
//     res.write("type '/home' in url");
//     res.end();
// });
// app.get("/home", (req, res,next)=>{
//     res.write("Home page");
//     res.end();
// });
// app.get("/about",(req,res,next)=>{
//     res.write("About page");
//     res.end();
// });
// app.listen(3000, ()=>{
//     console.log("Server started!");
// });


import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
//app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, "views")));
app.use(express.static("images"));

app.get("/", (req, res, next) => {
  res.render("Home.ejs");
});
app.get("/Home", (req, res, next) => {
  res.render("Home.ejs");
});

app.get("/About", (req, res, next) => {
  res.render("About.ejs");
});

app.get("/Contact", (req, res, next) => {
  res.render("Contact.ejs");
});

app.listen(4000, () => {
  console.log('Server started');
});
