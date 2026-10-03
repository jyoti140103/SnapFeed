# SnapFeed

SnapFeed is a simple full-stack photo sharing app. Users upload an image with a caption, and every post shows up in a shared feed.

## Features

- Create a post with an image and a caption
- View all posts in a feed
- Images are stored on ImageKit and post data in MongoDB
- Responsive layout for desktop and mobile

## Tech Stack

**Frontend:** React, Vite, React Router, Axios
**Backend:** Node.js, Express, Multer, MongoDB, ImageKit

## Project Structure

```
project/
├── backend/            Express API
│   └── ...
└── frontend/           React app (Vite)
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── index.css
        └── pages/
            ├── CreatePost.jsx
            └── Feed.jsx
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- A MongoDB database (local or MongoDB Atlas)
- An ImageKit account

### 1. Clone the repository

```bash
git clone https://github.com/jyoti140103/SnapFeed.git
cd SnapFeed
```

### 2. Set up the backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder. Use the variable names your code reads; these are typical:

```
MONGODB_URI=your_mongodb_connection_string
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

Start the server:

```bash
node server.js
```

The API runs on `http://localhost:3000`.

### 3. Set up the frontend

```bash
cd frontend
npm install
npm run dev
```

The app runs on `http://localhost:5173`.

## API Endpoints

| Method | Endpoint       | Description                                      |
| ------ | -------------- | ------------------------------------------------ |
| POST   | `/create-post` | Upload a post (form-data: `image`, `caption`)    |
| GET    | `/posts`       | Get all posts as `{ message, posts: [...] }`    |

## Pages

| Route          | Page                          |
| -------------- | ----------------------------- |
| `/feed`        | Feed of all posts (home page) |
| `/create-post` | Form to create a new post     |

## Notes

- Never commit your `.env` file. It is listed in `.gitignore`.
- The backend must have CORS enabled so the frontend on port 5173 can call it.

## Author

Jyoti — [github.com/jyoti140103](https://github.com/jyoti140103)
