
const Course = require('../modules/Course');
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
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug }).lean()
            .then(course => {
                res.render('course/show', {
                    course: course
                });
            })
            .catch(next);
    }

    //[GET] /courses/create
    create(req, res, next) {
        res.render('course/create')
    }
    //[POST] /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.video}/hqdefault.jpg?sqp=-oaymwEcCNACELwBS…`;
        const course = new Course(formData);
        course.save()
            .then(() => {
                res.redirect('/')
            })
            .catch(next);
    }


    // chinh sua va update course
    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id).lean()
            .then(course => {
                res.render('course/edit', {
                    course: course
                });
            })
            .catch(next)
    }

    //[PUT] /courses/:id  - Phương thức PUT nên dùng khi ta muốn lưu dữ liệu 
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body).lean()
            .then(() => {
                res.redirect('/me/stored/courses')
            })
            .catch(next);
    }


    //[DELETE] /courses/:id
    destroy(req, res, next){
        Course.deleteOne({_id: req.params.id})
            .then(()=>{
                res.redirect('back');
            })
            .catch(next);
    }


}

module.exports = new CoursesController();
