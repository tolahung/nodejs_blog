const express = require('express');
const router = express.Router();
const coursesController = require('../app/controllers/coursesController');





//Ruote để tạo mới 1 khoá học 
router.get('/create', coursesController.create);
router.post('/store', coursesController.store);

// Route để sửa và update khoá học theo id
router.get('/:id/edit', coursesController.edit);
router.put('/:id', coursesController.update);

//Route để xoá 1 khoá học theo id 
router.delete('/:id', coursesController.destroy);

router.get('/:slug', coursesController.show);
// router.get('/', coursesController.index);


module.exports = router;
