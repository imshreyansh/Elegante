const { addCategory,editCategory,deleteCategory,getAllCategory,getCategoryById } = require('../controller/category')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/addCategory', addCategory)

    router.post('/editCategory/:id', editCategory)

    router.post('/deleteCategory/:id', deleteCategory)

    router.get('/getAllCategory', getAllCategory)

    router.get('/getCategoryById/:id', getCategoryById)



    app.use('/api/category/', router);

}