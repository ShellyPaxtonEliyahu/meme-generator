'use strict'


function onInit() {
    document.querySelector('.canvas-editor').hidden = true
    renderGallery()
    onMemeInit()
}

function renderGallery() {
    //render the images on the home page
    const imgs = getImgs()
    var strHTMLs = imgs.map(img => {
        return `<img src="${img.url}" onclick="onImgSelect(${img.id})">`
    })
    const elGallery = document.querySelector('.gallery')
    elGallery.innerHTML = strHTMLs.join('')

}


function onImgSelect(imgId) {
    // var elGallery = document.querySelector('.gallery')
    // elGallery.classList.add('hide')
    // var elEditor = document.querySelector('.canvas-editor')
    // elEditor.classList.remove('hide')
    renderMeme(imgId)
}