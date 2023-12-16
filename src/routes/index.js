const newsRoute = require('./news'); //Require tương đương với việc import
const siteRoute = require('./site');
const meRoute = require('./me')
const coursesRoute = require('./courses');

function route(app) {
    //Routing me
    app.use('/me', meRoute);
    //Routing courses
    app.use('/courses', coursesRoute);
    // Routing news
    app.use('/news', newsRoute);
    // Routing home, search
    app.use('/', siteRoute);
}

module.exports = route;
