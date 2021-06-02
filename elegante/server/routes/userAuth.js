const { createUser,loginUser,updateUser } = require('../controller/userAuth')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/createUser', createUser)

    router.post('/loginUser', loginUser)

    router.post('/updateUser/:id',updateUser)

    app.use('/api/userAuth/', router);

}