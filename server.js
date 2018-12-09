const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const items = require('./routes/api/items')

const app = express()

// Bodyparser Middleware
app.use(bodyParser.json())

// // db config
// const db = require('./config/keys').mongoURI
// 
// // connect to mongo
// mongoose.connect(db)
//   .then(() => console.log('mongodb connected'))
//   .catch(err => console.log(err))
  
// atlas db
mongoose.connect(
  'mongodb+srv://tigeradmin:'
      + process.env.MONGO_ATLAS_PW
      + '@tigernodesandreact-4kfsd.mongodb.net/', {
    dbName: 'tigernodesandreact',
    useNewUrlParser: true
  }
)
.then(() => console.log('mongodb connected'))
.catch(err => console.log(err))

mongoose.Promise = global.Promise;

// use routes
app.use('/api/items', items)

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'tiger-client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server on ${port}`))
