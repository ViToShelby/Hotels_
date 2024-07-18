const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
const Menu = require('./models/menu')
const Person = require('./models/Person');
const menu = require('./models/menu');

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Real madrid christiano ronaldo');
});

   


  
  //import router files 
  const personRoutes = require('./routes/personRoutes')
  const menuRoutes = require('./routes/menuRoutes')
  app.use('/person', personRoutes)
  app.use('/menu', menuRoutes)

app.listen(3000, () => {
  console.log('listening on port 3000');
});






// require('dotenv').config()

// const express = require('express')
// const app = express()
// const port = 4000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// app.get('/twitter', (req,res)=>{
//     res.send('adarshdotcom')
// })
// app.get('/login',(req,res)=>{
//     res.send('<h1>this is my first backend </h1>')
// })
// app.get('/vito',(req,res)=>{
//    res.send('<h1> hello everyone')
// })
// app.listen(process.env.PORT, () => {
//   console.log(`Example app listening on port ${port}`)
// })