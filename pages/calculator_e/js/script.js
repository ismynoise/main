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

var amp = document.getElementById("textViewA");
var kw = document.getElementById("textViewKw");
var selected = document.getElementById("textSelect").value;

function setAmp() {
  if (selected == '380') {
    kw.value = (Math.sqrt(3) * selected * amp.value / 1000).toFixed(1);
  }
  if (selected == '220') {
    kw.value = (selected * amp.value / 1000).toFixed(1);
  }
}

function setKw() {
  if (selected == '380') {
    amp.value = ((kw.value * 1000) / (Math.sqrt(3) * selected)).toFixed(1);
  }
  if (selected == '220') {
    amp.value = ((kw.value * 1000) / selected).toFixed(1);
  }
}

function selectedV() {
  if (selected == '380') {
    kw.value = (Math.sqrt(3) * selected * amp.value / 1000).toFixed(1);
  }
  if (selected == '220') {
    kw.value = (selected * amp.value / 1000).toFixed(1);
  }
}
