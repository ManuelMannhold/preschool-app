# KinderApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Jenkins CI

This repository includes a declarative `Jenkinsfile` at the repository root.

- **What it does:** Runs inside a Node Docker agent, installs dependencies, runs tests, builds the Angular app, and archives the `dist/` artifacts.
- **How to use:** Create a Jenkins Pipeline job and point it at this repository. The pipeline uses the `node:18-bullseye-slim` image by default.
- **Notes:** The pipeline runs `npm ci || npm install`, `npm test -- --watch=false`, and `npm run build -- --configuration production`. Adjust stages or the Docker image in `Jenkinsfile` to match your Jenkins environment.

