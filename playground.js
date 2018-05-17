var outputData = require('./data/outputData');
var outputArray = require('./data/outputArray');
let dataURL = "https://vsa-casestudies-broker-bot.herokuapp.com";

let rawstr = 'Healthcare & Pharmaceuticals, Agriculture, Consumer Packaged Goods';
var strArr = rawstr.split(',');
strArr.forEach(function(el, i, arr) {
  arr[i] = el.trim();
});


var output = narrowSearchTerm(strArr, 'Healthcare & Pharmaceuticals');

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

function getMatchArray (obj) {
  var arr = convertToArray(obj.output.text[0], ':');
  arr.shift();
  return arr;
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

function generateGetURL (outputObj) {
  var getURL = dataURL + '/case_studies?';
  var matchArray = getMatchArray(outputObj);
  matchArray.forEach(function (el, i, arr) {
    let key = '@' + el;
    let val = retrieveEntityValue(outputObj, el);
    let like = (key === '@work_capability' || key === '@client_industry' || key === '@work_type' || key === '@case_component') ? '_like' : '';
    let amp = (i < arr.length - 1) ? '&' : '';
    getURL += key + like + '=' + encodeURIComponent(val) + amp
  });
  return getURL;
}

function formatResponse (dataArray) {
  var message = '';
  if (Array.isArray(dataArray)) {
    switch (dataArray.length) {
      case 0:
        message = 'Your search generated 0 results. Would you like to run another search?';
        break;
      case 1:
        message = 'Your search generated 1 result:\n';
        message += iterateResults(dataArray);
        break;
      default:
        message = 'Your search generated ' + dataArray.length + ' results:\n';
        message += iterateResults(dataArray);
    }
  } else {
    message = 'Sorry, there was a massive error that I couldn’t recover from. Please start over. ☹️';
  }
  return message;
}

function iterateResults (array) {
  var results = '';
  array.forEach(function (el, i, arr) {
    var eol = (i < arr.length - 1) ? '.\n' : '.';
    results += (i + 1) + '. A ' + el['@case_component'] + ' named "' + el['case_study_name'] + '" can be found at ' + el['asset_url'] + eol;
  });
  return results;
}

var url = generateGetURL(outputData);
var message = formatResponse(outputArray);
console.log('url: ', url);
console.log('message: ', message);
