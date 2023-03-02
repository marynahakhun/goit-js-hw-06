const refs ={
     form : document.querySelector('.login-form'),
     inputEmail: document.querySelector('input[type="email"]'),
     inputPassword: document.querySelector('input[type="password"]')
}



refs.form.addEventListener('submit', submitResult)

function submitResult(event) {
    event.preventDefault()

  const formData = new FormData(event.currentTarget)
  formData.forEach((value, name )=>{
    if (!formData.get('email') || !formData.get('password')) {
        window.alert('Всі поля повинні бути заповнені');
        
        return ;
      }
      
    
    event.currentTarget.reset()
  });
  const userData = {
    email: formData.get('email'),
password: formData.get('password')
  }
}