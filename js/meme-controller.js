'use strict'

let gElCanvas
let gCtx


function onMemeInit(imgId) {
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    document.querySelector('.gallery').hidden = true
    document.querySelector('.canvas-editor').hidden = false
    createMeme(imgId)
    renderMeme(imgId)
    resizeCanvas()
}

function renderMeme(imgId) {
    const img = setImg(imgId)
    const elImg = new Image()
    elImg.src = img.url
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        renderTxt()
    }
}

function renderTxt() {
    const meme = getMeme()
    meme.lines.forEach((line, lineIdx) => drawTxt(line, lineIdx))
}

function onSetLineTxt(txt) {
    setLineTxt(txt)
    const meme = getMeme()
    renderMeme(meme.selectedImgId)
}

function drawTxt(line, lineIdx) {
    
    const x = gElCanvas.width / 2
    let y
    switch (lineIdx) {
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
        case lineIdx >= 5:
            y = gElCanvas.height / 2 + 70
            break;
    }
    renderLine(line, x, y)
}

function onAddLine() {
    addLine()
    const meme = getMeme()
    renderMeme(meme.selectedImgId)
}

function renderLine(line, x, y) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = line.color
    gCtx.font = `${line.size}px Impact`
    gCtx.textAlign = line.align
    gCtx.fillText(line.txt, x, y)
    gCtx.strokeText(line.txt, x, y)
}

function onSwitchLines() {
    const meme = getMeme()
    var switchWith = meme.selectedLineIdx === 0 ? meme.lines.length-1 : meme.selectedLineIdx-1
    var line = meme.lines[meme.selectedLineIdx]
    meme.lines[meme.selectedLineIdx] = meme.lines[switchWith]
    meme.lines[switchWith] = line
    renderMeme(meme.selectedImgId)
}

function onSelectLine(lineIdx) {
    const meme = getMeme()
    meme.selectedLineIdx = lineIdx
    renderMeme(meme.selectedImgId)
}

function onRemoveLine() {
    removeLine()
    const meme = getMeme()
    renderMeme(meme.selectedImgId)
}

function onChangeFontSize(diff) {
    const meme = getMeme()
    meme.lines[meme.selectedLineIdx].size += diff
    renderMeme(meme.selectedImgId)
}

function onChangeTextAlign(value) {
    const meme = getMeme()
    meme.lines[meme.selectedLineIdx].align = value
    renderMeme(meme.selectedImgId)
}

function onChangeTextColor(color) {
    const meme = getMeme()
    meme.lines[meme.selectedLineIdx].color = color.value
    renderMeme(meme.selectedImgId)
}


function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth - 20
}