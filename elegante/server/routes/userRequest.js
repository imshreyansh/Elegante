const {postUserRequest,getUserRequest} = require('../controller/userRequest')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/postUserRequest', postUserRequest)

    router.get(`/getUserRequest`,getUserRequest)
    

    app.use('/api/contact/', router);

}