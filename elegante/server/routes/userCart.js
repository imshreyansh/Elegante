const {addToCart,getMemberCart,removeCart} = require('../controller/userCart')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/addToCart', addToCart)

    router.get(`/getMemberCart/:id`,getMemberCart)
    
    router.post(`/removeCart/:id`,removeCart)


    app.use('/api/cart/', router);

}