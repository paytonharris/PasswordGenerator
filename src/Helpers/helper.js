var nums = '1234567890';
var chars = 'abcdefghijkmnpqrstuvwxyz';
var safeChars = 'abdefhijmnpqrtuvwxz';
var syms = '$#';

var getRandomNum = () => {
  return nums[Math.round(Math.random() * 9)];
}

var getRandomChar = () => {
  return chars[Math.round(Math.random() * (chars.length - 1))];
}

var getRandomSafeChar = () => {
  return safeChars[Math.round(Math.random() * (safeChars.length - 1))];
}

var getRandomSym = () => {
  return syms[Math.round(Math.random() * (syms.length - 1))];
}

var verifyPassword = (password) => {
  for (var i = 0; i < 3; i++) {
    let occurrences = password.split(password[i]).length - 1;

    if (occurrences >= 3) {
      return false;
    }
  }

  return true;
}

export function getPassword() {
  var password = "";

  password += getRandomChar();
  password += getRandomChar();
  password += getRandomSafeChar();
  password += getRandomNum();
  password += getRandomNum();
  password += getRandomSym();
  password += getRandomChar();
  password += getRandomChar();

  if (!verifyPassword(password)) {
    return getPassword();
  } else {
    return password;
  }
}