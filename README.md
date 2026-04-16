
# LinkedIn Job Scraper

A powerful tool to extract comprehensive job data from LinkedIn's public job search pages. Get detailed information including job descriptions, company profiles, application links, and more.

##  Getting Started

###  Important: Use Incognito Mode
This tool scrapes jobs from the **public LinkedIn jobs search page**, which displays different results than a logged-in LinkedIn account. 

To ensure you get accurate and consistent results:
1. Open a new **Incognito/Private window** in your browser.
2. Go to [LinkedIn Jobs Search](https://www.linkedin.com/jobs/search).
3. Apply your desired filters (Location, Date Posted, Job Type, etc.).
4. **Copy the full URL** from the address bar and paste it into the `urls` input field of this actor.

##  Features

* **Detailed Job Data:** Extracts title, company, location, seniority level, and employment type.
* **Full Descriptions:** Captures the complete job description in both Text and HTML formats.
* **Company Insights:** Optionally scrapes company website, description, slogan, and headquarters address.
* **Application Links:** Grabs the direct apply URL (including offsite career pages).
* **Bypass Limits:** Use the "Split by Location" feature to bypass the 1,000-job limit imposed by LinkedIn.

##  Input

| Field | Type | Description |
| :--- | :--- | :--- |
| **urls** | Array | List of public LinkedIn Job Search URLs. |
| **count** | Integer | Max number of jobs to scrape (Default: 100). |
| **scrapeCompany** | Boolean | Whether to fetch detailed company info (website, description). |
| **splitByLocation** | Boolean | Automatically splits search by cities to find more results. |

##  Output Sample

The actor provides structured data in JSON, CSV, or Excel. Here is a sample of the extracted data:

```json
{
  "id": "4399050171",
  "title": "CoE - Digital Engineering - Frontend Developer",
  "companyName": "Qualitest",
  "location": "Bengaluru, Karnataka, India",
  "link": "https://in.linkedin.com/jobs/view/...",
  "postedAt": "2026-04-14T21:07:56.000Z",
  "seniorityLevel": "Entry level",
  "employmentType": "Full-time",
  "applicantsCount": "200",
  "applyUrl": "https://careers.qualitestgroup.com/...",
  "descriptionText": "Job Title: Next.js Front-End Developer...",
  "companyWebsite": "https://www.qualitestgroup.com/",
  "companyEmployeesCount": 6056,
  "companyDescription": "Qualitest is the world’s leading managed services provider..."
}
```

##  Pro Tips

* **Daily Updates:** To scrape new jobs daily, set the LinkedIn "Date Posted" filter to "Last 24 hours" before copying the URL, then schedule this actor to run once a day.
* **Boolean Search:** LinkedIn supports Boolean operators in the keyword field (e.g., `"Frontend" AND "React" NOT "Angular"`) to help refine your results.
