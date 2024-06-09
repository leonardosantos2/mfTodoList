# microfrontend-todolist

## Description

This is a simple project to demonstrate how to implement a microfroentend architecture using React and Webpack Module Federation Plugin.
The repository is composed by two projects:

- `container`: The core application that will run a microfroent;
- `todolist`: The microfrontend that will be loaded by the container.

## Running Project

To properly run the whole application, you'll need to:
A. Be using Node v20 and NPM v10;
B. run both `container` and `todolist` projects;

To run both applications, follow the steps below:

1. In another terminal, navigate to the `todolist` folder and run the following commands:

```
npm ci
npm run dev
```

2. In a terminal, navigate to the `container` folder and run the following commands:

```
npm ci
npm run dev
```

P.S.: The `container` and `todolist` project are running on port 3030 and 3031. This way, make sure you have them available.
P.S.2: The `todolist` project can be developed/tested separately by running the step 1 above.

## Running Tests
