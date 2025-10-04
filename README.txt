makemokup
📝 Project Overview
makemokup is a simple and intuitive makeup application that allows users to virtually try on different makeup products and styles using their webcam or uploaded photos. It uses advanced facial recognition technology to map makeup onto the user's face, offering a realistic preview of various looks.
Users can:
- Experiment with different makeup styles
- Save favorite looks
- Share styles on social media
- Get personalized product recommendations based on preferences and facial features
Whether you're exploring bold transformations or subtle enhancements, makemokup makes virtual makeup fun and accessible.
🚀 Technologies Used
- React – For building dynamic user interfaces
- Vite – Fast build tool and dev server for modern web apps
- TypeScript – Adds type safety and better developer experience
⚙️ Configuration
The app is configured using Vite. Here's the vite.config.ts setup:
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: { 'process.env': {} },
});


This configuration includes the React plugin and defines an empty process.env object to prevent environment variable issues.
📦 Installation
- Clone the repository:
git clone https://github.com/Jittumandal/mockup.git
- Navigate to the project directory:
cd makemokup
- Install dependencies:
npm install
- Start the development server:
npm run dev
- Open your browser and go to:
http://localhost:5173
💄 Usage
- Launch the app in your browser
- Grant webcam access or upload a photo
- Browse and apply virtual makeup styles
- Save or share your favorite looks

