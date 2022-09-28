
var images;


images = ['https://tse4.mm.bing.net/th?id=OIP.eIEz73xZoLmYwqTF92FciwHaEw&pid=Api&P=0', 'https://tse3.mm.bing.net/th?id=OIP.cFbSMhjRMOmNaJsl4nI2fwHaF7&pid=Api&P=0', 'https://tse2.mm.bing.net/th?id=OIP.ez64pUNihhf5d7vgHgdn8wHaFj&pid=Api&P=0', 'https://tse2.mm.bing.net/th?id=OIP.OlugQrXt4ksrPC-j0mCHMQHaFj&pid=Api&P=0'];
let element_imgali = document.getElementById('imgali');
element_imgali.setAttribute("src", images[0]);


document.getElementById('pre').addEventListener('click', (event) => {
  let element_imgali2 = document.getElementById('imgali');
  images.unshift(images.slice(-1)[0]);
  element_imgali2.setAttribute("src", images.pop());

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_imgali3 = document.getElementById('imgali');
  images.push(images[0]);
  element_imgali3.setAttribute("src", images.shift());

});
