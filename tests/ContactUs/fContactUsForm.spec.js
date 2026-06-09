import {test} from '../../fixture/ekart.js'
// import {test} from '../../fixture/login.js'
import contactData from '../../testdata/contactinfo.json'

test('contactus form',async({contactUsPage})=>{

    await contactUsPage.openApplication();
    await contactUsPage.clickContactUs();
    await contactUsPage.fillContactForm();
    await contactUsPage.uploadFile();
    await contactUsPage.submitForm();
    await contactUsPage.verifySuccessMessage();
   
    
}) 





