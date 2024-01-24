const puppeteer = require('puppeteer-core');

(async () => {
    // Launch a non-headless browser for debugging.
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe', // Replace with the actual path to your Google Chrome executable.
    headless: false, // You can set this to true if you want Chrome to run in headless mode.
  });

  const page = await browser.newPage();
  const groupName = "TT2022-2A"; // Variable for group name to be typed on "Search by group" (await page.type('input[aria-label="searchfield"]', groupName);)

  try {
    // Go to website
    await page.goto('https://lukkarit.vamk.fi/#/schedule'); // Curriculum website

    // Automation steps performed here

    //Select "Hae ryhmiä" -option from the search-navigation bar
    await page.waitForSelector('#option2');
    await page.click('#option2'); 

    //Type group name on search field
    await page.waitForSelector('input[aria-label="searchfield"]'), {visible: true};
    await page.type('input[aria-label="searchfield"]', groupName);

    //Click search-button
    await page.waitForSelector('.btn.btn-dark');
    await page.click('.btn.btn-dark');

    //Click add-button to display selected groups' curriculum
    await page.waitForSelector('button.btn.btn-light.btn-sm.btn-add-row.ng-star-inserted');
    await page.click('button.btn.btn-light.btn-sm.btn-add-row.ng-star-inserted');

    //Close search options for visibility
    await page.waitForSelector('button.btn.btn-secondary.btn-sm.float-right');
    await page.click('button.btn.btn-secondary.btn-sm.float-right');
    

  } catch (error) {
    console.error('An error occurred:', error);
  } 

})();