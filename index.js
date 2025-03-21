import express from "express";
import bodyparser from "body-parser"

const app = express();
const port = 3000;

app.use(express.static("public"))
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine", "ejs");

let posts = [];

app.get("/", (req,res) => {
    res.render("index", { posts: posts });
})

app.get("/compose", (req,res) => {
    res.render("compose")
})

app.get("/about", (req,res) => {
    res.render("about")
})

app.get("/faqs", (req,res) => {
    res.render("faqs")
})

app.get("/contact", (req,res) => {
    res.render("contact")
})

app.get("/about", (req,res) => {
    res.render("about")
})

app.get("/contact", (req,res) => {
    res.render("contact")
})

app.get("/faqs", (req,res) => {
    res.render("faqs")
})

app.post("/compose", (req, res) => {
    const post = {
        title: req.body["title"],
        content: req.body["content"],
    };
    posts.push(post);
    res.redirect("/");
});

app.post("/delete", (req, res) => {
    const index = req.body["index"];
    posts.splice(index, 1);
    res.redirect("/");
});


app.listen(port, ()=> {
    console.log(`From port ${port}.`)
})