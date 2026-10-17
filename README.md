# Yehia's Career Path

Author: Ayman Chmeiss

Description: A simple Next.js website that helps Yehia, a Computer Science graduate, organize his job search journey. It includes a plan, a list of opportunities, and a dashboard to track applications.

How to run locally:

1. Run npm run dev to start the development server.
2. Open http://localhost:3000 in your browser.

Explain your choices:

1. Why did you use await when reading params?

In the latest version of Next.js, params is returned as a Promise. We must use await to resolve it and get the actual values. Without await, we would receive a Promise object instead of the real id.

2. Why is the route ID a string?

URLs are always text, so Next.js passes route segments as strings by default. For example, /opportunities/1 gives id = "1" (a string). Keeping the dataset IDs as strings ensures the comparison works correctly without type conversion.

3. What belongs in the dashboard layout, and what belongs in each dashboard page?

The dashboard layout should contain shared elements that appear on every dashboard page, such as a navigation bar. Each dashboard page should contain only its own unique content, such as the list of applications.