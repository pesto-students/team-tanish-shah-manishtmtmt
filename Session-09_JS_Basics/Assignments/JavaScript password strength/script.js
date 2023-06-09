// Your solution goes here

const isStrongPassword = (password) => {
  // getting the length of the password
  const passwordLength = password.length;

  // returning false if password is not at least 8 characters long
  if (passwordLength < 8) return false;

  // returning false if password containg 'password'
  if (password.toLowerCase().includes("password")) return false;

  // returning false if password does not contain at least one uppercase character
  if (!/[A-Z]/.test(password)) return false;

  // returning true if none of above condition is true
  return true;
};
