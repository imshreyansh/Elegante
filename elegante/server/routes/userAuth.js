const { createUser,loginUser } = require('../controller/userAuth')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/createUser', createUser)

    router.post('/loginUser', loginUser)

    app.use('/api/userAuth/', router);

}