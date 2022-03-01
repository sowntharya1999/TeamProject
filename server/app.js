const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const morgan = require('morgan')
const router = require('./routes/route')
const app = express()

app.use(cors())
// require("../Server/Routes/route")(app);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(morgan('dev'))

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, '/logs/access.log'), { flags: 'a' })
 
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.use(router)

// const port = process.env.port || 8080;
// const port =  8080

// app.listen( port , (err) => {
//   if(err)
// console.log('Unable to start the server!')
// else
// console.log('Server started running on : ' + port)
// })


const http = require('http').createServer(app);



const io = require('socket.io')(http, {

    cors: {

        origin: '*'

    }

});



app.get('/', (req, res) => {

    res.send('Hello world');

})



let userList = new Map();



io.on('connection', (socket) => {

    let userName = socket.handshake.query.userName;

    addUser(userName, socket.id);



    socket.broadcast.emit('user-list', [...userList.keys()]);

    socket.emit('user-list', [...userList.keys()]);
    socket.on('message', (msg) => {

      socket.broadcast.emit('message-broadcast', {message: msg, userName: userName});

  })



  socket.on('disconnect', (reason) => {

      removeUser(userName, socket.id);

  })

});
function addUser(userName, id) {

  if (!userList.has(userName)) {

      userList.set(userName, new Set(id));

  } else {

      userList.get(userName).add(id);

  }

}



function removeUser(userName, id) {

  if (userList.has(userName)) {

      let userIds = userList.get(userName);

      if (userIds.size == 0) {

          userList.delete(userName);

      }

  }

}



http.listen(process.env.PORT || 8080, () => {

  console.log(`Server is running ${process.env.PORT || 8080}`);

});