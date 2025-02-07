# [jimm.my](https://jimm.my/)
[![Azure Deploy (PROD.main)](https://github.com/jimmy-zhening-luo/jimmy/actions/workflows/PROD.main.yml/badge.svg)](https://github.com/jimmy-zhening-luo/jimmy/actions/workflows/PROD.main.yml)

## What am I?
This repository contains Jimmy Luo's personal website. As of August 31, 2022, the `main` branch of this repository is continuously deployed to [jimm.my](https://jimm.my/).

<details>
<summary>Dev Tools</summary>

This is a static web app built on [Node.js](https://nodejs.org/en/) using [SvelteKit](https://kit.svelte.dev), a helper that bundles [Svelte](https://svelte.dev/) and [Vite](https://vitejs.dev).

- __[Svelte](https://svelte.dev/)__ enables concise, descriptive, and modular syntax for site content, routing, style, and logic.
- __[Vite](https://vitejs.dev)__ provides a self-contained, minimal-config test and build environment, capable of adapting Svelte code into a compact servable static bundle.

The source is written in [TypeScript](https://typescriptlang.org/) and Svelte.
| Key          | Value                                                |
| ------------ | ---------------------------------------------------- |
| OS           | Windows 11                                           |
| Architecture | amd64                                                |
| IDE          | [Visual Studio Code](https://code.visualstudio.com/) |
| Dependencies | See `package.json`                                   |
</details><br/>

<details>
<summary>Deployment Infra</summary>

The source contained in this repository's `main` branch is continuously built and deployed to an [Azure Static Web App](https://azure.microsoft.com/en-us/products/app-service/static) instance using [GitHub Actions](https://github.com/features/actions).
| Key                    | Value                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------------- |
| Cloud Service Provider | Microsoft Azure                                                                                          |
| Cloud App              | [Azure Static Web App](https://azure.microsoft.com/en-us/products/app-service/static)                             |
| CI/CD Connector        | [GitHub Actions](https://github.com/features/actions) |
</details><br/>

## Build, test, and deploy this app

### Local testing
<details>
<summary>Step 1: Prepare your development environment.</summary>

1. If you don't already have Node.js, [install Node.js](https://nodejs.org).

1. Save this Git repository on your local machine.

1. Open a terminal at the root of the repository.

1. Run the following command to install all the required Node.js packages (specified in your project root directory by package.json):

   ```bash
   npm ci
   ```

You now have:

- ... all the necessary project files downloaded to your local directory.
- ... all the necessary dependencies installed to locally build and deploy (test) this web app.

</details><br/>

<details>
<summary>Step 2: Build and locally preview the web app.</summary>

You can now preview what the website will look like once built and deployed, by running the following command:

```bash
npm start
```

If you make changes to the site code, you need to run `npm start` again.
</details><br/>

### Deploying to production
<details>
<summary>TBD</summary>

TBD some point in the future.
</details>
