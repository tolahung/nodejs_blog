const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const { log } = require('console');
const app = express();
const port = 3000;
const routes = require('./routes/index');
const db = require('./config/db');
const methodOverride = require('method-override')

//Connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a,b) => a+b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));
app.use(express.urlencoded());
app.use(express.json());

app.use(methodOverride('_method'))

//Route 
routes(app);

app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
});
