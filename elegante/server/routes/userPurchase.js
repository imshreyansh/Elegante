const {purchaseCartOrder,getAllOrder} = require('../controller/userPurchase')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/purchaseCartOrder', purchaseCartOrder)

    router.get('/getAllOrder', getAllOrder)


    app.use('/api/order/', router);

}