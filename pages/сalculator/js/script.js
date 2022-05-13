var textview = document.getElementById("textview");

function insert(num) {
  if (!isNaN(num)) {
    textview.value = textview.value + num;
  } else {
    var exp = textview.value;
    if (!isNaN(exp[exp.length - 1]) || exp.length == 0)
      textview.value = textview.value + num;
  }
}

function equal() {
  var exp = textview.value;
  if (exp) {
    if (Number.isInteger(exp))
      textview.value = eval(exp).toFixed(6);
    else
      textview.value = eval(exp);
  }
}

function clean () {
  textview.value = "";
}

function back () {
  var exp = textview.value;
  textview.value = exp.substring(0, exp.length - 1);
}
