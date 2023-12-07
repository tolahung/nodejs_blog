

const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const { log } = require('console');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname,'public')))
//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'))
console.log('PATH:', path.join(__dirname, 'resource/views'));
app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})