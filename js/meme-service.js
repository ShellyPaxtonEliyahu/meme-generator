'use strict'


let gMeme = {
    selectedImgId: 1,
    selectedImgUrl: 'memeImgs/1.jpg',
    selectedLineIdx: 0,
    lines: [{
        txt: 'xx',
        size: 20,
        align: 'center',
        color:'white',
        font: 'Impact'
    }]
}


function getMeme(){
    //holding the memes for the func renderMeme()
   return gMeme
}

function setLineTxt(value) {
    //update the initial line txt to the user line txt
    gMeme.lines[getMeme.selectedLineIdx].txt = value
    renderMeme()
}
