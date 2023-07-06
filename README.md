# Project Title

![Commitlint](https://github.com/benjaminrae/node-ts-jest-starter/actions/workflows/commitlint.yml/badge.svg
) ![Tests](https://github.com/benjaminrae/node-ts-jest-starter/actions/workflows/test.yml/badge.svg) ![Build](https://github.com/benjaminrae/node-ts-jest-starter/actions/workflows/build.yml/badge.svg) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Write a brief description of your project and what it aims to achieve.

## Table of Contents

- [Project Title](#project-title)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Linting](#linting)
  - [Testing](#testing)
  - [Continuous Integration](#continuous-integration)
  - [Git Hooks](#git-hooks)
  - [Commit Guidelines](#commit-guidelines)
  - [Package Manager](#package-manager)
  - [Contributing](#contributing)
  - [License](#license)
  - [Available Scripts](#available-scripts)
    - [`pnpm start`](#pnpm-start)
    - [`pnpm start:dev`](#pnpm-startdev)
    - [`pnpm test`](#pnpm-test)
    - [`pnpm test:coverage`](#pnpm-testcoverage)
    - [`pnpm test:dev`](#pnpm-testdev)
    - [`pnpm build`](#pnpm-build)
    - [`pnpm build:dev`](#pnpm-builddev)
    - [`pnpm clean`](#pnpm-clean)
    - [`pnpm rebuild`](#pnpm-rebuild)
    - [`pnpm prettier`](#pnpm-prettier)
    - [`pnpm prettier:check`](#pnpm-prettiercheck)
    - [`pnpm prettier:fix`](#pnpm-prettierfix)

## Getting Started

To use this project/template, follow the steps below:

Update the name and description in `package.json` and `README.md` to match your project.

Clone the repository to your local machine:

```bash
git clone https://github.com/benjaminrae/node-ts-jest-starter.git
```

Alternatively, you can click on the **Use this template** button to create a new repository using this template.

Navigate to the project directory:

```bash
cd your-repo
```

Install the dependencies using pnpm:

```bash
pnpm install
```

Customize the project according to your needs. Update the source code, configuration files, and other relevant files to match your requirements.

Start the development server:

```bash
pnpm start:dev
```

This command will run the application in development mode using Nodemon, allowing the server to automatically restart whenever changes are detected.

Write tests for your application and place them in the appropriate directories.

Run tests using the following command:

```bash
pnpm test
```

This command will execute the test runner (**Jest**) and display the test results.

Customize the linting rules and configurations as per your project requirements. Run the linting scripts to ensure code quality and consistency:

```bash
pnpm lint
```

This command will execute **ESLint**, **Prettier**, and **Markdownlint** scripts to check the code and documentation for linting errors.

Customize the provided CI workflows according to your needs. Configure the commitlint, build and test workflows, and add or modify other workflows as required.

When you're ready to commit your changes, use the following command to create a commit using Commitizen:

```bash
pnpm commit
```

This command will launch the **Commitizen** CLI, guiding you through the commit message creation process and ensuring a consistent commit message format.

Push your changes to the remote repository:

```bash
git push origin main
```

## Linting

This template includes linting tools to maintain code quality and consistency:

- **ESLint**: Lints **JavaScript** and **TypeScript** files.
- **Prettier**: Enforces code formatting rules.
- **Markdownlint**: Checks Markdown (*.md`) files for linting errors.

Feel free to customize the linting rules or configurations in `.eslintrc.cjs`, `.editorconfig`, `.prettierrc.json` and `.markdownlint.json` as per your project requirements.

See: [ESLint](https://eslint.org/) |
[Editor Config](https://editorconfig.org/) |
[Prettier](https://prettier.io/) |
[Markdownlint](https://github.com/DavidAnson/markdownlint)

## Testing

Your template uses **Jest** as the test runner.

Once you have written your first test, it's advisable to remove the `--passWithNoTests` flag from the `test` scripts in `package.json`.

Customize the testing setup in `jest.config.cjs` and write your tests according to your project needs.

See: [Jest](https://jestjs.io/)

## Continuous Integration

Your template comes with 4 CI workflows that can be configured:

- Commitlint: Checks commit messages against defined rules in `commitlint.config.cjs`. Commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
- Build: Builds the project.
- Test: Executes tests.
- Audit: Linting and similar jobs.

Feel free to configure these workflows as needed or add additional workflows based on your project requirements.

## Git Hooks

Your template uses Husky to set up the following Git hooks:

- Pre-commit: Executes **lint-staged** and other checks before allowing commits.
- Commit-msg: Validates commit messages using **Commitlint**.
- Pre-push: Checks branch name and runs testing. Update the allowed branch names in `.husky/pre-push` as needed.
- Post-merge: Installs dependencies if there are changes in `pnpm-lock.yaml`.

Feel free to customize the Git hooks based on your project requirements.

If using a Mac, you may need to give the hooks executable permissions using the steps [here.](https://typicode.github.io/husky/troubleshooting.html#hooks-not-running)

See: [Husky](https://typicode.github.io/husky/#/) | [lint-staged](https://github.com/okonet/lint-staged) | [Commitlint](https://commitlint.js.org/#/)

## Commit Guidelines

The template uses **Commitizen** to enforce a consistent commit message format. Use the following script to create commits:

- `pnpm commit`: Launches the Commitizen CLI to guide you through the commit message creation process.

Ensure that you follow the commit guidelines and maintain a clean commit history.

See: [Commitizen](
  <https://commitizen-tools.github.io/commitizen/>) | [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) | [Commitlint](https://commitlint.js.org/#/)

## Package Manager

The template uses `pnpm` as the package manager. Make sure you have `pnpm` installed globally or use it with `npx` when running the scripts.

See: [pnpm](https://pnpm.io/)

## Contributing

Explain how others can contribute to your project/template. You can include guidelines for submitting bug reports, feature requests, or pull requests. It's also helpful to mention the coding standards or guidelines you expect contributors to follow. Check out [Contributor Covenant](https://www.contributor-covenant.org/) for help creating a code of conduct for your project.

## License

Mention the license under which your project/template is released. If you're unsure about which license to choose, you can visit [choosealicense.com](https://choosealicense.com/) for guidance. Make sure to include any additional terms or conditions specific to your project.

## Available Scripts

In the project directory, you can run the following scripts:

### `pnpm start`

Runs the application in production mode. It starts the Node.js server.

### `pnpm start:dev`

Runs the application in development mode using Nodemon. Nodemon automatically restarts the server whenever changes are detected, making the development process more efficient.

### `pnpm test`

Launches the test runner (Jest) to execute the tests. By default, it only shows test results for files that have changed since the last commit.

### `pnpm test:coverage`

Generates test coverage reports using Jest. It provides detailed information about the code coverage of your tests.

### `pnpm test:dev`

Runs the test runner in watch mode. It re-runs the tests whenever changes are detected, making it convenient for continuous testing during development.

### `pnpm build`

Builds the TypeScript code into JavaScript, generating the compiled files in the `dist` directory.

### `pnpm build:dev`

Builds the TypeScript code into JavaScript in watch mode. It automatically recompiles the code whenever changes are made.

### `pnpm clean`

Deletes the `dist` directory, removing the previously built files.

### `pnpm rebuild`

Combines the `clean` and `build` commands. It removes the `dist` directory and then builds the TypeScript code into JavaScript.

### `pnpm prettier`

Formats the JavaScript, TypeScript, JSON, Markdown, and other supported files using Prettier.

### `pnpm prettier:check`

Checks if the files need to be formatted according to Prettier's rules. It lists the files that differ from the expected formatting.

### `pnpm prettier:fix`

Formats the files according to Prettier's rules and automatically fixes any formatting issues.
