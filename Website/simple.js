function show() {

  alert('you clicked this');
}


function doCelsius(c) {

  return (9 / 5) * c + 32; // The reason why it wasn't working becasue i forgot the multiplaction symbol //

}


function showFar() {
  var farcal = doCelsius(0);
  alert(farcal);
}

function showNewFar() {

  var dofar = doCelsius(0);
  alert(dofar);
}


function cel_100() {

  var celdo100 = doCelsius(100);
  alert(celdo100);
}

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World!";
}
