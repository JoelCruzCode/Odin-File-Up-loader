# Express-React: Template

A basic Express.js setup for development with a custom bootstrap loader and Vite template integration.

## Setup

### Install dependencies

First, clone the repository and install the required dependencies.

```bash
# Clone the repository
git clone <repository_url>

# Navigate into the project directory
cd Express-React-Template

# Install dependencies
npm install

Run the application

To start the development server, use the following command:

npm run dev

This command will start the server with nodemon, automatically reloading the app whenever changes are detected. The server will be available at http://localhost:3001.
Development Setup

    Express.js is set up with minimal dependencies: dotenv, express, and node.
    A custom bootstrap.mjs file has been created to register the ts-node/esm loader using Node's register method. This avoids the need to use Node's experimental --loader flag.
    The app is configured to run with TypeScript via ts-node and will automatically transpile TypeScript files.
    Vite was added as the basic starting template for front-end development.

Dependencies

    dotenv
    express
    node

DevDependencies

    @types/express
    @types/node
    ts-node
    nodemon

File Structure

├── server
│   ├── src
│   │   ├── app.ts        # Main entry file for the Express app
│   │   ├── bootstrap.mjs # Custom loader setup for development
├── client                # Front-end folder with vite template setup
├── .env                  # Environment variables
├── package.json          # Project metadata and scripts
├── tsconfig.json         # TypeScript configuration

Notes

    The app is configured to use dotenv for environment variables. Be sure to add your configuration in the .env file.
    This setup uses nodemon to watch for changes in TypeScript files and restart the app as needed.
    For front-end development, Vite was set up with a basic template to get you started quickly.
