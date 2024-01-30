function validateForm() {
    var nombre = document.getElementById('Nombre').value;
    var apellido = document.getElementById('Apellido').value;
    var email = document.getElementById('E-mail').value;
    var celular = document.getElementById('Celular').value;

    if (nombre.trim() === '' || apellido.trim() === '' || email.trim() === '' || cel.trim() === '') {
      alert('Por favor llena todos los espacios.');
      return false;
    }

    // Validate email format
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Ingresa un e-mail válido.');
      return false;
    }

    // Validate phone format (allow only digits and optional dashes)
    var phoneRegex = /^\d+(-\d+)*$/;
    if (!phoneRegex.test(phone)) {
      alert('Ingresa un número de teléfono válido');
      return false;
    }

    alert('Gracias!');
    return true;
  }