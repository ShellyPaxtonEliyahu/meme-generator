'use strict'

let gElCanvas
let gCtx


function onMemeInit() {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    document.querySelector('.gallery').hidden = true
    document.querySelector('.canvas-editor').hidden = false
    renderMeme()
    resizeCanvas()
}

function renderMeme() {
    // render an image to the canvas 
    // render ininitial text-line
    const meme = getMeme()
    const img = setImg(meme.selectedImgId)
    const elImg = new Image()
    elImg.src = img.url
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        renderTxt()
    }
}

function renderTxt() {
    const meme = getMeme()
    meme.lines.forEach((line, selectedLineIdx) => drawTxt(line, selectedLineIdx))
}

function onSetLineTxt(elInput) {
    setLineTxt(`${elInput.value}`)
    renderMeme()
}

function drawTxt(txt, selectedLineIdx) {
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

    }
    addLine(txt,x,y)
    // document.querySelector('.meme-text').value = ''
    renderMeme()
}

function onSwitchLines() {
    const meme = getMeme()
    meme.selectedLineIdx += 1
    document.querySelector('.meme-text').value = ''
    renderMeme()

}


function onRemoveLine() {
    removeLine()
    renderMeme()
    document.querySelector('.meme-text').value = ''

}

function onChangeFontSize(diff) {
    const meme = getMeme()
    meme.lines[meme.selectedLineIdx].size += diff
    renderMeme()
}

function onChangeTextAlign(value) {
    const meme = getMeme()
    meme.lines[meme.selectedLineIdx].align = value
    renderMeme()
}

function onChangeTextColor(color) {
    const meme = getMeme()
    meme.lines[meme.selectedLineIdx].color = color.value
    renderMeme()
}














function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth - 20
}