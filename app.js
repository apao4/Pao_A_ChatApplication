var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const port = process.env.PORT || 3030; //if you are running multiple files or ports at once, you can just change this number and itll work 

// tlel express where our static files are (js, images, css etc)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html'); //__dirname is two underscores
});

http.listen(port, () => { //http bc its the server object we created 
    console.log(`app is running on port ${port}`)
});