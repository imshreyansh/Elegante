const {addTax,getAllTax,updateTax,getActiveTax} = require('../controller/tax')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/addTax', addTax)

    router.get(`/getAllTax`,getAllTax)
    
    router.get(`/getActiveTax`,getActiveTax)

    router.post('/updateTax/:id',updateTax)

    app.use('/api/tax/', router);

}