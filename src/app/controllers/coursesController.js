
const Course  = require('../modules/Course');
class CoursesController {    
    //[GET] /khoa-hoc/
    //req.params.slug để lấy ra query parameter trên url
    show(req,res,next){
        Course.findOne({slug: req.params.slug}).lean()
            .then(course => {
                res.render('courseShow',{
                    course: course  
                });
            })
            .catch(next);
    }
}

module.exports = new CoursesController();
 