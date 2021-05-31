const { addCurrency,getAllCurrency,getDefaultCurrency,deleteCurrency,setDefaultCurrency } = require('../controller/currency')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/addCurrency', addCurrency)

    router.get('/getDefaultCurrency/', getDefaultCurrency)

    router.post('/deleteCurrency/:id', deleteCurrency)

    router.get('/getAllCurrency', getAllCurrency)

    router.post('/setDefaultCurrency/:id', setDefaultCurrency)


    app.use('/api/currency/', router);

}