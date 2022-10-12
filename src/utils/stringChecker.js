export function stringContainsNumber(_string) {
  let matchPattern = _string.match(/\d+/g);
  if (matchPattern != null) {
    console.log("The input string contain numbers");
    return false;
  } else {
    console.log("The input string does not contain numbers");
    return true;
  }
}
