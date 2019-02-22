const http = require('http');
const express = require('express');
const port = 3000;

const app = express();
app.use('/', express.static('client'));
const httpServer = http.Server(app);

httpServer.listen(port, () => {
  console.log(`listening on port ${port}`);
});
