const { addStock } = require('../controller/stock')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/addStock', addStock)

    app.use('/api/stock/', router);

}