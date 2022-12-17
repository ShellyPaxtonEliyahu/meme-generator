'use strict'
const gImgs = [
    { id: 1, url: 'memeImgs/1.jpg', keywords: ['trump', 'politics'] },
    { id: 2, url: 'memeImgs/2.jpg', keywords: ['puppy', 'cute'] },
    { id: 3, url: 'memeImgs/3.jpg', keywords: ['baby', 'puppy'] },
    { id: 4, url: 'memeImgs/4.jpg', keywords: ['cat', 'sleepy'] },
    { id: 5, url: 'memeImgs/5.jpg', keywords: ['baby', 'cute'] },
    { id: 6, url: 'memeImgs/6.jpg', keywords: ['sarcastic', 'guy'] },
    { id: 7, url: 'memeImgs/7.jpg', keywords: ['baby', 'funny'] },
    { id: 8, url: 'memeImgs/8.jpg', keywords: ['tell', 'about'] },
    { id: 9, url: 'memeImgs/9.jpg', keywords: ['baby', 'funny'] },
    { id: 10, url: 'memeImgs/10.jpg', keywords: ['funny', 'politics'] },
    { id: 11, url: 'memeImgs/11.jpg', keywords: ['kiss', 'sports'] },
    { id: 12, url: 'memeImgs/12.jpg', keywords: ['busted', 'point'] },
    { id: 13, url: 'memeImgs/13.jpg', keywords: ['sarcastic', 'cheers'] },
    { id: 14, url: 'memeImgs/14.jpg', keywords: ['matrix', 'sunglasses'] },
    { id: 15, url: 'memeImgs/15.jpg', keywords: ['guy', 'movie'] },
    { id: 16, url: 'memeImgs/16.jpg', keywords: ['funny', 'guy'] },
    { id: 17, url: 'memeImgs/17.jpg', keywords: ['politics', 'two'] },
    { id: 18, url: 'memeImgs/18.jpg', keywords: ['movie', 'everywhere'] },
]

var gMeme

function createMeme(imgId) {
    gMeme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: []
    }
    addLine()
}

function addLine() {
    var line = {
        txt: 'try yourself',
        size: 30,
        align: 'center',
        color: 'white',
        font: 'Impact',
        strokeColor: 'black'
    }
    gMeme.selectedLineIdx = gMeme.lines.length
    gMeme.lines.push(line)
}

function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function removeLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = 0
}

function getImgs() {
    return gImgs
}

function setImg(imgId) {
    const img = gImgs.find(img => img.id === imgId)
    return img
}
