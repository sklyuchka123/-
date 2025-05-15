function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  if (!name || !email) {
    alert("Будь ласка, заповніть усі поля.");
    return false;
  }
  return true;
}