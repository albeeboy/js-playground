// detect palindrome
function isPalindrome(inputStr) {
  const len = inputStr.length;
  const isEven = len % 2 == 0 ? true : false;
  const arr1 = inputStr.split('');
  if (isEven) {
    const i = (len / 2);
    const arr2 = arr1.splice(0, i);
    arr2.reverse();
    const pal1 = arr1.toString();
    const pal2 = arr2.toString();
    if (pal1 == pal2) {
      return true;
    }
  } else {
    const i = Math.floor(len / 2);
    const arr2 = arr1.splice(0, i);
    arr1.splice(0, 1);
    arr2.reverse();
    const pal1 =  arr1.toString();
    const pal2 = arr2.toString();
    if (pal1 == pal2) {
      return true;
    }
  }
  return false;
}

const palindromes = ["aaabaaaa", "ablewasiereisawelba", "qwertyuiopoiuytrewq", "nurseispygypsiesrun", "oozyratinasanitaryzoo", "mrowlatemymetalworm", "dogasadevildeifiedlivedasagod"];

palindromes.forEach(pal => {
  console.log(pal + " has " + pal.length + " characters.");
  const result = isPalindrome(pal);
  console.log("True or false: is " + pal + " a palindrome? → " + result);
});
