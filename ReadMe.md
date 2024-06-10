# microfrontend-todolist

## Description

This is a simple project to demonstrate how to implement a microfroentend architecture using React and Webpack Module Federation Plugin.
The main component here is a to-do list where users can add, remove, and mark tasks as done. The to-do list is a microfrontend that can be loaded by other applications. It is also built following the MVVM (i.e., Model, View, ViewModel) architecture.

P.S.: Due to the size of this application, an MVVM architecture is for sure an overkill. However, it was used to demonstrate how to break down components in a scalable and testable way.

The repository is composed of two projects:

- `container`: The core application that will run a microfrontend;
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

P.S.: The `container` and `todolist` projects are running on ports 3030 and 3031. This way, make sure you have them available.
P.S.2: The `todolist` project can be developed/tested separately by running step 1 above.

## Running Tests
