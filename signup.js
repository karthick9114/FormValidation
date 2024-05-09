    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const cpassword = document.querySelector('#cpassword');
    const form =document.querySelector('#form');

    form.addEventListener("submit",(e)=>{
        if(!validation()){
            e.preventDefault();
        }
    })

    function validation()
    {
        const usernameVal = username.value.trim();
        const emailVal = email.value.trim();
        const passwordVal = password.value.trim();
        const cpasswordVal = cpassword.value.trim();
        let success = true;
        if(usernameVal === '')
            {
                success = false;
                setError(username,'This field is required');
            }
            else{
                setSuccess(username);
            }
            if(emailVal === '')
                {
                    success = false;
                    setError(email,'This field is required');
                }
                else if(!validateEmail(emailVal)){
                    success = false;
                    setError(email,'Please enter a valid email');
                }
                else{
                    setSuccess(email)
                }
                if(passwordVal === '')
                    {
                        success = false;
                        setError(password,'This field is required');
                    }
                else if(passwordVal.length<8){
                    success = false;
                    setError(password,'Password should be atleast 8 characters');
                }
                else{
                    setSuccess(password);
                }
                if(cpasswordVal === ''){
                    success = false;
                    setError(cpassword,'This field is required');
                }
                else if(cpasswordVal!== passwordVal)
                    {
                        success = false;
                        setError(cpassword,'Password does not match');
                    }
                    else{
                        setSuccess(cpassword)
                    }
                    return success;
    }

    function setError(element,message)
    {
        const inputGroup = element.parentElement;
        const errorElement = inputGroup.querySelector(".error");
        errorElement.innerText = message;
        inputGroup.classList.add('error');
        inputGroup.classList.remove('success');
    }

    function setSuccess(element)
    {
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

function togglePasswordVisibility() {
        var passwordField = document.getElementById("password");
        var cpasswordField = document.getElementById("cpassword");
        var toggleButton = document.querySelector(".toggle-password");
        if (passwordField.type === "password") {
            passwordField.type = "text";
            toggleButton.style.backgroundImage = "url('https://static.thenounproject.com/png/4334035-200.png')"; 
        } else {
            passwordField.type = "password";
            toggleButton.style.backgroundImage = "url('https://static-00.iconduck.com/assets.00/eye-password-hide-icon-2048x2048-c8pmhg0p.png')"; 
        }
}
function togglePasswordVisibility1() {
        var cpasswordField = document.getElementById("cpassword");
        var toggleButton = document.querySelector(".toggle-password1");
        if (cpasswordField.type === "password") {
            cpasswordField.type = "text";
            toggleButton.style.backgroundImage = "url('https://static.thenounproject.com/png/4334035-200.png')"; 
        } else {
            cpasswordField.type = "password";
            toggleButton.style.backgroundImage = "url('https://static-00.iconduck.com/assets.00/eye-password-hide-icon-2048x2048-c8pmhg0p.png')"; 
        }
}


