var jslogo = document.createElement("img")
jslogo.src = "js.png"

var paragrafo = document.createElement("p")
paragrafo.innerHTML = "Olá"

console.log(
    document.getElementById("fruta").innerHTML,
    
    document.getElementsByClassName("carro")[1].innerHTML,
    
    document.getElementsByTagName("div")[4].innerHTML, 
    
    document.getElementsByTagName("p")[0].innerHTML,
    
    document.querySelector("#p1").innerHTML,

    document.getElementById("futebol-europeu").querySelectorAll(".times")[1].innerHTML,

    jslogo, paragrafo

                                            
     //getElementById() retorna o elemento pelo id passado como parametro

    //getElementsByClassName() retorna o(s) elementos pelo nome da classe
                                            //especificada no parametro
                                            
    //getElementsByTagName() retorna o(s) elemento(s) pela tag passada
                                            //como parametro
                                             
    //querySelector() retorna o elemento que ele encontrar primeiro 
    // a nao ser que seja especificado um id como parametro
                                            
    //querySelectorAll() retorna um objeto nodelist representando
    // todos os elementos do documento que estejam de acordo com o 
    //parametro informado

    //createElement() cria elementos como tags, a partir do parametro especificado na função 
                                             
)
alert(screen.width)

var fruta = document.getElementById("fruta")
fruta.innerHTML = "Manga"
fruta.style.color = "orange"
fruta.style.backgroundColor = "#333"
fruta.style.height = "400px"

var imagem = document.getElementById("imagem")
imagem.src = "html.jpg"
imagem.width = "300"
imagem.height = "300"

document.getElementById("largura").innerHTML = screen.width