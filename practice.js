// detect palindrome
function isPalindrome(inputStr) {
  const len = inputStr.length;
  const isEven = len % 2 == 0 ? true : false;
  const arr1 = inputStr.split("");
  if (isEven) {
    const i = len / 2;
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
    const pal1 = arr1.toString();
    const pal2 = arr2.toString();
    if (pal1 == pal2) {
      return true;
    }
  }
  return false;
}

// const palindromes = ["aaabaaaa", "ablewasiereisawelba", "qwertyuiopoiuytrewq", "nurseispygypsiesrun", "oozyratinasanitaryzoo", "mrowlatemymetalworm", "dogasadevildeifiedlivedasagod"];

// palindromes.forEach(pal => {
//   console.log(pal + " has " + pal.length + " characters.");
//   const result = isPalindrome(pal);
//   console.log("True or false: is " + pal + " a palindrome? → " + result);
// });

// conditions test function
function solution(numbers, left, right) {
  const bools = [];
  numbers.forEach((num, index) => {
    console.log("index: ", index);
    console.log("num: ", num);
    for (i = left; i <= right; i++) {
      console.log("result: ", (index + 1) * i);
      if ((index + 1) * i == num) {
        bools.push(true);
        return;
      }
    }
    bools.push(false);
  });
  return bools;
}

// create "alternating" array and determine if it is strictly ascending
function isResultingArrayStrictlyAscending(a) {
  const altArr = [];
  let c = 0;
  do {
    if (c % 2 == 0) {
      const fr = a.shift();
      altArr.push(fr);
      c++;
    } else {
      const ba = a.pop();
      altArr.push(ba);
      c++;
    }
  } while (a.length > 0);
  // console.log("altArr: ", altArr);
  for (let i = 0; i < altArr.length; i++) {
    if (i + 1 < altArr.length) {
      if (altArr[i] < altArr[i + 1]) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
}

const array1 = [1, 3, 6, 11, 16, 19, 23, 20, 17, 10, 6, 5, 2];
const result1 = isResultingArrayStrictlyAscending(array1);
// console.log("the alternating array is strictly ascending: " + result1);

// object destructuring
const { fullName, job } = { fullName: "Jerry Maguire", job: "Sports Agent" };
// console.log(fullName);
// console.log(job);

// array destructuring
const numbers = [1, 2, 3];
const [num1, , num2] = numbers;
// console.log(num1, num2);

const doubleNumArray = numbers.map((num) => {
  return num * 2;
});

// console.log("doubleNumArray: ", doubleNumArray);

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

// expenses.forEach((expense) => {
//   console.log(expense.title);
//   console.log(expense.amount);
//   console.log(expense.date);
// });

/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
*/
function adjacentStatues(statues) {
  var addl = [];
  var num = null;
  statues.sort((a, b) => a - b);
  console.log("statues: ", statues);
  const posStatues = statues.filter((statue) => statue >= 0);
  console.log("posStatues: ", posStatues);
  if (posStatues.length <= 1) {
    return 0;
  }
  for (var i = 0; i < posStatues.length; i++) {
    if (i + 1 < posStatues.length) {
      num = posStatues[i + 1] - posStatues[i] - 1;
      addl.push(num);
    }
  }
  const sum = addl.reduce((prevVal, currVal) => prevVal + currVal);
  return sum;
}

// const stat1 = [10, 4, 16, 6, 3, 7, 0];
// const sum1 = adjacentStatues(stat1);
// console.log(sum1);

// test for strictly increasing array
function isSI(arr) {
  const len = arr.length;
  if (len === 1) {
    return true;
  }
  if (arr[0] < arr[1]) {
    let i = 1;
    while (i < len && arr[i - 1] < arr[i]) {
      i++;
    }
    if (i === len) {
      return true;
    }
  }
  return false;
}

// const arr1 = [40, 50, 60, 10, 20, 30];
// const arr1Result = isSI(arr1);
// console.log(arr1Result);

function removeOnlyOneElAndRemainStrictlyIncreasing(sequence) {
  function isSI(arr) {
    const len = arr.length;
    if (len === 1) {
      return true;
    }
    if (arr[0] < arr[1]) {
      let i = 1;
      while (i < len && arr[i - 1] < arr[i]) {
        i++;
      }
      if (i === len) {
        return true;
      }
    }
    return false;
  }
  if (sequence.length === 1) {
    return true;
  }
  let y = 0;
  for (var i = 0; i < sequence.length; i++) {
    let dup = sequence.map((n) => n);
    dup.splice(i, 1);
    console.log("dup: ", dup);
    const iterResult = isSI(dup);
    if (iterResult) {
      y++;
    }
  }
  console.log("y: ", y);
  return y < 1 ? false : true;
}

function isSIRedux(sequence) {
  const len = sequence.length;
  let y = 0;
  if (len == 1 || len - 1 == 1) {
    return true;
  }
  for (var i = 0; i < len; i++) {
    let dup = [...sequence];
    dup.splice(i, 1);
    const dupLen = dup.length;
    if (dup[0] < dup[1]) {
      let k = 1;
      while (k < dupLen && dup[k - 1] < dup[k]) {
        k++;
      }
      if (k == dupLen) {
        y++;
      }
    }
  }
  return y < 1 ? false : true;
}

function isSIReduxRedux(sequence) {
  let y = 0;
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i - 1] >= sequence[i]) {
      y++;
      if (y > 1) {
        return false;
      }
      if (
        sequence[i - 2] >= sequence[i] &&
        sequence[i - 1] >= sequence[i + 1]
      ) {
        return false;
      }
    }
  }
  return true;
}

