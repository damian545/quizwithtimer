var question001 = [
  "There are 9 continents in the world?",
  "There are no island on Earth?",
  "Ostriches have two toes on each foot?",
];
var options001 = [
  "<button class=buttons001 onclick=q1i()>True</button><br /><br /><button class=buttons001 onclick=q1c()>False</button",
];
var options002 = [
  "<button class=buttons001 onclick=q1c()>False</button><br /><br /><button class=buttons001 onclick=q1i()>True</button",
];
var options003 = [
  "<button class=buttons001 onclick=q1c()>True</button><br /><br /><button class=buttons001 onclick=q1i()>False</button",
];

var a = 0;
a++;
var b = 0;
b++;

function begin001() {
  disappear001.innerHTML = "";
  message001.innerHTML = question001[0];
  message002.innerHTML = options001;
  number001.innerHTML = a++;
}
function q1c() {
  message003.innerHTML = "Correct";
  message002.innerHTML = "";
  score001.innerHTML = b++;
  message004.innerHTML =
    "<button class=buttons002 onclick=next001()>Next<button>";
}
function q1i() {
  message003.innerHTML = "Incorrect";
  message002.innerHTML = "";
  message004.innerHTML =
    "<button class=buttons002 onclick=next001()>Next<button>";
}
function next001() {
  if (a == "2") {
    message001.innerHTML = question001[1];
    message002.innerHTML = options002;
    message003.innerHTML = "";
    number001.innerHTML = a++;
    message004.innerHTML = "";
  } else if (a == "3") {
    message001.innerHTML = question001[2];
    message002.innerHTML = options003;
    message003.innerHTML = "";
    number001.innerHTML = a++;
    message004.innerHTML = "";
  } else {
    message001.innerHTML = "End of Quiz";
    message002.innerHTML = "";
    message003.innerHTML = "";
    message004.innerHTML =
      "<button class=buttons002 onclick=repeat001()>Repeat<button>";
  }
}
function repeat001() {
  location.reload();
}
