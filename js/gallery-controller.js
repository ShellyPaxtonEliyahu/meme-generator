'use strict'


function onInit() {
    document.querySelector('.canvas-editor').hidden = true
    renderGallery()
}

function renderGallery() {
    const imgs = getImgs()
    var strHTMLs = imgs.map(img => {
        return `<img src="${img.url}" onclick="onImgSelect(${img.id})">`
    })
    const elGallery = document.querySelector('.gallery')
    elGallery.innerHTML = strHTMLs.join('')
}


function onImgSelect(imgId) {
    onMemeInit(imgId)
    document.querySelector('.gallery-container').hidden = true
}
