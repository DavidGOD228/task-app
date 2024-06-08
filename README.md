## Overview

This project is a Next.js application that leverages the app-router feature introduced in Next.js 13+. The application features a multi-page setup with functionality for displaying and adding elements, such as cards or a to-do list. The UI components are built using Chakra UI. Open


## Url

https://task-app-black-eight.vercel.app/

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Technologies Used

- **Next.js 13+**: Utilizes the app-router for navigation.
- **Zustand**: Manages state across the application, particularly user authentication status.
- **React-Hook-Form**: Manages form state and validation in conjunction with Zod.
- **Zod**: Provides schema validation for form data.
- **Chakra UI**: Used for styling and structuring the UI components.
- **Jest**: Used for running unit tests to ensure code functionality.
- **React Testing Library**: Assists in testing React components in a way that mimics actual user interaction.

## Recommendation: Consider an Alternative UI Library

It's recommended to consider using an alternative UI library instead of Chakra UI for this project, due to Chakra UI's limited support for server-side rendering. Server-side rendering is crucial for performance and SEO benefits in Next.js applications. Libraries like **Material-UI** or **Ant Design** offer robust support for server-side rendering and might be better suited for projects that leverage Next.js's capabilities.
