'use strict'


function onInit() {
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
