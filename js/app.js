var jslogo = document.createElement("img")
jslogo.src = "js.png"

var p = document.createElement("p")
p.innerHTML = "Olá pessoal!"

var img = document.createElement("img")
img.src = "html.jpg"

document.getElementById("conteudo").appendChild(p)
document.getElementById("conteudo").appendChild(img)
document.getElementById("conteudo").removeChild(img)



var paragrafo = document.createElement("p")
paragrafo.innerHTML = "Olá"

console.log(
    document.getElementById("fruta").innerHTML,
    
    document.getElementsByClassName("carro")[1].innerHTML,
    
    document.getElementsByTagName("div")[4].innerHTML, 
    
    document.getElementsByTagName("p")[0].innerHTML,
    
    document.querySelector("#p1").innerHTML,

    document.getElementById("futebol-europeu").querySelectorAll(".times")[1].innerHTML,

    document.body.childNodes,

    jslogo, paragrafo,
    

                                            
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

    //apendChild insere um elemento filho em um elemento pai

    //removeChild remove um elemento filho em um elemento pai

    //childNodes retorna os elementos nós de outro nó, por exemplo, body.childNodes retonará 
    //os nós filhos do nó body do em formato nodelist
                                             
)
alert(screen.width)

var lista = document.body.childNodes
alert(lista[29].nodeType)
alert(lista[29].nodeName)
alert(lista[29].nodeValue)

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