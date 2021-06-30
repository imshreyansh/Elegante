const { createUser,loginUser,updateUser,updatePassword } = require('../controller/userAuth')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/createUser', createUser)

    router.post('/loginUser', loginUser)

    router.post('/updateUser/:id',updateUser)

    router.post('/updatePassword',updatePassword)

    app.use('/api/userAuth/', router);

}