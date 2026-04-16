
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
    "trackingId": "LdfgDsAsA8dfk5DoJnroaA==",
    "refId": "bxbm8iPBwBuTXYKDdSmirg==",
    "link": "https://in.linkedin.com/jobs/view/coe-digital-engineering-frontend-developer-at-qualitest-4399050171?refId=bxbm8iPBwBuTXYKDdSmirg%3D%3D&trackingId=LdfgDsAsA8dfk5DoJnroaA%3D%3D&position=19&pageNum=0",
    "title": "CoE - Digital Engineering - Frontend Developer",
    "companyName": "Qualitest",
    "companyLinkedinUrl": "https://uk.linkedin.com/company/qualitest?trk=public_jobs_jserp-result_job-search-card-subtitle",
    "companyLogo": "https://media.licdn.com/dms/image/v2/D560BAQGi4S6swMGzWA/company-logo_100_100/company-logo_100_100/0/1736924694824/qualitest_logo?e=1778112000&v=beta&t=PGeQem2bpN0X_VjJe8fUwU1n6rah5rh5N9t8T2ak4Ho",
    "location": "Bengaluru, Karnataka, India",
    "postedAt": "2026-04-14T21:07:56.000Z",
    "benefits": [
      "Actively Hiring"
    ],
    "descriptionHtml": "Job Title: Next.js Front-End DeveloperWe are looking for a skilled JavaScript developer with strong experience in Next.js and React.js to join our front-end team. Your primary focus will be on building high-quality, scalable, and performant user interfaces using modern React and Next.js frameworks.You will work closely with designers, backend engineers, and product teams to deliver seamless user experiences. A strong commitment to clean code, performance optimization, and collaborative problem-solving is essential.ResponsibilitiesDevelop new user-facing features using Next.js and React.jsBuild reusable components and front-end libraries for future useImplement server-side rendering (SSR), static site generation (SSG), and API routes using Next.jsTranslate UI/UX designs and wireframes into high-quality, maintainable codeOptimize applications for maximum performance across devices and browsersCollaborate with backend developers to integrate RESTful and/or GraphQL APIsEnsure code quality through best practices, testing, and maintainabilityParticipate in code reviews and contribute to team knowledge sharingRequired SkillsStrong proficiency in JavaScript (ES6+), including DOM manipulation and object modelSolid understanding of React.js and its core principles (hooks, state management, lifecycle)Hands-on experience with Next.js (SSR, SSG, ISR, routing, middleware)Experience with state management libraries (e.g., Redux, Zustand, or Context API)Familiarity with RESTful APIs and asynchronous request handlingUnderstanding of modern authentication methods (e.g., JWT, OAuth)Experience with modern front-end build tools (Webpack, Vite, Babel)Proficiency with package managers like NPM or YarnFamiliarity with version control tools such as GitGood to HaveExperience with TypeScriptFamiliarity with GraphQL and tools like Apollo ClientUnderstanding of SEO best practices in Next.js applicationsExperience with CSS frameworks (Tailwind CSS, Material UI, etc.)Knowledge of testing frameworks (Jest, React Testing Library)Exposure to CI/CD pipelines and deployment platforms (e.g., Vercel, Docker)Soft SkillsAbility to understand business requirements and translate them into technical solutionsStrong problem-solving and debugging skillsAttention to detail with a focus on performance and scalabilityExcellent communication and collaboration skills3 must havesJavaScript developer with strong experience in Next.js and React.js 4/5",
    "applicantsCount": "200",
    "applyUrl": "https://careers.qualitestgroup.com/job/Bangalore-CoE-Digital-Engineering-Frontend-Developer-560045/54907444/?utm_source=LINKEDIN&utm_medium=referrer",
    "salary": "",
    "descriptionText": "Job Title: Next.js Front-End DeveloperWe are looking for a skilled JavaScript developer with strong experience in Next.js and React.js to join our front-end team. Your primary focus will be on building high-quality, scalable, and performant user interfaces using modern React and Next.js frameworks.You will work closely with designers, backend engineers, and product teams to deliver seamless user experiences. A strong commitment to clean code, performance optimization, and collaborative problem-solving is essential.ResponsibilitiesDevelop new user-facing features using Next.js and React.jsBuild reusable components and front-end libraries for future useImplement server-side rendering (SSR), static site generation (SSG), and API routes using Next.jsTranslate UI/UX designs and wireframes into high-quality, maintainable codeOptimize applications for maximum performance across devices and browsersCollaborate with backend developers to integrate RESTful and/or GraphQL APIsEnsure code quality through best practices, testing, and maintainabilityParticipate in code reviews and contribute to team knowledge sharingRequired SkillsStrong proficiency in JavaScript (ES6+), including DOM manipulation and object modelSolid understanding of React.js and its core principles (hooks, state management, lifecycle)Hands-on experience with Next.js (SSR, SSG, ISR, routing, middleware)Experience with state management libraries (e.g., Redux, Zustand, or Context API)Familiarity with RESTful APIs and asynchronous request handlingUnderstanding of modern authentication methods (e.g., JWT, OAuth)Experience with modern front-end build tools (Webpack, Vite, Babel)Proficiency with package managers like NPM or YarnFamiliarity with version control tools such as GitGood to HaveExperience with TypeScriptFamiliarity with GraphQL and tools like Apollo ClientUnderstanding of SEO best practices in Next.js applicationsExperience with CSS frameworks (Tailwind CSS, Material UI, etc.)Knowledge of testing frameworks (Jest, React Testing Library)Exposure to CI/CD pipelines and deployment platforms (e.g., Vercel, Docker)Soft SkillsAbility to understand business requirements and translate them into technical solutionsStrong problem-solving and debugging skillsAttention to detail with a focus on performance and scalabilityExcellent communication and collaboration skills3 must havesJavaScript developer with strong experience in Next.js and React.js 4/5",
    "seniorityLevel": "Entry level",
    "employmentType": "Full-time",
    "jobFunction": "Engineering and Information Technology",
    "industries": "IT Services and IT Consulting",
    "inputUrl": "https://www.linkedin.com/jobs/search?keywords=Aiml%20Engineer&location=Greater%20Bengaluru%20Area&geoId=90009633&f_E=2&f_PP=105214831&f_TPR=r604800&position=1&pageNum=0",
    "salaryInsights": {},
    "applyMethod": "OffsiteApply",
    "expireAt": 1778792876000,
    "postedAtTimestamp": 1776200876000,
    "workplaceTypes": [],
    "workRemoteAllowed": false,
    "standardizedTitle": "Frontend Developer",
    "country": "IN",
    "companyAddress": {
      "type": "PostalAddress",
      "streetAddress": "1 Appold Street London",
      "addressLocality": "London",
      "postalCode": "EC2A2UT",
      "addressCountry": "GB"
    },
    "companyWebsite": "https://www.qualitestgroup.com/",
    "companySlogan": "Engineering tomorrow with AI, People & Precision.",
    "companyDescription": "Qualitest is the world’s leading managed services provider of AI-led quality engineering solutions. It helps brands transition through the digital assurance journey and make the move from conventional functional testing to adopt innovations such as automation, AI, blockchain, and XR.  \n \nQualitest’s core mission is to mitigate business risks associated with digital adoption. It fulfills this through customized quality engineering solutions that leverage Qualitest’s deep, industry-specific knowledge for various sectors, including technology, telecommunications, finance, healthcare, media, utilities, retail, manufacturing, and defense. These scalable solutions protect brands through end-to-end value demonstration with a focus on customer experience and release velocity.  \n \nA pioneer and innovator in its industry, Qualitest has been recognized in the highest Leader position in Everest Group's Quality Engineering Services for Mid-market Enterprises PEAK Matrix® Assessment 2024 report and has also been recognized as a Leader in The Forrester Wave™️: Continuous Automation and Testing Services Q2 2024 report.\n \nQualitest has offices in the United States, United Kingdom, Israel, Romania, India, Mexico, Portugal, Switzerland, and Argentina.  ",
    "companyEmployeesCount": 6056
  }
```

##  Pro Tips

* **Daily Updates:** To scrape new jobs daily, set the LinkedIn "Date Posted" filter to "Last 24 hours" before copying the URL, then schedule this actor to run once a day.
* **Boolean Search:** LinkedIn supports Boolean operators in the keyword field (e.g., `"Frontend" AND "React" NOT "Angular"`) to help refine your results.
