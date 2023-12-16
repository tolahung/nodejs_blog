
const Course  = require('../modules/Course');
class CoursesController {    
    // //[GET] /courses
    // index(req, res, next){
    //     Course.find({}).lean()
    //         .then(courses => res.render('home',{
    //             courses: courses
    //         }))
    //         .catch(next);
    // }

    //[GET] /course/
    //req.params.slug để lấy ra query parameter trên url
    show(req,res,next){
        Course.findOne({slug: req.params.slug}).lean()
            .then(course => {
                res.render('course/show',{
                    course: course  
                });
            })
            .catch(next);
    }

    //[GET] /courses/create
    create(req,res,next){
        res.render('course/create')
    }
    //[POST] /courses/store
    store(req,res,next){
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.video}/hqdefault.jpg?sqp=-oaymwEcCNACELwBS…`;
        const course = new Course(formData);
        course.save()
            .then(()=>{
                res.redirect('/')
            })
            .catch(next);
    }
}

module.exports = new CoursesController();
 