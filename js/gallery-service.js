'use strict'


var gImgs = [
    { id: 1, url: 'memeImgs/1.jpg', keywords: ['trump,politics'] },
    { id: 2, url: 'memeImgs/2.jpg', keywords: ['puppy', 'cute'] },
    { id: 3, url: 'memeImgs/3.jpg', keywords: ['baby', 'puppy'] },
    { id: 4, url: 'memeImgs/4.jpg', keywords: ['cat', 'sleepy'] },
    { id: 5, url: 'memeImgs/5.jpg', keywords: ['baby', 'cute'] },
    { id: 6, url: 'memeImgs/6.jpg', keywords: ['sarcastic',''] },
    { id: 7, url: 'memeImgs/7.jpg', keywords: ['baby', 'sarcastic'] },
    { id: 8, url: 'memeImgs/8.jpg', keywords: ['', ''] },
    { id: 9, url: 'memeImgs/9.jpg', keywords: ['baby', 'funny'] },
    { id: 10, url: 'memeImgs/10.jpg', keywords: ['funny', ''] },
    { id: 11, url: 'memeImgs/11.jpg', keywords: ['', ''] },
    { id: 12, url: 'memeImgs/12.jpg', keywords: ['busted', ''] },
    { id: 13, url: 'memeImgs/13.jpg', keywords: ['sarcastic', ''] },
    { id: 14, url: 'memeImgs/14.jpg', keywords: ['', ''] },
    { id: 15, url: 'memeImgs/15.jpg', keywords: ['', ''] },
    { id: 16, url: 'memeImgs/16.jpg', keywords: ['funny', ''] },
    { id: 17, url: 'memeImgs/17.jpg', keywords: ['politics', ''] },
    { id: 18, url: 'memeImgs/18.jpg', keywords: ['animated', ''] },
]

function getImgs() {
    return gImgs
}



function setImg(imgId) {
    gMeme.selectedImgId = imgId
    gMeme.selectedImgUrl = `memeImgs/${imgId}.jpg`
}