# Monorepo Project

This project demonstrates the use of Yarn workspaces to manage a monorepo containing multiple packages, including React applications and a React Native app.

## Project Structure

The monorepo is organized as follows:

```
monorepo/
├── react/
├── react2/
├── common/
├── native-app/
└── package.json
```

- `react`: First React application
- `react2`: Second React application
- `common`: Shared code between projects
- `native-app`: React Native application

## Setup

This project uses Yarn workspaces to manage dependencies and scripts across multiple packages. To get started:

1. Ensure you have Yarn installed globally.
2. Clone this repository.
3. Run `yarn install` in the root directory to install all dependencies for all packages.

## Available Scripts

In the project root, you can run:

- `yarn start:web`: Start the development server for the first React app
- `yarn start:web2`: Start the development server for the second React app
- `yarn build`: Build the first React app
- `yarn start:native`: Start the React Native app
- `yarn start:android`: Start the React Native app on Android

## Workspace Configuration

The `package.json` in the root directory defines the workspace configuration:

```json
"workspaces": {
  "packages": [
    "react2",
    "react",
    "common",
    "native-app"
  ],
  "nohoist": [
    "**/**"
  ]
}
```

This configuration allows sharing of dependencies between packages while keeping package-specific dependencies isolated.

## No Hoisting

The `"nohoist": ["**/**"]` configuration ensures that all dependencies are installed in their respective package directories. This is particularly useful for React Native projects, which often require dependencies to be available in specific locations.

## Adding New Packages

To add a new package to the monorepo:

1. Create a new directory for your package.
2. Initialize it with a `package.json` file.
3. Add the new package to the `"packages"` array in the root `package.json`.

## Sharing Code

The `common` package can be used to share code between different packages. To use shared code:

1. Export the shared code from the `common` package.
2. Import it in other packages using the package name, e.g., `import { sharedFunction } from 'common'`.

## Note on Testing

Currently, there are no specified test scripts. To add testing:

1. Set up test frameworks in individual packages.
2. Add test scripts to each package's `package.json`.
3. Update the root `package.json` with a script to run all tests, e.g.:
   ```json
   "scripts": {
     "test": "yarn workspaces run test"
   }
   ```

This README provides an overview of the project structure and how to work with this monorepo. Feel free to modify and expand it as your project grows!