function unhauntedRoomsCost(matrix) {
  let occupyCost = 0;
  let hauntedIndices = [];
  for (var i = 0; i < matrix.length; i++) {
    const floor = matrix[i];
    for (var k = 0; k < floor.length; k++) {
      console.log("floor[" + k + "]: " + floor[k]);
      if (floor[k] < 1) {
        hauntedIndices.push(k);
      } else {
        if (!hauntedIndices.includes(k)) {
          occupyCost += floor[k];
        }
      }
    }
  }
  console.log("hauntedIndices: ", hauntedIndices);
  console.log("occupyCost: ", occupyCost);
  return occupyCost;
}

function explodingBubbles(matrix) {
  const posArr = [];
  //iterate through matrix
  for (let i = 0; i < matrix.length; i++) {
    const row = [...matrix[i]];
    console.log("row " + i + ": ", row);
    // iterate through row
    row.forEach((el, index, rowArr) => {
      if (index - 1 >= 0 && index + 1 < rowArr.length) {
        if (el == rowArr[index - 1]) {
          // do shit
        }
      }
    });
    // adjacent rows
    if (i - 1 >= 0) {
      console.log("row " + (i - 1) + " exists");
    }
    if (i + 1 < matrix.length) {
      console.log("row " + (i + 1) + " exists");
    }
  }
}

const myMatrix = [
  [3, 1, 1, 2, 4],
  [1, 1, 2, 4, 1],
  [2, 3, 2, 2, 4],
];
const exploded = [
  [3, 0, 1, 2, 4],
  [0, 0, 0, 0, 1],
  [2, 3, 0, 0, 4],
];
const explodedResult = [
  [0, 0, 0, 0, 4],
  [3, 0, 0, 0, 1],
  [2, 3, 1, 2, 4],
];

// explodingBubbles(myMatrix);

const posArray = [];
posArray[0] = {};
posArray[0].row = 0;
(posArray[0].pos = [0, 1]),
  (posArray[0].hits = [
    [0, 2],
    [1, 0],
    [1, 1],
  ]);
// console.log("posArray: ", posArray);

// array.splice(replaceIndex, deleteCount, newEl);

const replaceArrayElements = (array, replaceIndex, newElements) => {
  array.splice(replaceIndex, newElements.length, newElements);
  return array.reduce((prev, curr) => prev.concat(curr), []);
};

let replaceEls = [1, 3, 5, 7, 3, 4, 11];
const replaceWith = [9, 6];
const replaceHere = 3;
const flattened = replaceArrayElements(replaceEls, replaceHere, replaceWith);
// console.log("flattened: ", flattened);
// console.log(flattened[2] + flattened[4]);

function allTheLongestStrings(inputArray) {
  let length = [];
  inputArray.forEach((el, index) => {
    length.push([el.length, index]);
  });
  length
    .sort((a, b) => {
      if (a[0] === b[0]) {
        return 0;
      } else {
        return a[0] < b[0] ? -1 : 1;
      }
    })
    .reverse();
  const min = length[0][0];
  let sorted = [];
  length.forEach((el) => {
    sorted.push(inputArray[el[1]]);
  });
  let result = sorted.filter((str) => str.length >= min).reverse();
  return result;
}

const someObj = {
  talk: (talkersName) => {
    console.log(`${talkersName} is talking to you!`);
  },
  talks: (talker) => {
    console.log(`${talker} is talking to you!`);
  },
};
console.log(someObj.talk("Lenny"));
console.log(someObj.talks("George"));
