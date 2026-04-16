# Ajentica Team Management Web Application

## 📌 Project Overview

The Ajentica Team Management Web Application is built with **Angular**, **TypeScript**, and **TailwindCSS** for the frontend, with an existing lightweight **Node + Express backend**. The app allows managing teams, members, and projects with dynamic data rendering.

## Features (In progress)

- Dashboard with summary view
- Teams management (CRUD UI ready)
- Members management (CRUD UI ready)
- Projects management (CRUD UI ready)
- Reusable card-based UI components
- Error page (404 handling)

## Project Folder Structure

├──────public/
│
│──────src/
│ ├── app/
│ │ ├── core/
│ │ │ ├── services/
│ │ │ ├── guards/
│ │ │ └── interceptors/
│ │ │
│ │ ├── shared/
│ │ │ ├── components/
│ │ │ ├── directives/
│ │ │ └── pipes/
│ │ │
│ │ ├── features/
│ │ │ ├── dashboard/
│ │ │ ├── teams/
│ │ │ ├── members/
│ │ │ └── projects/
│ │ │
│ │ ├── layout/
│ │ │ ├── header/
│ │ │ ├── sidebar/
│ │ │ └── main-layout/
│ │ │
│ │ ├── app.component.ts
│ │ ├── app.routes.ts
│ │ └── app.config.ts
│ │
│ ├── assets/
│ │ ├── images/
│ │ └── icons/
│ │
│ ├── environments/
│ │ ├── environment.ts
│ │ └── environment.prod.ts
│ │
│ ├── main.ts
│ └── styles.css
│  
│──backend-data/
│ ├── teams.json
│ ├── members.json
│ ├── projects.json
│ ├── users.json
│
│── .editorconfig
│── .gitignore
│── .postcssrc.json
│── .prettierrc
│── angular.json
│── bun.lock
│── package.json
│── tsconfig.app.json
│── tsconfig.json
│── tsconfig.spec.json

## Tech Stack

- **Frontend Framework:** Angular
- **Language:** TypeScript
- **Styling:** CSS / Tailwind CSS (as applicable)
- **Architecture:** Component-based modular structure
- **package manager:** bun

## Setup Instructions

- Prerequisits
  - git
  - angular CLI
  - bun

- Clone the repository
- Navigate into the project directory
- Change directory to `ajentica-team-management-frontend`
  ```
  cd ajentica-team-management-frontend
  ```
- Install the dependency
  ```
  bun install
  ```

## Build Run Instuctions

- Run build command for dev:
  ```
  ng build
  ```
- Run build command for production:

  ```
  ng build --configuration production

  ```

- Start the development server:
  ```
  bun run dev
  ```
- Open the application in browser:

Runs on http://localhost:4200/
