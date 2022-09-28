

var images;


images = ['https://tse4.mm.bing.net/th?id=OIP.eIEz73xZoLmYwqTF92FciwHaEw&pid=Api&P=0', 'https://tse3.mm.bing.net/th?id=OIP.cFbSMhjRMOmNaJsl4nI2fwHaF7&pid=Api&P=0', 'https://tse2.mm.bing.net/th?id=OIP.ez64pUNihhf5d7vgHgdn8wHaFj&pid=Api&P=0', 'https://tse2.mm.bing.net/th?id=OIP.OlugQrXt4ksrPC-j0mCHMQHaFj&pid=Api&P=0'];
let element_img = document.getElementById('img');
element_img.setAttribute("src", images[0]);


document.getElementById('pre').addEventListener('click', (event) => {
  let element_img2 = document.getElementById('img');
  images.unshift(images.slice(-1)[0]);
  element_img2.setAttribute("src", images.pop());

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_img3 = document.getElementById('img');
  images.push(images[0]);
  element_img3.setAttribute("src", images.shift());

});
