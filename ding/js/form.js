const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
const pictureInput = document.getElementById("picture");

const validateUsername = () => {
  const username = usernameInput.value;
  if (username.length < 3) {
    usernameInput.classList.add("invalid");
    return false;
  } else {
    usernameInput.classList.remove("invalid");
    return true;
  }
};

const validateEmail = () => {
  const email = emailInput.value;
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!regex.test(email)) {
    emailInput.classList.add("invalid");
    return false;
  } else {
    emailInput.classList.remove("invalid");
    return true;
  }
};

const validatePassword = () => {
  const password = passwordInput.value;
  if (password.length < 6) {
    passwordInput.classList.add("invalid");
    return false;
  } else if (password.match(/[a-z]/) == null) {
    passwordInput.classList.add("invalid");
    return false;
  } else if (password.match(/[0-9]/) == null) {
    passwordInput.classList.add("invalid");
    return false;
  } else {
    passwordInput.classList.remove("invalid");
    return true;
  }
};

const validateConfirmPassword = () => {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;
  if (password !== confirmPassword) {
    confirmPasswordInput.classList.add("invalid");
    return false;
  } else {
    confirmPasswordInput.classList.remove("invalid");
    return true;
  }
};

const validatePicture = () => {
  const picture = pictureInput.files[0];
  if (picture == null) {
    pictureInput.classList.add("invalid");
    return false;
  } else {
    pictureInput.classList.remove("invalid");
    return true;
  }
};

const validateForm = () => {
  return validateUsername() && validateEmail() && validatePassword() && validateConfirmPassword() && validatePicture();
};

usernameInput.addEventListener("blur", validateUsername);
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);
confirmPasswordInput.addEventListener("blur", validateConfirmPassword);
pictureInput.addEventListener("change", validatePicture);

const submitButton = document.querySelector("button[type='submit']");
submitButton.addEventListener("click", () => {
  if (!validateForm()) {
    return;
  }

  // Submit the form data to the server
});
