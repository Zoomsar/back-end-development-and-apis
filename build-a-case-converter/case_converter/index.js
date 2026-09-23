function getUpperCase(string) {
    return string.toUpperCase();
}

function getLowerCase(string) {
    return string.toLowerCase();
}

function getSentenceCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function getProperCase(string) {
    let splitStr = string.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);     
   }
   
   return splitStr.join(' ');}

module.exports = {
  getUpperCase, getLowerCase, getSentenceCase, getProperCase
};