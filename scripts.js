window.addEventListener('load', () => {
    const loader = document.getElementById('loading');
    if (loader) {
      loader.classList.add('hide');
      setTimeout(() => {
        loader.style.display = 'none';
      }, 600);
    }
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    if (!form) return;
  
    const nameInput = form.name;
    const emailInput = form.email;
    const passwordInput = form.password;
  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]{8,}$/;
  
    function showError(input) {
      input.classList.add('is-invalid');
      input.setAttribute('aria-invalid', 'true');
    }
  
    function clearError(input) {
      input.classList.remove('is-invalid');
      input.setAttribute('aria-invalid', 'false');
    }
  
    form.addEventListener('submit', (e) => {
      let valid = true;
  
      const nameValue = nameInput.value.trim();
      if (nameValue.length < 5 || nameValue.length > 20) {
        showError(nameInput);
        valid = false;
      } else {
        clearError(nameInput);
      }
  
      if (!emailInput.checkValidity()) {
        showError(emailInput);
        valid = false;
      } else {
        clearError(emailInput);
      }
  
      if (!passwordRegex.test(passwordInput.value)) {
        showError(passwordInput);
        valid = false;
      } else {
        clearError(passwordInput);
      }
  
      if (!valid) {
        e.preventDefault();
        const firstErrorElem = form.querySelector('.is-invalid');
        if (firstErrorElem) {
          firstErrorElem.focus();
        }
      }
    });
  });