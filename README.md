# Project Overview: News API

This project is a simple news feed application using React and TypeScript. It includes a header, a search bar, and a list of news articles fetched from an external API.

## Main Features
- Search Functionality: The search bar allows users to search for news articles in different languages.
- API Integration: Utilizes the NewsAPI to query and display news articles based on user input.
- Loading Indicator: Displays a loading indicator while retrieving data.
- The useEffect hook monitors the shouldFetch state. When set to true, the fetchNews function is called, and shouldFetch is immediately reset to false. This prevents multiple fetch requests from being triggered.

## Technologies Used
React, TypeScript, CSS, HTML

## Preview
![screenshot](/public/img/API_News_preview.png)