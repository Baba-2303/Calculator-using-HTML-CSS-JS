let string = "";
let btns = document.querySelectorAll('.button');
Array.from(btns).forEach((btnElement) => {
  btnElement.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector('.input').value = string;
    }
    else if(e.target.innerHTML == "A/C"){
      string = "";
      document.querySelector('.input').value = string;
    }
    else if(e.target.innerHTML == "Del"){
      string = string.slice(0,-1);
      document.querySelector('.input').value = string;
    }
    else {
      string += e.target.innerHTML;
      document.querySelector('.input').value = string;
    }
  })
})