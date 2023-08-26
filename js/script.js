function toggleMode(){
    // aqui estou pegando a instrução html
    const html = document.documentElement
    html.classList.toggle('light')
 // ######## este é uma outra forma de fazer a alteração utilizando o if, else

    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // } else{
    //     html.classList.add('light')
    // }

// #########
    
    // pegar a tag img
    const img = document.querySelector('#profile img')
    
    // substituir a imagem
    if(html.classList.contains('light')){
        // se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar_clei.png')
    } else{
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar_clei.png')
    }
}