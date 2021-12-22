const loginFormHandler = async (event) => {
  event.preventDefault();

  // TODO: Add a comment describing the functionality of these expressions
  // TODO: SUBMIT FORM - grab values from submitted form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Use the inputted values to login, if successful, route to '/' homepage otherwise display login error
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log('logged in');
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
