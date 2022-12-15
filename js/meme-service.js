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

const gMeme = {
        selectedImgId: 1,
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

function getMeme() {
    //holding the memes for the func renderMeme()
    return gMeme
}

function setLineTxt(txt) {
    //update the initial line txt to the user line txt
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
    renderMeme()
}

function addLine(txt, x, y) {
        gMeme[imgId].lines.forEach(line => {
            gCtx.lineWidth = 2
            gCtx.strokStyle = 'black'
            gCtx.fillStyle = line.color
            gCtx.font = '20px Impact'
            gCtx.textAlign = line.align
            gCtx.fillText(txt, x, y)
            gCtx.strokText(txt, x, y)
        })
        gMeme[imgId].lines.push(line)
        gMeme[imgId].selectedLineIdx +=1

}

function removeLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx -= 1
}

function getImgs() {
    return gImgs
}

function setImg(imgId) {
    return gImgs.find(img => img.id === imgId)
    // gMeme.selectedImgId
}
