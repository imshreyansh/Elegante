const { addCategory,editCategory,deleteCategory,getAllCategory } = require('../controller/category')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/addCategory', addCategory)

    router.post('/editCategory/:id', editCategory)

    router.post('/deleteCategory/:id', deleteCategory)

    router.get('/getAllCategory', getAllCategory)


    app.use('/api/category/', router);

}