# Give & Get - Static Webpage

Welcome to the repository for the Give & Get static webpage. This project was built using [Vite](https://vitejs.dev/) and [React](https://reactjs.org/).

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Development](#development)
- [Build](#build)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contact](#contact)

## Overview

The Give & Get static webpage is designed to provide information about our company, including our mission, services, and contact information.

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

- Node.js (version 14 or later)
- npm (version 6 or later)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/FranciscoBozzo/giveget.git
   cd give-and-get
   ```

2. Install the dependencies:

```bash
npm install
```

### Development

To start the development server, run:

```bash
npm run dev
```

or

```bash
npm run host
```

This will start the Vite development server locally or accesible from the local area network. The server supports hot module replacement, so changes will be reflected immediately without needing to refresh the page.

### Build

To build the project for production, run:

```bash
npm run build
```

This will create an optimized production build in the dist folder.

### Deployment

To deploy the built project, you can serve the contents of the dist folder using any static site hosting service.

### Project Structure
```csharp
giveget/           # Static assets
├── src/
│   ├── assets/        # Images, fonts, etc.
│   ├── components/    # Reusable React components
│   ├── effects/       # Reusable React effects
│   ├── pages/         # Page components
│   ├── partials/      # Reusable Page Partials
│   ├── App.jsx        # Root component
│   ├── main.jsx       # Entry point
├── index.html         # Main HTML file
├── package.json       # Project metadata and scripts
└── vite.config.js   
```

### Technologies Used

- [Vite](https://vitejs.dev) : Next generation frontend tooling
- [React:](https://react.dev/") A JavaScript library for building user interfaces
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): Programming language of the web
- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML): Standard markup language for creating web pages
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS): Style sheet language used for describing the look and formatting of a document written in HTML