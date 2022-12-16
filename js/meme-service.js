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
    console.log('getmemestart')
    gMeme = {
        selectedImgId: setImg(imgId),
        selectedLineIdx: 0,
        lines: [{
            txt: 'try yourself',
            size: 20,
            align: 'center',
            color: 'white',
            font: 'Impact',
            strokeColor: 'black'
        }]
        
    }
    console.log('getmemeend')
}

function getMeme() {
    return gMeme
}

function setLineTxt(txt) {
    console.log('setlinetxtstart')
    //update the initial line txt to the user line txt
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
    // renderMeme()
    console.log('setlinetxtend')
}

function addLine(txt, x, y) {
    console.log('addlinestart')
    var line = {
        txt: txt,
        size: 20,
        align: 'center',
        color: 'white',
        font: 'Impact',
        strokeColor: 'black'
    }
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = line.color
    gCtx.font = '20px Impact'
    gCtx.textAlign = line.align
    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
    gMeme.lines.push(line)
    gMeme.selectedLineIdx +=1
    console.log('addlinestart')
}

function removeLine() {
    console.log('removelinestart')
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx -= 1
    console.log('removelineend')
}

function getImgs() {
    console.log('getimgstart')
    console.log('getimgend')
    return gImgs
}

function setImg(imgId) {
    console.log('setimgstart')
    const img = gImgs.find(img => img.id === imgId)
    console.log(gImgs)
    console.log(imgId)
    console.log('setimgend', img)
    
    return img
    // gImgs.find(img => img.id === imgId)
    // gMeme.selectedImgId
}
