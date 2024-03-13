const validateForm = (email, password) => {
  let errors = {};

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  if (!email.trim()) {
    errors.emailError = "Email is required";
  } else if (!isValidEmail(email)) {
    errors.emailError = "Invalid email format";
  }

  if (!password.trim()) {
    errors.passwordError = "Password is required";
  }

  return errors;
};

export default validateForm;
