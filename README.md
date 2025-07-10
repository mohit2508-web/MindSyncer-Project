# MindSyncer-Project
This is my first full stack project that is very helpfull for college Students to find there partner for events
another commit



Find your perfect temmate -> coder,designer or innovstor-in seconds




# Initialize Node.js project

cd MindSyncer_Server
npm init -y

# Core dependencies
npm install express mongoose dotenv cors helmet morgan
npm install bcryptjs jsonwebtoken cookie-parser
npm install multer cloudinary express-rate-limit

# Development dependencies
npm install -D nodemon concurrently



# Create all necessary folders
mkdir src
mkdir src/controllers
mkdir src/models
mkdir src/routes
mkdir src/middleware
mkdir src/utils
mkdir src/config
mkdir public
mkdir public/temp



# Folder Structure


backend/
├── src/
│   ├── controllers/
│   │   ├── user.controller.js
│   │   ├── auth.controller.js
│   │   └── profile.controller.js
│   ├── models/
│   │   ├── user.model.js
│   │   └── profile.model.js
│   ├── routes/
│   │   ├── user.routes.js
│   │   ├── auth.routes.js
│   │   └── profile.routes.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   ├── multer.middleware.js
│   │   └── error.middleware.js
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   ├── asyncHandler.js
│   │   └── cloudinary.js
│   ├── config/
│   │   └── database.js
│   └── app.js
├── public/
│   └── temp/
├── .env
├── .gitignore
├── package.json
└── server.js          