
const btnSend = document.querySelector('#enviar');
const form  = document.querySelector('#enviar-mail');

const email = document.querySelector('#email');
const subject = document.querySelector('#asunto');
const message = document.querySelector('#mensaje');

eventListeners();
function eventListeners(){
     document.addEventListener('DOMContentLoaded', startApp);

     email.addEventListener('blur', validateForm);
     subject.addEventListener('blur', validateForm);
     message.addEventListener('blur', validateForm);
}


function startApp(){
     btnSend.disabled = true;
     btnSend.classList.add('cursor-not-allowed', 'opacity-50');
}

function validateForm(e){
     if(e.target.value.length > 0){
          const error = document.querySelector('p.error');
          error.remove();

          e.target.classList.remove('border', 'border-red-500');
          e.target.classList.add('border', 'border-green-500');
     }else{
          e.target.classList.remove('border', 'border-green-500');
          e.target.classList.add('border', 'border-red-500');
          showError('All fields are required');
     }

     if(e.target.type === 'email'){
          const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if(regex.test(e.target.value)){
               const error = document.querySelector('p.error');
               error.remove();
     
               e.target.classList.remove('border', 'border-red-500');
               e.target.classList.add('border', 'border-green-500');
          } else {
               e.target.classList.remove('border', 'border-green-500');
               e.target.classList.add('border', 'border-red-500');
               showError('Email not valide');
          }
     }     
}

function showError(msg){
     const messageError = document.createElement('p');
     messageError.textContent = msg;
     messageError.classList.add('border', 'border-red-500', 'background-color-100', 'text-red-500','p-3','text-align-center', 'mt-5', 'error');

     const errors = document.querySelectorAll('.error');
     if(errors.length === 0){
          form.appendChild(messageError);
     }

}
