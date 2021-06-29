const { errorResponseHandler, successResponseHandler} = require('./handler')
const SENDGRID_API_KEY='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'
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(SENDGRID_API_KEY)


exports.sendEmail=(obj)=>{
    sgMail
    .send(obj)
    .then(() => {
        console.log('Success')
    })
    .catch((error) => {
        console.log(error)
    })
}

