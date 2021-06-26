const {purchaseCartOrder} = require('../controller/userPurchase')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/purchaseCartOrder', purchaseCartOrder)


    app.use('/api/order/', router);

}