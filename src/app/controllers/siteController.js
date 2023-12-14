
const Course  = require('../modules/Course');
class SiteController {

    //[GET] /home
        index(req, res, next){
            Course.find({}).lean()
                .then(courses => res.render('home',{
                    courses: courses
                }))
                .catch(next);
        }

    
    //[GET] /news/:slug
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
 