# Rodac Consultores - Website

This is the official corporate website for Rodac Consultores, a tax and legal advisory firm. The project is built with React and Vite.

## Branding Guidelines

The project follows the official brandbook of Rodac Consultores.

### Colors

- **Primary Green**: `#2C3A23`
- **Black**: `#111111`
- **Dark Gray**: `#444444`
- **Medium Gray**: `#BDBDBD`
- **Light Gray**: `#F5F5F5`
- **White**: `#FFFFFF`

All colors are defined as CSS variables in `src/App.css`.

### Typography

- **Headings**: `Avenir Next` (with `Arial` as a fallback)
- **Body Text**: `Arial`

### Logo

The official logo is located at `/public/logo-rodac.svg`.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository.
2. Navigate to the project directory: `cd rod-consultoria`
3. Install dependencies: `npm install`

### Environment Variables

For the AI Consultant feature, you need to set up a Gemini API key:

1. Create a `.env` file in the root directory
2. Add your Gemini API key:
```
REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
```
3. Get your API key from: https://makersuite.google.com/app/apikey

### Running the Development Server

To run the app in development mode, use:
```sh
npm run dev
```
The application will be available at `http://localhost:5173`.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the code.
- `npm run preview`: Serves the production build locally.
