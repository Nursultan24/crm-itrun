# IT-RUN CRM

IT-RUN CRM is a customer relationship management system designed for IT companies to manage their customer interactions, leads, and sales processes. This README provides an overview of the project structure and dependencies used in the CRM system.

## Dependencies

IT-RUN CRM utilizes the following dependencies:

- **@reduxjs/toolkit**: A package that provides a set of utilities for managing state in Redux applications.
- **react**: A JavaScript library for building user interfaces.
- **react-dom**: The entry point for React on the web, responsible for rendering React components.
- **react-router-dom**: A routing library for React applications that provides declarative routing.
- **typescript**: A typed superset of JavaScript that compiles to plain JavaScript.

## Getting Started

To get started with IT-RUN CRM, follow these steps:

1. Clone the repository: `git clone https://github.com/bek77g/crm-itrun.git`.
2. Change into the project directory: `cd crm-itrun`.
3. Install the dependencies: `npm install`.
4. Start the development server: `npm start`.

## Project Structure

The project structure of IT-RUN CRM is as follows:

- **public**: This directory contains the public assets of the application, such as HTML files.
- **src**: This directory contains the source code of the CRM system.
  - **components**: This directory contains reusable React components used throughout the application.
  - **pages**: This directory contains the main pages of the CRM system.
  - **redux**: This directory contains Redux-related code, including reducers, actions, and store configuration.
  - **services**: This directory contains services responsible for interacting with external APIs or data sources.
  - **styles**: This directory contains CSS or styling-related files.
  - **utils**: This directory contains utility functions or helper classes.
  - **App.tsx**: The main entry point of the application.
  - **index.tsx**: The file responsible for rendering the root component and mounting it into the DOM.
- **package.json**: The file that contains metadata and dependencies for the project.
- **tsconfig.json**: The TypeScript configuration file for the project.
- **.eslintrc**: The ESLint configuration file for linting the code.
- **.prettierrc**: The Prettier configuration file for code formatting.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm start`: Runs the app in the development mode.
- `npm build`: Builds the app for production.

## Additional Information

IT-RUN CRM uses Chakra UI as the UI library and RTK Query for making API requests. The project is written in TypeScript to provide better type safety and maintainability.

For more information or detailed documentation, please refer to the relevant files and code within the project repository.

If you have any questions or need further assistance, please contact the IT-RUN CRM support team.

---

**Note:** Make sure to replace "your-username" in the repository URL with your actual GitHub username when cloning the repository.
