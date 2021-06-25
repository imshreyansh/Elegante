const {addOffer,getAllOffer,updateOffer,getActiveOffer} = require('../controller/offer')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/addOffer', addOffer)

    router.get(`/getAllOffer`,getAllOffer)
    
    router.get(`/getActiveOffer`,getActiveOffer)

    router.post('/updateOffer/:id',updateOffer)

    app.use('/api/offer/', router);

}