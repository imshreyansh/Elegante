const { addStock,editStock,deleteStock,getAllStocks,getStockByCategory,getStockById } = require('../controller/stock')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/addStock', addStock)

    router.post('/editStock/:id', editStock)

    router.post('/deleteStock/:id', deleteStock)

    router.get('/getAllStocks', getAllStocks)

    router.get('/getStockByCategory/:id', getStockByCategory)

    router.get('/getStockById/:id', getStockById)


    app.use('/api/stock/', router);

}