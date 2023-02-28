function getOTP(){
   const numbers = '1234567890';
   var OTP = ''
   for(i = 0 ; i < 4 ; i++){
    OTP += numbers[Math.floor(Math.random()*10)]
   }
   document.getElementById('otp').value = OTP
}