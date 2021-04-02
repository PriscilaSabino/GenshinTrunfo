var cartaAmber = {
  nome: "Amber",
  imagem: "http://pm1.narvii.com/7721/94dd09f8e928eeabe14cc7c2ed8638ad12eb087fr1-724-724v2_00.jpg",
  atributos: {
      
      ataque: 30,
      defesa: 60,
      magia: 10
  }
}

var cartaKeya = {
  nome: "Keya",
  imagem: "https://skillpoint.com.br/wp-content/uploads/2021/02/kaeya-genshin-impact-banner.jpg",
  atributos: {
    
      ataque: 70,
      defesa: 65,
      magia: 80
  }
}

var cartaLisa = {
  nome: "Lisa",
  imagem: "https://genshinpro.com.br/wp-content/uploads/2020/11/portrait-lisa.jpg",
  atributos: {
      
      ataque: 30,
      defesa: 65,
      magia: 100
  }
}
var cartaLumine = {
  nome: "Lumine / Traveler",
  imagem: "https://static.zerochan.net/Lumine.%28Genshin.Impact%29.full.3101222.png",
  atributos: {
       
      ataque: 80,
      defesa: 65,
      magia: 80
  }
}

var cartaDiluc = {
  nome: "SUPER TRUNFO - Diluc",
  imagem: "https://cdn.mos.cms.futurecdn.net/JCmb5Spk5iTnpqiDbMUsXN.jpg",
  atributos: {
      
      ataque: 100,
      defesa: 100,
      magia: 100
  }
}
  var cartaSucrose = {
  nome: "Sucrose",
  imagem: "https://i.pinimg.com/originals/65/d0/50/65d0509a21548cd89095bc2f7901c338.jpg",
  atributos: {
    
      ataque: 50,
      defesa: 60,
      magia: 100
  }
}
  var cartaBarbara = {
  nome: "Bárbara",
  imagem: "https://criticalhits.com.br/wp-content/uploads/2021/03/Genshin-Impact-Barbara-Best-Build.jpg",
  atributos: {
    
      ataque: 10,
      defesa: 60,
      magia: 75
  }
}
  var cartaNoelle = {
  nome: "Noelle",
  imagem: "https://www.siliconera.com/wp-content/uploads/2021/01/genshin-impact-noelle-4-710x400.jpg",
  atributos: {
    
      ataque: 90,
      defesa: 90,
      magia: 10
  }
}
  var cartaRazor = {
  nome: "Razor",
  imagem: "https://skillpoint.com.br/wp-content/uploads/2021/01/genshin-impact-razor.jpg",
  atributos: {
    
      ataque: 100,
      defesa: 60,
      magia: 15
  }
}
  var cartaBennet = {
  nome: "Bennet",
  imagem: "https://genshinpro.com.br/wp-content/uploads/2020/11/portrait-bennett.jpg",
  atributos: {
    
      ataque: 70,
      defesa: 95,
      magia: 95
  }
}


var cartaMaquina
var cartaJogador
var cartas = [cartaAmber, cartaLisa, cartaKeya, cartaLumine, cartaBennet, cartaRazor, cartaNoelle, cartaBarbara, cartaSucrose, cartaDiluc]
// 0          1           2
var pontosJogador = 0
var pontosMaquina = 0
atualizaPlacar ()
atualizarQtdCartas()

function atualizarQtdCartas(){
  var divQtdCartas = document.getElementById('quantidade-cartas')
  var html = "Quantidade de cartas no jogo: " + cartas.length
  divQtdCartas.innerHTML = html
}

function atualizaPlacar () {
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + " / " + pontosMaquina + " Máquina"
  divPlacar.innerHTML = html
  
}

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
  cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador,1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}


function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
      pontosJogador ++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
      pontosMaquina ++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  
  
  if (cartas.length==0){
    alert("Fim de Jogo")
    if (pontosJogador>pontosMaquina){
      htmlResultado = '<p class="resultado-final">Venceu</p>'
    }else if(pontosJogador<pontosMaquina){
      htmlResultado = '<p class="resultado-final">Perdeu</p>'
    }else{
      htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  }else{
     document.getElementById('btnProximaRodada').disabled = false
  }

    divResultado.innerHTML = htmlResultado
  document.getElementById('btnJogar').disabled = true
 
  atualizaPlacar ()
  exibeCartaMaquina()
  atualizarQtdCartas()
  
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
  var divCartas = document.getElementById('cartas')
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta" </div>`

  document.getElementById('btnSortear').disabled = false
   document.getElementById('btnJogar').disabled = true
   document.getElementById('btnProximaRodada').disabled = true
  var divResultado = document.getElementById('resultado')
  divResultado.innerHTML = ""
  }
