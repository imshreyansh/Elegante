const { addStock,editStock,deleteStock,getAllStocks } = require('../controller/stock')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/addStock', addStock)

    router.post('/editStock/:id', editStock)

    router.post('/deleteStock/:id', deleteStock)

    router.get('/getAllStocks', getAllStocks)

    app.use('/api/stock/', router);

}