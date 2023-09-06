
import puppeteer from "puppeteer";

const anchors = [
    'https://sketchfab.com/3d-models/polygon-city-pack-preview-5a16f543d1054fbc9ce1cb17a2ba412e',
    'https://sketchfab.com/3d-models/cartoon-prototype-car-88b89d3074cb4946a353ab990d1ff6a2',
    'https://sketchfab.com/3d-models/ready-player-one-parzivals-delorean-14c724212a2c469fa6cd051fb049aa51',
    'https://sketchfab.com/3d-models/old-police-car-011bdbb31ba641aa9c9912df4ce1ff99',
    'https://sketchfab.com/3d-models/cartoon-car-kobra-3ca98253a8774248b15e33047edd9364',
    'https://sketchfab.com/3d-models/2019-blade-runner-ground-police-car-d55a17a7da2945c69543a03d36a0a07d',
    'https://sketchfab.com/3d-models/free-1975-porsche-911-930-turbo-8568d9d14a994b9cae59499f0dbed21e',
    'https://sketchfab.com/3d-models/arcade-free-racing-car-31d21ca1b8d042b9a7b9aac2a75ec07e',
    'https://sketchfab.com/3d-models/free-porsche-911-carrera-4s-d01b254483794de3819786d93e0e1ebf',
];

for (let i = 0; i < 10; i++) {
    console.log(anchors[i]);

    puppeteer
        .launch({
            defaultViewport: {
                width: 790,
                height: 600,
            },
        })
        .then(async (browser) => {
            const page = await browser.newPage();
            await page.goto(anchors[i]);
            page.setDefaultNavigationTimeout(180000);
            const element = await page.$('.c-viewer__iframe');

            if (!element) {
                console.error("Element not found");
                await browser.close();
                return;
            }
            // Define the starting point of the drag
            const startPoint = await element.boundingBox();
            const startX = startPoint.x + startPoint.width / 2;
            const startY = startPoint.y + startPoint.height / 2;
            const width = startPoint.width;
            const height = startPoint.height;

            // Define the ending points of the drag
            const endPointA = { x: startX + (width / 8), y: startY };
            const endPointB = { x: startX + (width / 4), y: startY };
            const endPointC = { x: startX + ((width * 3) / 8), y: startY };
            const endPointD = { x: startX - (width / 8), y: startY };
            const endPointE = { x: startX - (width / 4), y: startY };
            const endPointF = { x: startX - ((width * 3) / 8), y: startY };


            // Simulate the drag
            await page.mouse.move(startX, startY);
            await page.mouse.down();
            await page.mouse.move(endPointA.x, endPointA.y, { steps: 50 });
            await page.mouse.up();
            await page.screenshot({
                path: "inputs/input_" + i + "a.png",
                clip: { x: 8, y: 62, width: 770, height: 390 }
            })

            // Simulate the drag
            await page.mouse.move(startX, startY);
            await page.mouse.down();
            await page.mouse.move(endPointB.x, endPointB.y, { steps: 65 });
            await page.mouse.up();
            await page.screenshot({
                path: "inputs/input_" + i + "b.png",
                clip: { x: 8, y: 62, width: 770, height: 390 }
            })

            // Simulate the drag
            await page.mouse.move(startX, startY);
            await page.mouse.down();
            await page.mouse.move(endPointC.x, endPointC.y, { steps: 65 });
            await page.mouse.up();
            await page.screenshot({
                path: "inputs/input_" + i + "c.png",
                clip: { x: 8, y: 62, width: 770, height: 390 }
            })

            // Simulate the drag
            await page.mouse.move(startX, startY);
            await page.mouse.down();
            await page.mouse.move(endPointD.x, endPointD.y, { steps: 65 });
            await page.mouse.up();
            await page.screenshot({
                path: "inputs/input_" + i + "d.png",
                clip: { x: 8, y: 62, width: 770, height: 390 }
            })

            // Simulate the drag
            await page.mouse.move(startX, startY);
            await page.mouse.down();
            await page.mouse.move(endPointE.x, endPointE.y, { steps: 65 });
            await page.mouse.up();
            await page.screenshot({
                path: "inputs/input_" + i + "e.png",
                clip: { x: 8, y: 62, width: 770, height: 390 }
            })

            // Simulate the drag
            await page.mouse.move(startX, startY);
            await page.mouse.down();
            await page.mouse.move(endPointF.x, endPointF.y, { steps: 65 });
            await page.mouse.up();
            await page.screenshot({
                path: "inputs/input_" + i + "f.png",
                clip: { x: 8, y: 62, width: 770, height: 390 }
            })


            await browser.close();
        });
    console.log("anchor" + i + "done");
}