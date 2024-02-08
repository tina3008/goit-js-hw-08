const fillForm = document.querySelector(".login-form");
const formData = {};
const checkForm = (event) =>{
    event.preventDefault();
    const form = event.target;

    const chkEmail = form.elements.email.value.trim();   
    const chkPwd = form.elements.password.value.trim(); 
   
    if (chkEmail.length < 1 || chkPwd.length < 1 ) {
      alert('All form fields must be filled in');
    }else{
      formData.password = chkPwd;
      formData.email = chkEmail;  
      console.log(formData);     
      fillForm.reset();
      
    }  
    
}

fillForm.addEventListener("submit", checkForm);

