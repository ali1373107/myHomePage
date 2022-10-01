

var staff_list, totalprice;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('fourthtbtnprice').addEventListener('click', (event) => {
  let element_selecteditem = document.getElementById('selecteditem');
  let new_li = document.createElement('li');
  new_li.innerText = 'Brush £15';

  element_selecteditem.appendChild(new_li);
  totalprice.unshift(15);
  let element_total_price = document.getElementById('total_price');
  element_total_price.innerText = totalprice.reduce((a,b) => a+b, 0);

});

document.getElementById('firstbtnprice').addEventListener('click', (event) => {
  let element_selecteditem2 = document.getElementById('selecteditem');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'Steel Bowl £10';
  totalprice.unshift(10);

  element_selecteditem2.appendChild(new_li2);
  let element_total_price2 = document.getElementById('total_price');
  element_total_price2.innerText = totalprice.reduce((a,b) => a+b, 0);

});

document.getElementById('commentbtn').addEventListener('click', (event) => {
  let element_commentingp = document.getElementById('commentingp');
  element_commentingp.innerText = getNumberOrString(document.getElementById('commentinput').value);

});
staff_list = ['Steel Bowl', 'Pet ID Tag', 'Shampoo', 'Gate', 'Brush'];
totalprice = [];


document.getElementById('thirdbtnprice').addEventListener('click', (event) => {
  let element_selecteditem3 = document.getElementById('selecteditem');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'Shampoo £20';
  totalprice.unshift(20);

  element_selecteditem3.appendChild(new_li3);
  let element_total_price3 = document.getElementById('total_price');
  element_total_price3.innerText = totalprice.reduce((a,b) => a+b, 0);

});

document.getElementById('fourthtbtnprice').addEventListener('click', (event) => {
  let element_selecteditem4 = document.getElementById('selecteditem');
  let new_li4 = document.createElement('li');
  new_li4.innerText = 'Gate £10';
  totalprice.unshift(10);

  element_selecteditem4.appendChild(new_li4);
  let element_total_price4 = document.getElementById('total_price');
  element_total_price4.innerText = totalprice.reduce((a,b) => a+b, 0);

});

document.getElementById('secendbtnprice').addEventListener('click', (event) => {
  let element_selecteditem5 = document.getElementById('selecteditem');
  let new_li5 = document.createElement('li');
  new_li5.innerText = 'Pet ID Tag £15';
  totalprice.unshift(15);

  element_selecteditem5.appendChild(new_li5);
  let element_total_price5 = document.getElementById('total_price');
  element_total_price5.innerText = totalprice.reduce((a,b) => a+b, 0);

});
