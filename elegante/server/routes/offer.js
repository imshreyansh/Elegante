const {addOffer,getAllOffer} = require('../controller/offer')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/addOffer', addOffer)

    router.get(`/getAllOffer`,getAllOffer)

    app.use('/api/offer/', router);

}