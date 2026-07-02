
import { test } from '@playwright/test';

test('Bing Search Test', async ({ page }) => {
//declare tyhe array list
let cars = Array<string>();
cars.push("BMW");
cars.push("Porsche");
cars.push("Audi");

for (let i = 0; i < cars.length; i++) {
    //navigate to bing.com
    await page.goto('https://www.bing.com');

    //enter the car name in the search box
    await page.locator("[name='q']").fill(cars[i]);

    //wait for a few seconds
    await page.waitForTimeout(1000);

    //submit with keyboard enter
    await page.keyboard.press('Enter');

    //wait a few seconds
    await page.waitForTimeout(1000);

    //capture the search results text
    let results = await page.locator("[class='sb_count']").textContent();   
    console.log(results);
    let resultArray = results?.split(" ");
    console.log("Search number for " + cars[i] + " is : " + resultArray?.[1]);  
}// end of for loop

});// end of test