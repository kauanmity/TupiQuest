/* Aula 20 MaiaQuiz  */

let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Quais os principais equipamentos utilizados na preparação da areia verde",
    alternativaA : "Aerador, dessecador, peneirador, misturador",
    alternativaB : "Prenssa, dessecador, peneirador, sentrifuga",
    alternativaC : "Misturador, aerador, dosador, peneirador, exaustor",
    alternativaD : "Misturador, aerador, dessecador, peneirador, exaustor", //Esse
    correta      : "Misturador, aerador, dosador, peneirador, exaustor",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Como podemos evitar na formação cristalina devido ao resfriamento do lingote, estruturas frágeis nos cantos?",
    alternativaA : "Arredondando-se os cantos do lingote", //Esse
    alternativaB : "Criando um ângulo de saída no molde",
    alternativaC : "Arredondando-se os cantos da peça",
    alternativaD : "Arredondando-se os cantos do molde",
    correta      : "Arredondando-se os cantos do lingote",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Depois do vazamento no molde, que período é apresentada a contração liquida",
    alternativaA : "Do resfriamento do metal até o final da solidificação",
    alternativaB : "Do resfriamento do metal até o inicio da solidificação",
    alternativaC : "Do resfriamento do metal até o metade da solidificação",
    alternativaD : "Do aquecimento do metal até o inicio da solidificação",
    correta      : "Do resfriamento do metal até o inicio da solidificação",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "O que é contração de solidificação",
    alternativaA : "É a variação de volume que ocorre durante a mudança do estado sólido para o liquido",
    alternativaB : "É a variação de volume que ocorre durante a mudança do estado liquido para o sólido",
    alternativaC : "É a variação de volume que ocorre durante a mudança do estado liquido para o sólido",
    alternativaD : "Nenhum das anteriores",
    correta      : "É a variação de volume que ocorre durante a mudança do estado liquido para o sólido",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "O que é contração sólida no metal vazado?",
    alternativaA : "É a variação de volume que ocorre já no estado sólido, desde a temperatura do fim da solidificação até a temperatura ambiente",
    alternativaB : "2",
    alternativaC : "3",
    alternativaD : "4",
    correta      : "É a variação de volume que ocorre já no estado sólido, desde a temperatura do fim da solidificação até a temperatura ambiente",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "O que é contração sólida no metal vazado?",
    alternativaA : "É a variação de volume que ocorre já no estado sólido, desde a temperatura do fim da solidificação até a temperatura ambiente",
    alternativaB : "2",
    alternativaC : "3",
    alternativaD : "3",
    correta      : "É a variação de volume que ocorre já no estado sólido, desde a temperatura do fim da solidificação até a temperatura ambiente",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    /*/setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)/*/
}
