const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  fetch('https://example.com/api/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      // user successfully logged in
      window.location.href = '/dashboard'; // redirect to dashboard
    } else {
      // handle login error
      alert('Invalid email or password');
    }
  })
  .catch(error => {
    // handle network error
    console.log(error);
  });
});
