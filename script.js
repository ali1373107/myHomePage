/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;

/* =================
   ASSERTIONS 
   These are the things we check are true about your page.
   Read and update your HTML to discover the requirements.
   The tests will run every time you update your code.
   ===================
*/
test("There is at least one header element", () => {
  expect(getHeader.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one h1", () => {
  expect(getH1.length).toBeGreaterThanOrEqual(1);
});
test("There is only one header element with the class c-site-header", () => {
  expect(getSiteHeader.length).toBe(1);
});
test("There is a nav element with an aria-label of Main Site Links.", () => {
  expect(getAria.length).toBeGreaterThanOrEqual(1);
});
test("There is only one main element", () => {
  expect(getMain.length).toBe(1);
});
test("There is at least one footer element", () => {
  expect(getFooter.length).toBeGreaterThanOrEqual(1);
});
test("There is only one footer element with the class c-site-footer", () => {
  expect(getSiteFooter.length).toBe(1);
});
test("There is embedded video", () => {
  expect(getIFrame.length).toBeGreaterThanOrEqual(1);
});
test("There is at least one image", () => {
  expect(getImage.length).toBeGreaterThanOrEqual(1);
});
test("There are at least 500 words on the page", () => {
  expect(getWords.length).toBeGreaterThanOrEqual(500);
});

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
var array;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  let new_a = document.createElement('a');
  new_a.setAttribute("href", getNumberOrString(document.getElementById('link').value));
  new_a.innerText = getNumberOrString(document.getElementById('text').value);

  new_li.appendChild(new_a);

  element_list.appendChild(new_li);

});
array = [];

const console = document.getElementById("tests");
prettify.toHTML(run(), console);


