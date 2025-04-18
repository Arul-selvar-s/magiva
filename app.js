const form = document.querySelector('#form')
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const msg = document.querySelector('#msg');

form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const firstnameVal = firstname.value.trim()
    const lastnameVal = lastname.value.trim()
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const msgVal = msg.value.trim();
    let success = true

    if(firstnameVal===''){
        success=false;
        setError(firstname,'First name is required')
    }
    else{
        setSuccess(firstname)
    }

    if(lastnameVal===''){
        success=false;
        setError(lastname,'Last name is required')
    }
    else{
        setSuccess(lastname)
    }

    if(emailVal===''){
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false;
        setError(email,'Please enter a valid email')
    }
    else{
        setSuccess(email)
    }

    if(phoneVal === ''){
        success= false;
        setError(phone,'Contact no is required')
    }
    else if(phoneVal.length!=10){
        success = false;
        setError(phone,'Enter the full phone number')
    }
    else if(phoneVal < 6000000000){
        success = false;
        setError(phone,'Enter the correct phone number')
    }
    else{
        setSuccess(phone)
    }
    if(msg === ''){
        success = false;
        setError(msg,'Message is required')
    }
    else{
        setSuccess(msg)
    }

    return success;

}
//element - password, msg- pwd is reqd
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
