# Project Overview

This project is a simple news feed application using React and TypeScript. It includes a header, a search bar, and a list of news articles fetched from an external API.

## Main Features
- Search Functionality: The search bar allows users to search for news articles in different languages.
- API Integration: Utilizes the NewsAPI to query and display news articles based on user input.
- Loading Indicator: Displays a loading indicator while retrieving data.
- The useEffect hook monitors the shouldFetch state. When set to true, the fetchNews function is called, and shouldFetch is immediately reset to false. This prevents multiple fetch requests from being triggered.

## Technologies Used
React, TypeScript, CSS

### Setup and Installation
- Clone the repository: git clone <repository-url>
- Install dependencies: npm install
- Create a .env file with your API key: VITE_API_KEY=your_api_key
- Start the application: npm start

## Preview
![screenshot](/public/img/API_News_preview.png)