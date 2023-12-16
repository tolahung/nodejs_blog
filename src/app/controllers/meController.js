
const Course  = require('../modules/Course');
class SiteController {

    //[GET] me/stored/courses
       storedCourses(req, res, next){
            Course.find({}).lean()
                .then(courses => {
                    res.render('me/stored-courses', {
                        courses: courses
                    })
                })
                .catch(next);
            
        }
}

module.exports = new SiteController();
 