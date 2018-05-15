var outputData = require('./data/outputData');

let rawstr = 'Healthcare & Pharmaceuticals, Agriculture, Consumer Packaged Goods';
var strArr = rawstr.split(',');
strArr.forEach(function(el, i, arr) {
  arr[i] = el.trim();
});


var output = narrowSearchTerm(strArr, 'Healthcare & Pharmaceuticals');
// console.log('output = ' + output);

function narrowSearchTerm (input, match) {
  let output;
  if (Array.isArray(input)) {
    input.forEach(function(el) {
      if (el === match) {
        output = el;
      }
    });
  } else {
    output = input;
  }
  return output;
}

// obj = message.watsonData => outputData
// outputObj = message.watsonData.output => outputData.output

var match  = getMatchKey(outputData);

function convertToArray (string, delimiter) {
  let arr = string.split(delimiter);
  arr.forEach(function(el, i, arr) {
    arr[i] = el.trim();
  })
  return arr;
}

function getMatchKey (obj) {
  var arr = convertToArray(obj.output.text[0], ':');
  return arr[1];
}

function retrieveEntityValue (obj, match) {
  if(Array.isArray(obj.entities)) {
    var val, idx;
    for (var i = 0; i < obj.entities.length; i++) {
      if (obj.entities[i].entity === match) {
        val = obj.entities[i].value;
        idx = i;
        break;
      } else {
        continue;
      }
    }
    return val;
  }
}

var key = '@' + match;
var val = retrieveEntityValue(outputData, match);
console.log('https://vsa-casestudies-broker-bot.herokuapp.com/case_studies?' + key + '=' + val);

