require('dotenv').config();

const server = require('./api/server');

const port = process.env.PORT || 4290;

server.listen(port, () => console.log(`get snacks on port ${port}`));
