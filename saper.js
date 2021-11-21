
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

    let maxValcell = (amountX * amountY) - 1;
    // console.log(maxValcell)

    let fieldContainer = document.querySelectorAll('.cell');
    // console.log(fieldContainer)
    for (let k = 0; k < 3; k++) {
        // console.log('*')
        let bombAdress = (Math.round(Math.random() * (0 - maxValcell) + maxValcell)) + 1;
        console.log(bombAdress)
        for (let i = 0; i < fieldContainer.length; i++) {
            fieldContainer[bombAdress].style.background = 'orange'
        }
        
    }

}
createArea(3, 4);



