# jimm.my

<details><summary>Version</summary>

<br/>

v7.0.1

</details>

<br/>
<br/>

## What am I?

Jimmy Luo's personal website, as of August 28, 2022 hosted at [jimm.my](https://jimm.my/).

This is a [Node.js](https://nodejs.org/en/) static web app built on [Svelte](https://svelte.dev/).

<br/>

<details><summary>Development Platform</summary>

<br/>

| Key          | Value                                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Platform     | Windows 11                                                                                                                                        |
| Architecture | amd64                                                                                                                                             |
| IDE          | [Visual Studio Code](https://code.visualstudio.com/)                                                                                              |
| Dependencies | [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode); [svelte-kit v1.0.0](https://kit.svelte.dev/docs/) |

</details>

<br/>

<details><summary>Deployment Platform</summary>

<br/>

| Key                    | Value                                                                                                          |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- |
| Cloud Service Provider | Microsft Azure                                                                                                 |
| Cloud App              | [Azure Static Web App](https://docs.microsoft.com/en-us/learn/modules/publish-app-service-static-web-app-api/) |
| CI-CD Connector        | GitHub Actions                                                                                                 |

</details>

<br/>
<br/>
<br/>

## Build, test, and deploy this app

### Local testing

<details><summary>Step 1: Prepare your development environment.</summary>

<br/>

1. If you don't already have Node.js, [install Node.js](https://nodejs.dev/en/learn/how-to-install-nodejs).

2. Save this Git repository on your local machine.

3. Open a terminal at the root of the repository.

4. Run the following command:

        ```powershell
        npm ci
        ```

You now have:

- ... all the necessary project files downloaded to your local directory.
- ... all the necessary dependencies installed to locally build and deploy (test) this web app.

</details>

<br/>

<details><summary>Step 2: Build and run the web app.</summary>

1. You can now run this web app's `dev` script, which prepares a local build of the web app, deploys it on your local host machine, and finally outputs a link that you can click to view the web app in your default browser:

        ```powershell
        npm run dev
        ```

2. After running the above command, you can click the resulting output link.

</details>

<br/>
<br/>

### Deploying to production

TBD at some point after the minimum deployable version is checked in to this repository.
