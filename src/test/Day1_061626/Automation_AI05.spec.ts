
//Redoing Automation AI 03 
import { test, expect } from '@playwright/test';
test('Capital One 360 Account Open/Enter Name', async ({ page }) => {

    //navigate to capitalone.com
    await page.goto('https://www.capitalone.com');

    //Cick on the Checking & Savings Tab
    await page.locator("//*[text()='Checking & Savings']").nth(0).click();

    //Scroll down to 360 Checking and click on it 
    await page.locator("//*[text()=' 360 Checking ']").click();

    //click on the Open Account button 
    await page.locator("//*[text()=' Open account ']").click();

    //wait for 2 seconds
    await page.waitForTimeout(2000);

    //Click on "No" for do you already have a capital one account
    await page.locator("//*[text()='No']").click();

    //wait for 2 seconds
    await page.waitForTimeout(2000);

    //Click on Continue
    await page.locator("//*[text()='Continue']").click();

    //wait for 2 seconds
    await page.waitForTimeout(2000);

    //Enter First Name: John
    await page.locator("//*[@id='first-name']").fill('John');

    // Enter Last Name: Doe
    await page.locator("//*//*[@id='last-name']").fill('Doe');

    //wait for 2 seconds
    await page.waitForTimeout(2000);

    //Print out Entered First Name and Last Name
    let firstName = await page.locator("//*[@id='first-name']").inputValue();
    let lastName = await page.locator("//*[@id='last-name']").inputValue();
    console.log("The inputed First Name is : " + firstName + " and " + " the inputed Last Name os : " + lastName);


});
