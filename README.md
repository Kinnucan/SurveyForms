# Survey Application

Survey Application components and pages

## Description

This is a simple React web application that collects survey information and displays the results for administrators.

Users login using their Google account, with authentication provided by auth0 (https://auth0.com/), and are given
the option to fill out several forms, once authenticated. If the user has admin privileges, they can also view the
dashboard, where several tables containing the aggregated data from previous form submissions will be displayed.
Each table has sorting functionality to allow the user to view the data in whatever combination they please.

This project utilizes the following technologies and libraries:

- React.js
- Redux & RTK Query (for data storage and API queries)
- AntD (for UI components)
- auth0 (for authentication)
- Netlify (for web hosting)
- AWS DynamoDB (for backend storage)
- AWS API Gateway (for data retrieval)

This project is built using React.js and AntD for the UI components. Redux and RTK Query are utilized to handle all
API calls and the responses from them, as well as provide the local data cache. All information gathered from the forms
are stored in one DynamoDB table. Information about admin users are stored in a separate table. A singular API Gateway
API is used to retrieve information from both DynamoDB tables and return it to the UI.

The project is hosted on Netlify, with authentation handled passwordlessly by auth0 (custom authentication).

## How to Use This Project

To view the live version of this project, follow this link: https://precious-kangaroo-784609.netlify.app/
To view the admin dashboard, use the following login info:

Email: surveyformsaccess@gmail.com
Password: Admin123!!??

To run this project locally, follow these steps:

- Create an account with auth0 and follow the steps to set up allowed login, logout, and redirect URL's for an app
  (in the case of running the project locally, you'll need to use the "https://127.0.0.0.1:3000", as including "localhost"
  in place of the IP address will fail)
- Go through the steps to create an SSL cert so that the site can be run with HTTPS, as auth0 doesn't work with HTTP only
- Navigate to "index.js" under "/src" and update the "redirect_uri" parameter in Auth0Provider to point to the redirect
  URL you set up in step 1
- Execute "npm start" in the source directory of this project
