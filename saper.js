
let inputContainer = document.getElementsByTagName('input');
let breakContainer = document.querySelector('.break');

function t1() {
    function createCell() {
        let cellContainer = document.querySelector('.cell');
        cellContainer.style.width = '50px';
        cellContainer.style.height = '50px';
        cellContainer.style.backgroundColor = "green";
    }
    createCell();
    for (let z = 1; z < inputContainer.length; z++) {
        let y = parseInt(inputContainer[0].value);
        let x = parseInt(inputContainer[1].value);
        let a = document.querySelector('.cell');
        let b = a.outerHTML;
        let c = breakContainer.outerHTML;
        let out = ''
        for (let i = 0; i < y; i++) {
            for (let k = 0; k < x; k++) {
                out += '&nbsp;' + b + '&nbsp;';
            }
            out += c;
        }
        document.querySelector('.output').innerHTML = out;
        // document.querySelector('.output').style.setProperty('--grid-rows', `repeat(${x}, auto)`)
        // document.querySelector('.output').style.setProperty('--grid-colomns', `repeat(${y}, auto)`)
        a.outerHTML = '';
    }

}
document.querySelector('.button').onclick = t1;