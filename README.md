# Sky Node-React Project

This project is a full-stack web application built using **Node.js** for the backend and **React** for the frontend.

## Project Overview
This is a simple full-stack application designed to demonstrate the integration of **Node.js** and **React**. It includes features like authentication, user management, and CRUD functionality, making it a great example of a full-stack development workflow.

## Technologies Used
- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React, HTML, CSS
- **Database**: MongoDB Atlas
- **Authentication**: JWT (JSON Web Token)
- **Other**: Axios (for API calls), dotenv (for managing environment variables)

## Features
- User Authentication (Login & Signup)
- CRUD operations for managing data
- JWT authentication for secure API access
- Responsive user interface built with React
- Environment variables for configuration

## Installation

1. **Clone the repository**:

```bash
git clone https://github.com/krishnashukla1/sky-node-react-project.git
Navigate to the project directory:
cd sky-node-react-project

Install backend dependencies:
cd backend
npm install

Install frontend dependencies:
cd frontend
npm install

Set up environment variables:
Create a .env file in the backend directory.

Add the following variables to .env:
MONGO_URI=mongodb+srv://your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
===========================
Usage
Start the backend:
cd backend
npm start

Start the frontend:
cd frontend
npm start

The backend should now be running on http://localhost:5000, and the frontend on http://localhost:3000.

Environment Variables
The following environment variables are required for the project:

MONGO_URI: MongoDB Atlas connection string
JWT_SECRET: Secret key for JWT authentication
PORT: Port for the server to run (default is 5000)

### Steps to Customize:

1. **Replace Placeholder Values**: Make sure to replace `your_mongo_connection_string` and `your_jwt_secret_key` with your actual MongoDB URI and JWT secret key.
   
2. **Add Additional Features**: If your project has more specific functionality or extra features, you can add them under the "Features" section.

3. **Project Setup**: If there are any specific instructions for setting up or running your project, you can modify the "Installation" and "Usage" sections accordingly.

Feel free to adjust this as per your project’s specific requirements!
