var form = document.querySelector('.formWidthValidation');
var validateBtn = document.querySelector('.validateBtn');
var sendForm = document.querySelector('.sendForm');
var fields = document.querySelectorAll('.field');

var generateError = function(text){
    var error = document.createElement('div');
    error.className = 'error';
    error.innerHTML = text;
    return error;
    
}

var removeValidation = function(){
    var errors = document.querySelectorAll('.error');

    for(i=0; i<errors.length; i++){
        errors[i].remove();
    }
}

function validate() {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var address = document.querySelector('.email').value;
    if(reg.test(address) == false) {
        var error =  generateError('Enter a valid email!');
        let email = document.querySelector('.email');
       email.after(error);
       return false;
    }else{
        return true;
    }
 }

var checkFieldsName = function(){
    var firstName = document.querySelector('.firstName').value;
        if(firstName == false){
           var error =  generateError('Fill in all the fields');
           let name = document.querySelector('.firstName');
          name.after(error);
          return false
        }else{
            return true;
        }
    }

    var checkFieldsLastName = function(){
        var lastName = document.querySelector('.lastName').value;
            if(lastName == false){
               var error =  generateError('Fill in all the fields');
               let surname = document.querySelector('.lastName');
              surname.after(error);
              return false
            }else{
                return true;
            }
        }
 
var submitForm = function(name , surname , addres ){
    if(addres == true && name ==true && surname == true){
       return sendForm.style.display = 'block';
    }else{
         return sendForm.style.display = 'none';
         }
}

document.addEventListener('submit', function(event){
event.preventDefault();
removeValidation();
submitForm(checkFieldsName(), checkFieldsLastName(), validate());
});