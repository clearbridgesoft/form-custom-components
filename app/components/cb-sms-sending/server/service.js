var axios = require('axios');

//--------------------------------------------------------------------------------
// Settings
//--------------------------------------------------------------------------------
var SmsSettings = {}

//--------------------------------------------------------------------------------
// Main Service
//--------------------------------------------------------------------------------
const SmsService = {}

SmsService['SmsSendingService.send'] = (content, dest) => {
  var rest = `${SmsSettings.SMS_PROVIDER}?username=${SmsSettings.SMS_USERNAME}&password=${SmsSettings.SMS_PASSWORD}&mobilenumber=${dest}&message=${content}&sender=0419357357&messagetype=Text&referencenumber=321`
  axios.get(rest).then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
}

module.exports = {
  SmsSettings,
  SmsService
}