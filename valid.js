function validateAll(){
    if (myFunction()){
        document.form.submit();
    }
} 


function myFunction() {
	
		    

    var lastnameValue = document.getElementById("lastNameinput").value;
	  var UsernameValue  = document.getElementById("usernameinput").value;
    var firstNameValue  = document.getElementById("firstnameinput").value;
	  var miValue  = document.getElementById("miInput").value;
    var PasswordValue  = document.getElementById("Password").value;
    var StudentNumberValue = document.getElementById("stNumber").value;
    var BirthdayValue = document.getElementById("birth").value;
    var cpNumberValue = document.getElementById("mNumber").value;
    var EmailValue = document.getElementById("nEmail").value;
    var ConfirmPassValue = document.getElementById("cPassword").value;

    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;
    var nonwords = /[\d\W]/;
    var user = /[/-/_/s]+/;
    var email = /[/@/.]/;
    var mobile = /[+]63/g;
    var emailReg = /[@]ue.edu.ph/gi;
    var usernameReg = /([A-Za-z ])/gi;
    var alphaNum = /[^a-zA-Z0-9]/;
    
  

    


    //LAST NAME 
    if (lastnameValue == "") {
      setErrorFor(lastNameinput, 'Please input your Last name');
      return false;
    } else {
      if (letters.test(lastnameValue)){
        setSuccessFor(lastNameinput);
      
      }else  {
        setErrorFor(lastNameinput, ' Last Name must not contain number or symbol ');
         return false; 
       }      
    }

    
	  //FIRST NAME 
    if (firstNameValue == "") {
      setErrorFor(firstnameinput, 'Please input your First Name');
      return false;
    } else {
      if (letters.test(firstNameValue)){
        setSuccessFor(firstnameinput);
      
      }else  {
        setErrorFor(firstnameinput, ' First Name must not contain number or symbol ');
        return false; 
       }      
    }

  
        // MIDDLE INITIAL
        if (letters.test(miValue) == true){
          setSuccessFor(miInput);
      }else  {
        setErrorFor(miInput, ' Middle Initial must not contain numbers or symbols  ');
         return false; 
      }


        //studentNumber
   
    if(StudentNumberValue.length != 11){
      setErrorFor(stNumber, "SHOULD BE 11 DIGITS")
      return false
    }else{
      if (numbers.test(StudentNumberValue)){
        setSuccessFor(stNumber);
    } else {
        setErrorFor(stNumber, 'Numeric Characters Only');
        return false;
    }
    }
    
     //email  nEmail
     if(EmailValue == ""){
      setErrorFor(nEmail, "PUT YOUR EMAIL ADDRESS");
      return false
    }if (emailReg.test(EmailValue)){
      //var newEmailValue = emailValue.replace(/@ue.edu.ph/, "");   //Check if null value for email
      if (EmailValue.length < 15){
          setErrorFor(nEmail, 'Please enter full UE Email Address');
          return false;
      }
      setSuccessFor(nEmail);
  } else {
      setErrorFor(nEmail, 'Please provide valid UE Email Address');
      return false;
  }

	//USERNAME 
    if (UsernameValue == "") {
        setErrorFor(usernameinput, 'Please input your username');
        return false;
      }  else {
              if (usernameReg.test(UsernameValue) == false){
                if(user.test == true ){
                  if (UsernameValue.length > 7 && UsernameValue.length < 16){
                    setSuccessFor(usernameinput);
                  }else{
                    setErrorFor(usernameinput, 'Characters must be atleast 8 - 15')
                    return false;
                   }
                }else{
                  setErrorFor(usernameinput, ' Username must not contain number or symbol ');
                  return false;
                }
              }else{
                if (UsernameValue.length > 7 && UsernameValue.length < 16){
                  setSuccessFor(usernameinput);
                }else{
                  setErrorFor(usernameinput, ' Characters must be atleast 8 - 15')
                  return false;
                 }
                }
              }

              
	   // Password 
	     if (PasswordValue == ""){
		    setErrorFor(Password, 'Please input your Password');
			return false;
	   }else  {
         if (alphaNum.test(PasswordValue)  ){
		   if (PasswordValue.length > 8 && UsernameValue.length < 20){
                    setSuccessFor(cPassword);
                  }else{
                    setErrorFor(cPassword, ' Characters must be atleast 8 - 15')
                    return false;
                   }

	   }
	   }
	   
	   //cPassword
     if (ConfirmPassValue == PasswordValue){
       setSuccessFor(cPassword);
     }else {
       setErrorFor(cPassword, "PASSWORD MISMATCH");
       return false;
     }
     
       
   
   

    //MOBILE 
    if (mobile.test(cpNumberValue)){
      if (cpNumberValue.length != 13){
          setErrorFor(mNumber, 'Please enter full mobile number');
          return false;
      }
      setSuccessFor(mNumber);
  } else {
      setErrorFor(mNumber, 'Mobile number must start with +63');
      return false;
  }
  


  //Birthday 

  if (BirthdayValue == ""){
    setErrorFor(birth, 'Birth date cannot be blank');
    return false;
} else {
    setSuccessFor(birth);
    var newbdayValue = BirthdayValue.replace(/-/, "");   //Converting Birth Date into number
}
if (newbdayValue > "20021010"){
    setErrorFor(birth, 'User must be legal age');
    return false;
} else {
    setSuccessFor(birth);
}


      return true;
}


function setErrorFor(input, message) {
	var formControl = input.parentElement;
	var small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}
function setSuccessFor(input) {
	var formControl = input.parentElement;
	formControl.className = 'form-control success';
}