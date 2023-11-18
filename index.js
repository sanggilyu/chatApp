const {createServer} = require('http');
const app = require('./app');
const {Server} = require('socket.io');
require('dotenv').config();

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ['GET', 'POST']
    }
});

require("./utils/io")(io);
httpServer.listen(process.env.Port, () => {
    console.log(`Server running on port ${process.env.Port}`);
});