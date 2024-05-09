const eamil1 = document.querySelector("#email1");
const password1 = document.querySelector("#password1");
const form = document.querySelector("#form1");

form.addEventListener("submit",(e)=>{
    if(!validation()){
        e.preventDefault();
    }
})
function validation(){
    const email1Val = email1.value.trim();
    const password1Val = password1.value.trim();
    let success = true;
    if(email1Val === '')
        {
            success=false;
            setError(email1,'This field is required');
        }
        else if(!validateEmail(email1Val)){
            success=false;
            setError(email1,'Please enter a valid email');
        }
        else{
            setSuccess(email1);
        }
        if(password1Val === '')
            {
                success = false;
                setError(password1,'This field is required');
            }
            else{
                setSuccess(password1);
            }
}
function setError(element,message)
{
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");
    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  function togglepasswordvisibility()
  {
    var passwordField = document.getElementById("password1");
    var togglebutton = document.querySelector(".toggle-password");
    if(passwordField.type === "password"){
        passwordField.type = "text";
        togglebutton.style.backgroundImage = "url('https://static.thenounproject.com/png/4334035-200.png')";
    }
    else{
        passwordField.type = "password";
        togglebutton.style.backgroundImage = "url('https://static-00.iconduck.com/assets.00/eye-password-hide-icon-2048x2048-c8pmhg0p.png')";
    }
  }