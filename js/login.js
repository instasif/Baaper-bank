//step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step-2: get the email address inside the email input field 
    /*always remember to use (.value) to get text from an input field */
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
     //step-3: get the password inside the password input field
    /**
     * 1. set id on the html element
     * 2. get the element
     * 3.gt the value from the element
     */
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    //step4: verify email and password
    //DANGER: DO NOT VERIFY EMAIL, PASSWORD ON THE CLINT SIDE
    if(email === 'asif@gmail.com' && password === '12345'){
        window.location.href = 'bank-inside.html'
    }
    else{
        alert('Go to hell!')
    }

})