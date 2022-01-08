const loginFormHandler = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);

  const email = formProps.email.trim();
  const password = formProps.password.trim();

  if (email && password) {
    // Use the inputted values to login, if successful, route to '/' homepage otherwise display login error
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('response', response);
    if (response.ok) {
      console.log('logged in');
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);

  const username = formProps.username.trim();
  const email = formProps.email.trim();
  const password = formProps.password.trim();

  console.log(username, email, password);
  if (username && email && password) {
    console.log('we have the form data!!!');
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {

      const mailResponse = await fetch('/api/mail/', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(mailResponse, "mailekljrl???");
      document.location.replace('/');

    } else {
      alert('Failed to sign up.');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

