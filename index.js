var sub = document.querySelector('#submit');
var weight = document.querySelector('#weight');
var age = document.querySelector('#age');
var hr = document.querySelector('#HR');
var sys = document.querySelector('#SYS');
var dia = document.querySelector('#DIA');
var sub2 = document.querySelector('#submit2');
var simpleBlock = document.querySelector('#simpleBlock');
$('.form').submit(e => {
  e.preventDefault();
  $.fancybox.open({
    src: "#modal",
    type: "inline"
  })
  console.log(CalcSimp());
  const modalSum = document.createElement('div');
  modalSum.classList.add('modal__sum');
  modalSum.textContent = CalcSimp();
  simpleBlock.appendChild(modalSum);
});
$('.fancybox-button').click(e=>{
  simpleBlock.removeChild(modalSum);
});
function CalcSimp() {
  var w = weight.value;
  var a = age.value;
  var c = ((w * 1000) ** 0.5) / (0.1015 * (a ** 0.1333));
  console.log(w, a, c)
  return (c)
}
function CalcDiff() {
  var h = Number(hr.value);
  var d = Number(dia.value);
  var s = Number(sys.value);
  var dif = s - d;
  var PerDiv = (((((((dif * (0.74)) + h) * 0.75) - 72) * CalcSimp()) / 100) + CalcSimp());
  return (PerDiv)
}
// sub.addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log(CalcSimp());
// });
// sub2.addEventListener('click', function (event) {
//   event.preventDefault();
//   console.log(CalcDiff());
// });


