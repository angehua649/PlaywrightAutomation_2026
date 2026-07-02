import { test } from '@playwright/test';

test('USPS Mouse Hover Test', async ({ page }) => { 

    //navigate to usps.com
    await page.goto('https://www.usps.com/');

    //Wait for 3 seconds
    await page.waitForTimeout(3000);

    //Mouse hover on the "Quick Tools" tab
    await page.locator("//*[text()='Quick Tools']").hover();

    //Wait for 3 seconds
    await page.waitForTimeout(3000);

    //Click on "Track a Package" link
    await page.locator("//*[text()='Track a Package']").click();


});