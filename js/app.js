var jslogo = document.createElement("img")
jslogo.src = "js.png"

var p = document.createElement("p")
p.innerHTML = "Olá pessoal!"

var img = document.createElement("img")
img.src = "html.jpg"

var titulo = document.querySelector("h1")
var texto = document.createTextNode("Um texto qualquer")

titulo.appendChild(texto)

titulo.textContent = "Novo texto"

var lista = document.getElementsByTagName("ul")[0] // lista na posicao 00 inclui apenas a primeira lista(ul)
var itens = lista.children //pega todos os elementos filhos da variavel lista que traz a lista na posicao 0

var novoItem = document.createElement("li") //cria novo elemento lista
novoItem.textContent =  "Coca-Cola" // adiciona um texto ano novo item criado

lista.insertBefore(novoItem, itens[0])//insere na lista onde atraves dos parametros passados, ele add o novo
                                      //item da lista aos itens já adicionados e os colchetes definem em qual 
                                      //elemento da lista ele irá antecender
                                      
var lista2 = document.getElementsByTagName("ul")[1]
var itens2 = lista2.children

var novoItem2 = document.createElement("li")
novoItem2.textContent = "Bolacha"

lista2.replaceChild(novoItem2, itens2[2]) //substitui o novo elemento pelo elemento localizado na posicao
                                          //definida nas chaves do segundo parametro passado





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

    lista, itens, lista2, itens2,
    

                                            
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

// tipos de dados

//string 
var nome = "Luis Saldanha"
//number para qualquer tipo: float, double, int
var idade = 18
//boolean que retorna verdadeiro ou falso
var solteiro = true
//array
var frutas = ['goiaba', 'maca', 'pera']
//object
var carro = new Object()

carro.fabricacao = "2025"
carro.cor = "branco"
//function
var soma = function(a,b){
    return a+b
}
alert(typeof(soma))

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