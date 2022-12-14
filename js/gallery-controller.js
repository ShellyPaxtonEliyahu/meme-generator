'use strict'


function onInit() {
    onMemeInit()
    renderGallery()
}

function renderGallery() {
    //render the images on the home page
    var imgs = getImgs()
    var strHTMLs = imgs.map( img => {
        return `<img src="${img.url}" onclick="onImgSelect(${img.id})">`
    })
    document.querySelector('.gallery').innerHTML = strHTMLs.join('')

}


function onImgSelect(imgId) {
    var elGallery = document.querySelector('.gallery')
    elGallery.classList.add('hide')
    var elEditor = document.querySelector('.canvas-editor')
    elEditor.classList.remove('hide')

    setImg()
    renderGallery()
    renderMeme()
}