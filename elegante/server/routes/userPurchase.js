const {purchaseCartOrder,getAllOrder,updateOrder,getOrderByUserId} = require('../controller/userPurchase')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/purchaseCartOrder', purchaseCartOrder)

    router.get('/getAllOrder', getAllOrder)

    router.post('/updateOrder/:id', updateOrder)

    router.get('/getOrderByUserId/:id', getOrderByUserId)



    app.use('/api/order/', router);

}