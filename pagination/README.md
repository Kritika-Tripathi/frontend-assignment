# PaginationComponent

## Overview
PaginationComponent is a React component that fetches and displays paginated data in a table format. It includes pagination controls for navigating through pages efficiently.

## Features
- Fetches data from a specified API [endpoint]( https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json).
- Displays tabular data with headings.
- Implements pagination with previous, next, and numbered page controls.
- Updates the URL query parameter to reflect the current page.
- Supports ellipsis for better pagination navigation.

## Installation
Ensure you have a React project set up. Then, include the component in your project:

   `npm install`

## How It Works

1. Fetch Data: The component fetches data from GET_URL on mount.

2. Paginate Data: The data is split into pages based on ITEMS_PER_PAGE.

3. Pagination Controls: Users can navigate using:
   - Previous/Next buttons.
   - Numbered page buttons.
   - Ellipsis (...) when applicable.
4. URL State Update: The ?page= query parameter updates on page changes.

## Hosting
The application is hosted on Vercel and can be accessed at: [Pagination App](https://pagination-six-psi.vercel.app/?page=1)

### How to Deploy on Vercel
To deploy this project on Vercel, follow these steps:

1. Install Vercel CLI (optional):

    `npm install -g vercel`

2. Login to Vercel:

     `vercel login`

3. Deploy the project:

    `vercel`

4. Follow the prompts to link the project and configure deployment settings.
5. Run the following command to deploy on production:
    `vercel --prod`

Once deployed, Vercel provides a live link to access the hosted application

## License
This project is licensed under the MIT License.

## Author

Developed by Kritika Ganesh Tripathi