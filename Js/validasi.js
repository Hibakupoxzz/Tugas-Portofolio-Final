const form = document.getElementById('contact-form');

if (form) {
  const nameInput = form.name;
  const emailInput = form.email;
  const messageInput = form.message;
  const successMsg = document.getElementById('success-message');

  // Buat elemen error kalau belum ada
  function ensureErrorElement(id) {
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement('p');
      el.id = id;
      el.style.color = 'red';
      el.style.marginTop = '-10px';
      el.style.marginBottom = '10px';
      el.style.fontSize = '0.9rem';
      form.querySelector(`#${id.split('-')[0]}`).after(el);
    }
    return el;
  }

  const nameError = ensureErrorElement('name-error');
  const emailError = ensureErrorElement('email-error');
  const messageError = ensureErrorElement('message-error');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMsg.textContent = '';

    let valid = true;

    if (nameInput.value.trim() === '') {
      nameError.textContent = 'Jangan lupa tulis nama.';
      valid = false;
    }

    if (!validateEmail(emailInput.value.trim())) {
      emailError.textContent = 'Emailnya jangan sampe salah ya!!';
      valid = false;
    }

    if (messageInput.value.trim() === '') {
      messageError.textContent = 'Masukin dulu pesannya.';
      valid = false;
    }

    if (valid) {
      successMsg.textContent = 'Makaciiii!! Pesan kamu udah dikirim ya ^^';
      successMsg.style.color = 'green';
      form.reset();
    }
  });
} else {
  console.error('Form not found: #contact-form');
}
