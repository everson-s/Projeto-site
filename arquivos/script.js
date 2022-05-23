let time = 6000,
    currentImageIndex = 0,
    images = document.querySelectorAll(".slide img")
    maxImage = images.length;

function NextImage(){
    //console.log(images) mostra a lista de imagens

    //console.log(images[1])
    //Remove a classe selected da imagem corrente
    images[currentImageIndex].classList.remove("selected") 
    
    //incrementa o array de imagens
    currentImageIndex++

    //condição para voltar à primeira imagem, caso o currentIndex seja maior ou igual ao tamanho do array
    if(currentImageIndex >= maxImage)
    currentImageIndex = 0

    //adiciona a classe selected ao array da imagem corrent
    images[currentImageIndex].classList.add("selected")
}

function start(){
    //console.log("Window loaded")
    setInterval(() => {
        //console.log("Está funcionando")

        //troca de imagem
        NextImage()
    }, time)
}

window.addEventListener("load", start)