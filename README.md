# jimm.my

v8.1.0

<br/>

## What am I?

This repository contains Jimmy Luo's personal website. As of August 31, 2022, the `main` branch of this repository is continuously deployed to [jimm.my](https://jimm.my/).

<br/>

<details><summary>Dev Tools</summary>

This is a web app with a server built on [Express](https://expressjs.com/) [Node.js](https://nodejs.org/en/) and a presentation layer built on [Svelte](https://svelte.dev/) templating and handrolled styles. The source is written in [TypeScript](https://typescriptlang.org/).

| Key          | Value                                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Platform     | Windows 11                                                                                                                                        |
| Architecture | amd64                                                                                                                                             |
| IDE          | [Visual Studio Code](https://code.visualstudio.com/)                                                                                              |
| Dependencies | See `package.json` |

</details>

<br/>

<details><summary>Deployment Infra</summary>

The source contained in this repository's `main` branch is continuously built and deployed to an [Azure Web App](https://azure.microsoft.com/en-us/services/app-service/web/) instance using [GitHub Actions](https://docs.microsoft.com/en-us/azure/app-service/deploy-github-actions?tabs=applevel).

| Key                    | Value                                                                                                          |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- |
| Cloud Service Provider | Microsft Azure                                                                                                 |
| Cloud App              | [Azure Web App](https://azure.microsoft.com/en-us/services/app-service/web/) |
| CI/CD Connector        | [GitHub Actions](https://docs.microsoft.com/en-us/azure/app-service/deploy-github-actions?tabs=applevel)      |

</details>

<br/>
<br/>
<br/>

## Build, test, and deploy this app

### Local testing

<br/>

<details><summary>Step 1: Prepare your development environment.</summary>

1. If you don't already have Node.js, [install Node.js](https://nodejs.dev/en/learn/how-to-install-nodejs).

2. Save this Git repository on your local machine.

3. Open a terminal at the root of the repository.

4. Run the following command to install all the required Node.js packages (specified in your project root directory by package.json:

        ```powershell
        npm ci
        ```

You now have:

- ... all the necessary project files downloaded to your local directory.
- ... all the necessary dependencies installed to locally build and deploy (test) this web app.

</details>

<br/>

<details><summary>Step 2: Build and run the web app.</summary>

You can now run this web app's `dev` script, which prepares a local build of the web app, deploys it on your local host machine, and opens a browser to the local host so you can preview the app. It also continuously rebuilds when any changes are detected.

        ```powershell
        npm run dev
        ```

</details>

<br/>
<br/>

### Deploying to production

<details><summary>TBD</summary>

<br/>

Placeholder for deployment instructions once on a stable minor build with continuously deplying commits.

</details>
