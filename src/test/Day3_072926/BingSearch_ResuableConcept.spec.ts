import {test, expect} from '@playwright/test';
import { captureTextFromElement, submitOnElement, typeOnElement, visitPage, wait  } from '../../main/resuableMethods';

test('Bing search test', async ({ page }) => {

    //navigate to bing.com
    await visitPage(page, 'https://www.bing.com/');

    //enter a keyword on the search field .fill is same as sendkeys in selenium
    await typeOnElement(page, "[name='q']", "automation");

    // wait for 2 seconds
    await wait(page, 2000);

    //submit on element
    await submitOnElement(page, "//*[@name='q']");

    //wait a few seconds
    await wait(page, 3000);

    //capture a visible heading from the search results page
    let results = await captureTextFromElement(page, "//*[@class='sb_count']");
    console.log(results);
    let resultArray = results?.split(" ");
    console.log("Search number for automation is : " + resultArray?.[1]);

});