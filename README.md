# PokeStart

A demonstration application showcasing the powerful combination of SolidStart (frontend) and Go (backend) for lightning-fast full-stack performance.

## 🌟 Overview

PokeStart is a demo application built to showcase how SolidStart can be effectively integrated with a Go backend to create high-performance web applications. The combination leverages SolidStart's reactivity model for the frontend and Go's exceptional speed for backend operations, creating an extremely efficient tech stack.

## 🚀 Live Demo

- **Frontend**: [https://pokestart.macrotech.dev/](https://pokestart.macrotech.dev/)
- **Backend**: [https://pockemeonserver.macrotech.dev](https://pockemeonserver.macrotech.dev)

> ⚠️ **Important**: The application is hosted on Render's free tier, which spins down after periods of inactivity. Please visit the backend URL first to wake up the server before using the frontend application.

## ✨ Key Features

- **SolidStart Frontend**: Utilizes SolidStart's fine-grained reactivity for optimized UI rendering
- **Go Backend**: Implements a high-performance API server using Go
- **Docker Integration**: Containerized deployment for consistency across environments
- **Full-Stack Performance**: Demonstrates the speed benefits of this powerful tech combination

## 🛠️ Tech Stack

### Frontend

- SolidStart (SolidJS framework)
- Tailwind CSS for styling

### Backend

- Go (Golang)
- Gin web framework
- Docker containerization

## 🏗️ Architecture

The application follows a clean separation between frontend and backend:

1. The SolidStart frontend communicates with the Go backend via RESTful API calls
2. The Go backend processes requests efficiently and returns data in JSON format
3. Docker containers ensure consistent deployment across environments

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- Go (v1.18+)
- Docker and Docker Compose

### Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/pokestart.git
   cd pokestart
   ```

2. Start the backend:

   ```bash
   cd backend
   go mod download
   go run main.go
   ```

   > The backend server will be running at http://localhost:8080

3. In a new terminal, start the frontend:

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. Visit `http://localhost:3000` in your browser

## 🌐 Deployment

The application is deployed on Render's free tier:

1. Backend: Deployed as a Docker container
2. Frontend: Deployed from the SolidStart build output

## ⚡ Performance Considerations

This demo showcases exceptional performance through:

- SolidStart's fine-grained reactivity model that minimizes DOM operations
- Go's efficient request handling and concurrent processing
- Docker's optimized deployment configuration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Built with 💻 as a demonstration of modern web development techniques
