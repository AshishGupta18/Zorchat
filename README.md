ZorChat - Real-Time Chat App

ZorChat is a real-time chat application built with React and Socket.io, allowing users to communicate in real-time with each other.

## Features

- Real-time chat with multiple users.
- User authentication and registration.
- Online status indication.
- Emojis and file-sharing support.
- Mobile-friendly responsive design.

## Getting Started

### Prerequisites

Before you get started, make sure you have the following software installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- npm (Node Package Manager): Usually comes with Node.js installation.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ashishgupta18/zorchat.git
cd zorchat
```

2. Install dependencies:

```bash
npm install
```

### Configuration

Create a `.env` file in the root directory and set the following environment variables:

```
REACT_APP_SOCKET_SERVER_URL=YOUR_SOCKET_SERVER_URL
REACT_APP_API_SERVER_URL=YOUR_API_SERVER_URL
```

Replace `YOUR_SOCKET_SERVER_URL` and `YOUR_API_SERVER_URL` with the appropriate URLs for your Socket.io server and API server.

### Usage

Start the development server:

```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000) by default.

### Deployment

To build the application for production:

```bash
npm run build
```

This will create an optimized production build in the `build` directory.

## Acknowledgments

- Thanks to the React and Socket.io communities for their excellent documentation and support.

Happy chatting with ZorChat!


