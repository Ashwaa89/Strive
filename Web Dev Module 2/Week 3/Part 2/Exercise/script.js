setInterval(ChangeHeader, 1000);


function ChangeHeader() {
  document.querySelector(".header").innerHTML =
    "The current time is: " +
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds();
}

function ChangeColour(prop, colour) {
  document.querySelector("body").style[prop] = colour;
}
function Highlight(sender) {
    sender.innerText = document.querySelectorAll('.highlightlink').length === 0 ? 'Un-highlight links' : 'Highlight links'
for (let link of document.querySelectorAll('.product-title')) {
    link.classList.toggle('highlightlink')
}


}
function ToggleImages(sender) {

  
    for (let img of document.querySelector('#products').querySelectorAll('.product-image')) {
        img.querySelector('img').classList.toggle('square')
        img.querySelector('img').classList.toggle('round')
    }
    sender.innerText = document.querySelector('#products').querySelectorAll('.round').length === 0 ? 'Set Images Round' : 'Set Images Square'

}

function SetPriceColour(sender,action) {
let item =  sender.querySelector('.product-title').querySelector('span');
   
        switch (action) {
            case 'Set':
                item.style.color = 'green';
                item.style.fontSize = '18pt';
            break;
            case 'Reset':
                item.style.color = 'inherit'
                item.style.fontSize = '12pt';
            break;
      

}

}
    function AddMessage(e) {
let textbox = document.querySelector('#newmessagetext');
if (textbox.value === '') {
    window.alert('No text entered')
} else if ((e.code === 'Enter' || e.type === 'click') && confirm('Confirm you wish to post: ' + textbox.value) ){
let board = document.querySelector('.board')
let newitem = document.createElement('div')
newitem.classList.toggle('board-item')
newitem.innerText = (board.querySelectorAll('.board-item').length + 1) + ',' + textbox.value;
board.appendChild(newitem)
textbox.value = "";
textbox.focus();
}

}
function Spoof() {
let arr = ['Some random store','Address Line 1','Address Line 2','Address Line 3','Address Line 4','Address Line 5']
let footer = document.querySelector('footer')
footer.innerHTML = '';
for (let i = 0;i<arr.length;i++) {
let item = document.createElement('span');
if (i === 0) {
    item.innerHTML='<h4>' + arr[i] + '</h4>'
} else {
    item.innerText = arr[i];
}
footer.appendChild(item)

}
}
