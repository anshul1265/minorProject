// requiring all the packages
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require('ejs');
const puppeteer = require("puppeteer");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const PORT = 3000 || process.env.PORT;

app.get("/", (req, res) => {
    res.render("home");
});

app.post("/screenshot", (req, res) => {
    console.log("work started");
    puppeteer
        .launch({
            defaultViewport: {
                width: 1280,
                height: 2000,
            },
        })
        .then(async (browser) => {
            const page = await browser.newPage();
            await page.goto("https://google.com");
            await page.screenshot({ path: "nyt-puppeteer.png" });
            await browser.close();
        });
    console.log("work done");
    res.render("over");
});

// app.post("/screenshot", (req, res) => {
//     res.send("working fine");
// })

app.listen(PORT, (req, res) => {
    console.log(`Server running at port ${PORT}`);
});