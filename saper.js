
let breakContainer = document.querySelector('.break');
function createArea(amountX, amountY) {
    // формироваие оформления ячейки
    let cellContainer = document.querySelector('.cell');
    cellContainer.style.width = '50px';
    cellContainer.style.height = '50px';
    cellContainer.style.backgroundColor = "green";
    // формироваие оформления ячейки//
    let pasteCell = document.querySelector('.cell').outerHTML;
    let formBreak = breakContainer.outerHTML;
    let out = ''
    for (let i = 0; i < amountY; i++) {
        for (let k = 0; k < amountX; k++) {
            out += '&nbsp;' + pasteCell + '&nbsp;';
        }
        out += formBreak;
    }
    document.querySelector('.output').innerHTML = out;
    document.querySelector('.cell').outerHTML = '';
}
createArea(3, 4);