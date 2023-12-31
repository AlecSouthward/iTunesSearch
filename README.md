# iTunes Search App

iTunes Search App is a web application that allows users to search for music, movies, TV shows, and more using the iTunes Search API. Users can view search results and add their favorite items to a favorites list.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Express.js
- **API:** iTunes Search API
- **Styling:** CSS
- **HTTP Client:** Axios

## Features

- **Search:** Users can enter a query in the search bar and get real-time search results from the iTunes API.
- **Favorites:** Users can add items from the search results to their favorites list.
- **View Favorites:** Users can view their favorite items on a separate page.
## Security
### Helmet
The application uses [Helmet](https://helmetjs.github.io/) to enhance security by setting various HTTP headers. Helmet helps protect against common web vulnerabilities.

### Cors
[CORS (Cross-Origin Resource Sharing)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) headers are handled using the `cors` middleware to control access to the iTunes Search API from the React front end.

## Installation and Setup

1. **Clone the repository:**
   ```
   git clone https://github.com/AlecSouthward/iTunesSearch.git
   ```

2. **Install dependencies:**
   ```
   cd itunes-search-app
   npm install

   cd client
   npm install
   ```

3. **Start the server and the client:**
   ```
   npm start
   ```

   This command will start both the Express server (on port 8080) and the React development server (on port 3000).

4. **Access the application:**
   Open your browser and go to `http://localhost:3000` to access the iTunes Search App.

## Testing
To test the API, while in the sever's folder (main folder) run this command:
```
npm run test-server
```

To test the frontend, while in the client's folder (```cd client``` from server folder) run this command:
```
npm run test
```

## Usage

- Enter a search query in the search bar and click "Search" to get results from the iTunes API.
- Click "Add to Favorites" on any search result to add it to your favorites list.
- Navigate to the "Favorites" page to view your favorite items.
