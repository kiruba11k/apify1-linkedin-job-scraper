import { Actor } from 'apify';

await Actor.init();

// 1. Fetch input provided by the user
const input = await Actor.getInput() || {};

// 2. Define the payload for the target actor
// We merge user input with defaults to ensure it matches the scraper's requirements
const scraperInput = {
    urls: input.urls || ["https://www.linkedin.com/jobs/search/?position=1&pageNum=0"],
    count: input.count || 100,
    scrapeCompany: input.scrapeCompany !== undefined ? input.scrapeCompany : true,
    splitByLocation: input.splitByLocation !== undefined ? input.splitByLocation : false,
};

console.log('--- Starting LinkedIn Jobs Scraper ---');
console.log(`Targeting URLs: ${scraperInput.urls.length}`);
console.log(`Desired Count: ${scraperInput.count}`);

try {
    // 3. Call the external actor and wait for it to finish
    // This uses your Apify credits to run the 'curious_coder/linkedin-jobs-scraper'
    const run = await Actor.call('curious_coder/linkedin-jobs-scraper', scraperInput);

    if (run.status === 'SUCCEEDED') {
        console.log(`Scraper successfully finished. Run ID: ${run.id}`);

        // 4. Retrieve results from the scraper's dataset
        // Using a limit of 99999 to ensure we get all items from the sub-run
        const { items } = await Actor.apifyClient.run(run.id).dataset().listItems({
            limit: 99999,
        });

        console.log(`Retrieved ${items.length} items. Saving to your dataset...`);

        // 5. Push the data to the current actor's dataset
        await Actor.pushData(items);
        
        console.log('--- Process Complete ---');
    } else {
        console.error(`Scraper failed with status: ${run.status}`);
        await Actor.fail(`The underlying scraper failed. Check run ${run.id} for details.`);
    }
} catch (error) {
    console.error('An error occurred during execution:', error.message);
    await Actor.fail(error.message);
}

await Actor.exit();
