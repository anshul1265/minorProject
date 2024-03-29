import puppeteer from "puppeteer";
import fs from "fs";

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://sketchfab.com/search?date=month&q=cars&type=models');
    const dom = await page.evaluate(() => document.documentElement.outerHTML);
    fs.writeFile('example.html', dom, (err) => {
        if (err) throw err;
        console.log('DOM saved to example.html file');
    });
    await browser.close();
})()