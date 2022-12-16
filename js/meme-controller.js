'use strict'

let gElCanvas
let gCtx


function onMemeInit(imgId) {
    console.log('memeinitstart')
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    document.querySelector('.gallery').hidden = true
    document.querySelector('.canvas-editor').hidden = false
    createMeme(imgId)
    renderMeme(imgId)
    resizeCanvas()
    console.log('memeinitend')
}

function renderMeme(imgId) {
    console.log('rendermemestart')
    // render an image to the canvas 
    // render ininitial text-line
    const img = setImg(imgId)
    const elImg = new Image()
    elImg.src = img.url
    console.log('elimg',elImg)
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        renderTxt()
    }
    console.log('rendermemeend')
}

function renderTxt() {
    console.log('rendertxtstart')
    const meme = getMeme()
    meme.lines.forEach((line, selectedLineIdx) => drawTxt(line, selectedLineIdx))
    console.log('rendertxtend')
}

function onSetLineTxt(txt) {
    console.log('onsetlinetxtstart')
    setLineTxt(txt)
    // renderMeme()
    console.log('onsetlinetxtend')
}

function drawTxt(txt, selectedLineIdx) {
    console.log('drawtxtstart')
    const memeLineIdx = txt.selectedLineIdx

    const x = gElCanvas.width / 2
    let y
    switch (memeLineIdx) {
        case 0:
            y = 50
            break;
        case 1:
            y = gElCanvas.height - 50
            break;
        case 2:
            y = gElCanvas.height / 2
            break;
        case 3:
            y = gElCanvas.height / 2 - 25
            break;
        case 4:
            y = gElCanvas.height / 2 + 25
            break;
        case memeLineIdx >= 5:
            y = gElCanvas.height / 2 + 70
            break;
    }
    addLine(txt, x, y)
    console.log('drawtxtend')
}

function onSwitchLines() {
    console.log('onswitchstart')
    const meme = getMeme()
    meme.selectedLineIdx += 1
    document.querySelector('.meme-text').value = ''
    // renderMeme()
    console.log('onswitchend')

}


function onRemoveLine() {
    console.log('onremovestart')
    removeLine()
    // renderMeme()
    document.querySelector('.meme-text').value = ''
    console.log('onremoveend')

}

function onChangeFontSize(diff) {
    console.log('onchangefontsizestart')
    const meme = getMeme()
    meme.lines[meme.selectedLineIdx].size += diff
    // renderMeme()
    console.log('onchangefontsizeend')
}

function onChangeTextAlign(value) {
    console.log('onchangetxtalignstart')
    const meme = getMeme()
    meme.lines[meme.selectedLineIdx].align = value
    // renderMeme()
    console.log('onchangetxtalignend')
}

function onChangeTextColor(color) {
    console.log('onchangetxtcolorstart')
    const meme = getMeme()
    meme.lines[meme.selectedLineIdx].color = color.value
    // renderMeme()
    console.log('onchangetxtcolorend')
}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth - 20
}