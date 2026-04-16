import { Actor } from 'apify';

await Actor.init();

// 1. Fetch input provided by the user
const input = await Actor.getInput() || {};

// 2. Define the payload for the target actor
const scraperInput = {
    urls: input.urls || ["https://www.linkedin.com/jobs/search/?position=1&pageNum=0"],
    count: input.count || 100,
    scrapeCompany: input.scrapeCompany !== undefined ? input.scrapeCompany : true,
    splitByLocation: input.splitByLocation !== undefined ? input.splitByLocation : false,
};

console.log('--- Starting LinkedIn Jobs Scraper ---');

try {
    // 3. Call the external actor and wait for it to finish
    const run = await Actor.call('curious_coder/linkedin-jobs-scraper', scraperInput);

    if (run.status === 'SUCCEEDED') {
        console.log(`Scraper successfully finished. Run ID: ${run.id}`);

        // 4. Retrieve results from the scraper's dataset
        const { items } = await Actor.apifyClient.run(run.id).dataset().listItems({
            limit: 99999,
        });

        console.log(`Filtering ${items.length} items to keep only requested columns...`);

        // 5. Transform and filter items to specific columns only
        const filteredItems = items.map((item) => ({
            link: item.link,
            title: item.title,
            companyName: item.companyName,
            companyLinkedinUrl: item.companyLinkedinUrl,
            location: item.location,
            postedAt: item.postedAt,
            benefits: item.benefits,
            descriptionHtml: item.descriptionHtml,
            applicantsCount: item.applicantsCount,
            descriptionText: item.descriptionText,
            seniorityLevel: item.seniorityLevel,
            industries: item.industries,
            companyWebsite: item.companyWebsite,
            companyEmployeesCount: item.companyEmployeesCount,
        }));

        // 6. Push the cleaned data to the current actor's dataset
        await Actor.pushData(filteredItems);
        
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
