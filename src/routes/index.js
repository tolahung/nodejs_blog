const newsRoute = require('./news'); //Require tương đương với việc import
const siteRoute = require('./site');
const coursesRoute = require('./courses');

function route(app) {
    //Routing courses
    app.use('/courses', coursesRoute);
    // Routing news
    app.use('/news', newsRoute);
    // Routing home, search
    app.use('/', siteRoute);
}

module.exports = route;
