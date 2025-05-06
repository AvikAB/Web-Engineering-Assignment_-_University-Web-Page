document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    let isValid = true;
    const name = document.getElementById('studentName');
    const id = document.getElementById('studentId');
    const dept = document.getElementById('department');
    const email = document.getElementById('email');
    const genderOptions = document.getElementsByName('gender');
    const genderError = document.getElementById('genderError');
  
    [name, id, dept, email].forEach(input => input.classList.remove('is-invalid'));
    genderError.style.display = "none";
  
    if (!name.value.trim()) { name.classList.add('is-invalid'); isValid = false; }
    if (!id.value.trim()) { id.classList.add('is-invalid'); isValid = false; }
    if (!dept.value) { dept.classList.add('is-invalid'); isValid = false; }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
      email.classList.add('is-invalid'); isValid = false;
    }
  
    let genderSelected = [...genderOptions].some(g => g.checked);
    if (!genderSelected) {
      genderError.style.display = "block";
      isValid = false;
    }
  
    if (isValid) {
      alert('Form submitted successfully!');
      this.reset();
    }
  });
  