var jslogo = document.createElement("img")
jslogo.src = "js.png"

var p = document.createElement("p")
p.innerHTML = "Olá pessoal!"

var img = document.createElement("img")
img.src = "html.jpg"

var titulo = document.querySelector("h1")
var texto = document.createTextNode("Um texto qualquer")

titulo.appendChild(texto)

titulo.textContent = "Um novo texto"

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

    document.getElementById("sorocaba").parentNode.parentNode,

    document.getElementById("btn-set").addEventListener("click", function(){
        document.getElementById("title").setAttribute("class", "red")
    }),

    document.getElementById("btn-remove").addEventListener("click", function(){
        document.getElementById("title").removeAttribute("class", "red")
    }),

    document.getElementById("btn-get").addEventListener("click", function(){
        var v = document.getElementById("title").getAttribute("class")
        document.getElementById("pg").innerHTML = v
    }),

   document.getElementById("btn-s").addEventListener("click", function(){
        document.getElementById("pr").setAttribute("class", "greenyellow")
   }),

   document.getElementById("btn-r").addEventListener("click", function(){
        document.getElementById("pr").removeAttribute("class", "greenyellow")
   }),

   document.getElementById("btn-g").addEventListener("click", function(){
        var value = document.getElementById("pr").getAttribute("class")
        document.getElementById("class").innerHTML = value
   }),




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

    //retorna o(s) elemento(s) pai(s) de um elemento filho(s) com o comando parentNode, em um
    //conjunto de divs ele retornara a primeira div de um conjunto de divs, a div "pai"
                                             
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