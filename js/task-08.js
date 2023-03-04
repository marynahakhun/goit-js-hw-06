
const loginForm = document.querySelector('form.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (!emailInput.value || !passwordInput.value) {
    alert('Будь ласка, заповніть всі поля форми!');
    return; // Перервати подальше виконання скрипту
  }

  const loginData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(loginData);

  loginForm.reset();
});
