import { test, expect } from '@playwright/test';

test ('Bing search test', async ({ page }) =>{

    //navigate to bing.com
    await page.goto('https://www.bing.com/');

    //enter a keyword in the search field. .fill is same as sendkeys in selennium
    await page.locator("//*[@name='q']").fill('Soccer');

    await page.waitForTimeout(2000);

    //submit with keyboard eneter
    await page.keyboard.press('Enter');

    //wait a few seconds
    await page.waitForTimeout(3000);

    //capture the search result text
    let results = await page.locator("//*[@class='sb_count']").textContent()
    console.log(results)
    let arrayResults = results?.split(' ')
    console.log("Search number is : " + arrayResults?.[1])

});