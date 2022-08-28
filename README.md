# VERSION
v6.0.1

# WHAT AM I?
Jimmy Luo's personal website, as of August 28, 2022 hosted at jimm.my.

This is a Node.js web application built on the Express.js framework.

The core app logic is transpired from TypeScript into JavaScript.

The core user interaction framework is built on EJS and Materialize.

# LOCAL DEPLOYMENT INSTRUCTIONS
## .env
This project uses the npm package `dotenv` 

In the root directory, a file named `.env` can be placed to specify environmental parameters like minimum builds, ports, hostnames, keys, objects, etc.

However, this application code SHALL NOT override any environment variables already at the time the website launches on the server.

Example `.env` content (this exact example should allow the web app to build and run on your local machine):
```
NODE_ENV=development

SERVER_PORT=8080
```

## Step 1: Build Required Dependencies
If you don't already have Node.js, [install Node.js](https://nodejs.dev/en/learn/how-to-install-nodejs).

Save this Git repository on your local machine.

Open a terminal at the root of the repository.

Run the following command:
```
npm ci
```

You now have all the necessary dependencies installed for this website to run.

## Step 2: Run

You will now run this web app's `dev` script, which builds and launches the website.
```
npm run dev
```

# LIVE (PRODUCTION) DEPLOYMENT INSTRUCTIONS
Not sure. If you've gotten this far you'll probably figure it out for yourself.