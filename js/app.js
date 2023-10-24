//Variaveis
//escopo global, escopo local
//let (valor variavel), const (valor fixo)

let number = "5511999999999"
const n = "Felipe"

if(true){
    number = "5511777777777"
    //n = "Leo" , na tentativa de atribuir um novo valor a variavel n dara erro, 
    //pois o tipo da variavel const possui valor constante e portanto nao deve ser alterada
}

//tipos de dados

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

//Objeto
/* Um objeto é uma colecao de propriedades, e uma propriedade é uma associacao
entre um nome (ou chave) e um valor. Um valor de propriedade pode ser uma funcao,
que é entao considerado um metodo de objeto*/

let pessoa = {
    nome: "lucas",
    idade: 17,
    feliz: true,
    pets: ['cachorro', 'gato'],
    carros:{ //carro é um objeto dentro do objeto pessoa
        camaro: { //camaro é um objeto dentro do objeto carros que esta dentro do objeto pessoas e ele possui
                  //cor e placa
            placa: 123456,
            cor: 'amarelo',
        }
      },
       andar: function(km){ //funcao andar dentro do objeto pessoa que recebe a km por parametro e exibe pelo
                             //alert a quilometragem andada por uma pessoa
            alert(pessoa.nome + " andou" + km + " km")
    }

}

pessoa.andar(20) //chamada do metodo com o parametro da quilometragem (20)

//Array
//Diz respeito a uma estrutura que armazena uma colecao de valores

let meuArray = [
    'notebook', //indice 0
    1500,       //indice 1
    {memoria: '16gb', hd: '100gb'},//indice 2
                                    //indice para objeto com dois indices
                                    //^
                                    //|
                                    //|

    ['notebook dell', 'modelo 1000']// indice 3 (array dentro de array)
]

/*Operadores: 
aritmeticos
atribuicao
*/

let x = 10
let y = 5
let resultado
let n1 = 8
let n2 = 7
let media

let a = 5
let b = 2

a++ //incremento, add mais 1 unidade do valor da variavel "a"

b-- //decremento, remove 1 unidade do valor da variavel "b"

//a = a+b
a+=b //é a mesma que essa operacao "a = a+b", também pode ser feito multiplicacao,
     //divisao e subtracao como nos exemplos "a*=b", "a/=b" e "a-=b" etc.

resultado = x-y
media = (n1+n2)/2

/* Operadores:
logicos
comparacao
ternario*/

let k = 5

let l = 3

let mdia = 8

let frequencia = 80

let idad = 16 

let eleitor = (idade >= 16) ? "Pode votar" : "Nao pode votar" // verifica se a idade é maior ou igual a 16
                                                              // "?", esse operador verificao se a condicao
                                                              // dos parentes é verdadeira, e logo apos ele
                                                              // vem a consequencia em caso positivo ("Pode votar") 
                                                              //e depois dos ":" a consequencia em caso negativo ("Nao pode votar")

/* Condicionais:
if
else
switch case
*/

let pais = "Canada"
let estado = "SP"

/*if(pais == "Brasil")
{
    alert("sou brasileiro")
}
else if(estado == "SP")
{
    alert("sou paulistano")
}
else 
{
    alert("sou gringo")
}*/

switch (pais){
    case 'Brasil':
        alert("sou brasileiro")
        break
    case 'EUA':
        alert("sou gringo")
        break
    default:
        alert ("Padrao")
        break
}


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
    
    number, n,

    pessoa.carros.camaro.cor,

    meuArray[3][1], // acessando valor do objeto

    resultado, media,

    a, b,

    k == "5", 
    
    k === "5", // ""===" vai verificar se o tipo da variavel é igual ao da condicao
               // nesse caso é false, pois o tipo e inteiro e o valor na condicao é string
               //entao retorna "true"
    
    k != 4, //verifica se é diferente, nesse caso, retorna "false" por ser diferente do
              //valor da variavel "k"

    k !== "5",  // verifica se o tipo é diferente e retorna true, pois o tipo do valor
              //da variavel k é diferente do da condicao
              
    l > 4, //verifica se é maior, nesse caso, retorna "false", pois o valor de "l" é menor que 4
    l < 5, //verifica se é menor, nesse caso, retorna "true", pois o valor de "l" é menor que 5

    mdia >= 7 && frequencia >= 80, // verifica se a "mdia" é maior ou igual à 7 e se a frequencia é
                                  //maior ou igual à 80, nesse caso, retorna "true", por cumprir as
                                  //condicoes
    
    mdia >= 8 || frequencia >= 100, // verifica se uma das condicoes é verdadeira, nesse caso, retorna
                                   // "true", pois apenas uma condicao é satisfeita

    
    eleitor                                    
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