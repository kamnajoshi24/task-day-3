
function myFunction(str);

var newString = str.split("");
newString.sort(function(a,b) {return (b.length-a.length )});
    return newString[0];

console.log(myFunction(" web development tuitorial"));

