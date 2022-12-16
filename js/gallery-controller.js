'use strict'


function onInit() {
    console.log('oninitstart')
    document.querySelector('.canvas-editor').hidden = true
    renderGallery()
    console.log('oninitend')
}

function renderGallery() {
    console.log('renderGallerystart')
    const imgs = getImgs()
    var strHTMLs = imgs.map(img => {
        return `<img src="${img.url}" onclick="onImgSelect(${img.id})">`
    })
    const elGallery = document.querySelector('.gallery')
    elGallery.innerHTML = strHTMLs.join('')
    console.log('renderGalleryend')

}


function onImgSelect(imgId) {
    console.log('onimgselectstart')
    onMemeInit(imgId)
    document.querySelector('.gallery-container').hidden = true
    console.log('onimgselectend')
}
