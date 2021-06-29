const {purchaseCartOrder,getAllOrder,updateOrder} = require('../controller/userPurchase')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/purchaseCartOrder', purchaseCartOrder)

    router.get('/getAllOrder', getAllOrder)

    router.post('/updateOrder/:id', updateOrder)


    app.use('/api/order/', router);

}