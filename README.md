##  Playwright Automation Framework – Feature Highlights

This project uses a well-structured and scalable Playwright test framework with the following key components:

### Core Setup

- **Playwright Test Runner** – Uses Playwright’s built-in test runner for easy parallel execution and reporting.
- **playwright.config.js** – Centralized configuration file for global settings like timeouts, retries, reporter setup, and projects.
- **package.json** – Manages dependencies, test scripts, and environment-specific commands.

###  Test Structure & Utilities

- **Page Object Model (POM)** – Test classes are separated from Page classes to keep test logic clean and reusable.
- **Page Factory** – Dynamically manages and returns instances of different Page Objects using a centralized factory pattern.
- **Page Utils** – Common page-level utility functions are extracted for reuse across tests.
- **Custom Fixtures** – Extends Playwright fixtures to inject custom context like page, data, and setup/teardown hooks.

### Environment Management

- **Environment-based URLs** – Maintains separate files for `dev`, `qa`, and `stage` environments.
- **cross-env** – Uses `cross-env` package to easily set environment variables in CLI commands (e.g., `--env=qa`, `--env=dev`).
- **dotenv** – Loads environment-specific configurations from `.env` files to manage API keys, URLs, or other environment-specific variables securely.
- **configLoader.js** – Dynamically loads the correct config based on the selected environment.
- **Constants File** – Stores static values like URLs, headers, or reusable strings in one place.

### Test Enhancements

- **Tag-Based Filtering** – Use tags like `@smoke` or `@regression` to run specific sets of tests using CLI filters.
- **Test Context & Hooks** – Implements Playwright’s `test.extend` to manage custom setup and teardown logic around each test.
- **Screenshots on Pass/Fail** – Takes screenshots at the end of every test and attaches them to the Playwright HTML report.
- **Video Recording on Failure** – Automatically records videos when tests fail for easier debugging.
- **Parallel Execution** – Configured for cross-browser parallel execution across Chromium, Firefox, and WebKit.

###  Test Data Management

- **Faker.js Integration** – Generates random test data like emails, names, etc., dynamically.
- **JSON-based Test Data** – Page classes consume dynamic data stored in JSON files to support test data-driven development.

###  CI/CD Integration

- **GitHub Actions** – CI/CD pipeline set up using GitHub Actions to automatically run tests on pushes and pull requests.
- **Environment Variables in CI** – The `.env` file is used to securely store credentials and environment configurations, making sure sensitive data is not exposed.

###  Utility Libraries

- **minimist** – Parses command-line arguments (such as `--env=dev`) to dynamically set environment or configuration parameters.
- **cross-env** – Ensures that environment variables are correctly set across different OS platforms (Windows, MacOS, Linux).


### Running Tests

To run tests in different environments with different browsers, you can use the following command structure:

- **Run Smoke Tests**:  

  npm run smoke --browser <browser-name> --env <env-name>  
  # Example: npm run smoke --browser chrome --env qa


- **Run Regression Tests**:
- 
  npm run regression --browser <browser-name> --env <env-name>  
  # Example: npm run regression --browser firefox --env dev


Where:
- `<browser-name>` can be `chrome`, `firefox`, or `webkit`.
- `<env-name>` can be `dev`, `qa`, or `stage`.
