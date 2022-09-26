document.getElementById('tela1').style.visibility = 'hidden'
document.getElementById('welcome').style.visibility = 'hidden'
document.getElementById('instrução').style.visibility = 'hidden'
document.getElementById('ranking').style.visibility = 'visible'

function esconder1(){
    document.getElementById('tela1').style.visibility = 'hidden'
    document.getElementById('welcome').style.visibility = 'hidden'
    document.getElementById('ranking').style.visibility = 'hidden'
    document.getElementById('instrução').style.visibility = 'visible'
}
function esconder2(){
    document.getElementById('tela1').style.visibility = 'hidden'
    document.getElementById('welcome').style.visibility = 'visible'
    document.getElementById('ranking').style.visibility = 'hidden'
    document.getElementById('instrução').style.visibility = 'hidden'
}
function esconder3(){
    document.getElementById('tela1').style.visibility = 'visible'
    document.getElementById('welcome').style.visibility = 'hidden'
    document.getElementById('ranking').style.visibility = 'hidden'
    document.getElementById('instrução').style.visibility = 'hidden'
}

fetch('http://localhost:3000/pontuacao', {
    method: 'get',
    headers: {
        'Content-Type': 'application/json',
    }
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        document.getElementById("top1").innerHTML = "TOP 1: " + response.sort((a, b) => b.score - a.score)[0].player + " - [ " + response.sort((a, b) => b.score - a.score)[0].score + " ]"
        document.getElementById("top2").innerHTML = "TOP 2: " + response.sort((a, b) => b.score - a.score)[1].player + " - [ " + response.sort((a, b) => b.score - a.score)[1].score + " ]"
        document.getElementById("top3").innerHTML = "TOP 3: " + response.sort((a, b) => b.score - a.score)[2].player + " - [ " + response.sort((a, b) => b.score - a.score)[2].score + " ]"
});

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
    pergunta     : "Quais os principais equipamentos utilizados na preparação da areia verde?",
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
    pergunta     : "Depois do vazamento no molde, que período é apresentada a contração liquida?",
    alternativaA : "Do resfriamento do metal até o final da solidificação",
    alternativaB : "Do resfriamento do metal até o inicio da solidificação",
    alternativaC : "Do resfriamento do metal até o metade da solidificação",
    alternativaD : "Do aquecimento do metal até o inicio da solidificação",
    correta      : "Do resfriamento do metal até o inicio da solidificação",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "O que é contração de solidificação?",
    alternativaA : "É a variação de volume que ocorre durante a mudança do estado sólido para o liquido",
    alternativaB : "É a variação de volume que ocorre durante a mudança do estado liquido para o sólido",
    alternativaC : "É a variação de volume que ocorre durante a mudança do estado liquido para o sólido",
    alternativaD : "Nenhum das anteriores",
    correta      : "É a variação de volume que ocorre durante a mudança do estado liquido para o sólido",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual a composição da areia verde?",
    alternativaA : "Areia, areia de retorno, água, bentonita, aditivos",
    alternativaB : "Areia, resina, bentonita, aditivo",
    alternativaC : "Areia de retorno, água, bentonita, aditivo",
    alternativaD : "Areia de retorno, bentonita, resina",
    correta      : "Areia, areia de retorno, água, bentonita, aditivos",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Quais os principais equipamentos utilizados na preparação da areia verde?",
    alternativaA : "Aerador, dessecador, peneirador, misturador",
    alternativaB : "Prenssa, dessecador, peneirador, sentrifuga",
    alternativaC : "Misturador, aerador, dosador, peneirador, exaustor",
    alternativaD : "Desmoldador, exaustor, dessecador, misturador",
    correta      : "Misturador, aerador, dosador, peneirador, exaustor",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "O que é processo de fundição por centrifugação?",
    alternativaA : "Este processo utiliza a força centrífuga do movimento circular da matriz para gerar a pressão metalosférica que dará a forma ao tubo.",
    alternativaB : "Este processo utiliza a força centrífuga do movimento circular da matriz para gerar a pressão metalostática que dará a forma ao tubo.",
    alternativaC : "Este processo utiliza a força centrífuga do movimento circular da matriz para gerar a pressão metalografica que dará a forma ao tubo.",
    alternativaD : "Este processo utiliza a força do movimento circular para gerar a pressão metalografica que dará a forma ao tubo.",
    correta      : "Este processo utiliza a força centrífuga do movimento circular da matriz para gerar a pressão metalostática que dará a forma ao tubo.",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Como podemos evitar na formação cristalina devido ao resfriamento do lingote, estruturas frágeis nos cantos? ",
    alternativaA : "Arredondando-se os cantos do lingote.",
    alternativaB : "criando um ângulo de saída no molde",
    alternativaC : "criando um ângulo de saída na peça",
    alternativaD : "Arredondando-se os cantos da peça",
    correta      : "Arredondando-se os cantos do lingote.",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Para garantir que a areia não fique contaminada com respingos de ferro, se utiliza um equipamento de processo, conhecido como?",
    alternativaA : "Resfriador de areia",
    alternativaB : "Exaustor de finos",
    alternativaC : "Separador magnético",
    alternativaD : "Desmoldador",
    correta      : "Separador magnético",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Os ferros fundidos brancos são a matéria prima para a obtenção dos ferros maleáveis branco ou preto, para tanto devem sofrer um tratamento térmico denominado  de?",
    alternativaA : "Têmpera e revindo",
    alternativaB : "Alívio de tensões",
    alternativaC : "Normalização",
    alternativaD : "Maleabilização",
    correta      : "Maleabilização",
}

const q11 = {
    numQuestao   : 11,
    pergunta     : "Após a mistura qual o principal ensaio de controle de processo que se realiza na areia a verde?",
    alternativaA : "dureza",
    alternativaB : "permeabilidade",
    alternativaC : "compactabilidade",
    alternativaD : "Umidade",
    correta      : "compactabilidade",
}

const q12 = {
    numQuestao   : 12,
    pergunta     : "A etapa de nodularização utiliza no seu processo para fabricar o ferro fundido nodular?",
    alternativaA : "FeSi75",
    alternativaB : "FeS",
    alternativaC : "FeMn",
    alternativaD : "FeSiMg",
    correta      : "FeSiMg",
}

const q13 = {
    numQuestao   : 13,
    pergunta     : "Os ângulos de saída tem por objetivo facilitar a extração do ............... sem  quebrar os bolos de areia?",
    alternativaA : "macho",
    alternativaB : "molde",
    alternativaC : "peça fundida",
    alternativaD : "modelo",
    correta      : "molde",
}

const q14 = {
    numQuestao   : 14,
    pergunta     : "Para a adaptação de uma peça à fundição alguns itens são observados, qual deles não faz parte?",
    alternativaA : "acréscimo de usinagem",
    alternativaB : "ângulos de saída",
    alternativaC : "redução de massa",
    alternativaD : "redução da contração",
    correta      : "redução da contração",
}

const q15 = {
    numQuestao   : 15,
    pergunta     : "Qual das fases dos ferros fundidos é considerada a mais dura de todas?",
    alternativaA : "Ferrita",
    alternativaB : "grafita",
    alternativaC : "cementita",
    alternativaD : "perlita",
    correta      : "cementita",
}

const q16 = {
    numQuestao   : 16,
    pergunta     : "Na moldagem mecanizada utilizamos o ferramental denominado de placa modelo.  Normalmente constituído de peças, sistemas de alimentação e enchimento. Os ferramentais são divididos em quantas partes e quais são?",
    alternativaA : "superior",
    alternativaB : "inferior",
    alternativaC : "superior e inferior",
    alternativaD : "superior e esquerda",
    correta      : "superior e inferior",
}

const q17 = {
    numQuestao   : 17,
    pergunta     : "O principal aglomerante utilizado nos processos de misturas de areia verde é?",
    alternativaA : "Pó de carvão",
    alternativaB : "Água",
    alternativaC : "Amido de milho",
    alternativaD : "Bentonita",
    correta      : "Bentonita",
}

const q18 = {
    numQuestao   : 18,
    pergunta     : "A classificação das peças produzidas na liga  FE 50007  o que significa? ",
    alternativaA : "Ferro fundido nodular - 500 de limite de resistência e 7 de alongamento",
    alternativaB : "Ferro fundido nodular - 500 de limite de escoamento e 7 de alongamento",
    alternativaC : "Ferro fundido nodular - 500 de dureza e 7 de alongamento",
    alternativaD : "Ferro fundido cinzento - 500 de limite de resistência e 7 de alongamento",
    correta      : "Ferro fundido nodular - 500 de limite de resistência e 7 de alongamento",
}

const q19 = {
    numQuestao   : 19,
    pergunta     : "O que diferencia os aços dos ferros fundidos?",
    alternativaA : "Teor de ferro",
    alternativaB : "Teor de manganês",
    alternativaC : "Teor de carbono",
    alternativaD : "Teor de silício",
    correta      : "Teor de carbono",
}

const q20 = {
    numQuestao   : 20,
    pergunta     : "As luvas exotérmicas substituem qual dos elementos?",
    alternativaA : "macho",
    alternativaB : "massalote",
    alternativaC : "chapelin",
    alternativaD : "filtro cerâmico",
    correta      : "massalote",
}

const q21 = {
    numQuestao   : 21,
    pergunta     : "O espectrômetro de emissão óptica é utilizado nas fundição para controle ...",
    alternativaA : "temperatura",
    alternativaB : "umidade",
    alternativaC : "composição química",
    alternativaD : "coquilhamento",
    correta      : "composição química",
}

const q22 = {
    numQuestao   : 22,
    pergunta     : "Para a realização do ensaio de compactabilidade da mistura de areia verde, na liberação para  moldagem, são necessárias quantas percussões na martelete?",
    alternativaA : "1",
    alternativaB : "3",
    alternativaC : "2",
    alternativaD : "4",
    correta      : "3",
}

const q23 = {
    numQuestao   : 23,
    pergunta     : "O principal gerador de carbono vítreo durante o vazamento do metal, que por sua vez, evita principalmente a sinterização de areia e melhora o acabamento superficial das peças?",
    alternativaA : "água",
    alternativaB : "amido de milho",
    alternativaC : "pó de carvão",
    alternativaD : "dextrina",
    correta      : "pó de carvão",
}

const q24 = {
    numQuestao   : 24,
    pergunta     : "Para homogeneizar os componentes da mistura da areia utiliza-se?",
    alternativaA : "aerador",
    alternativaB : "misturador",
    alternativaC : "peneirador",
    alternativaD : "dosador",
    correta      : "misturador",
}

const q25 = {
    numQuestao   : 25,
    pergunta     : "Um dos processos  utilizados para a produção de machos é shell moulding. Também conhecido como processo?",
    alternativaA : "maciço",
    alternativaB : "casca",
    alternativaC : "vazio",
    alternativaD : "carapaça",
    correta      : "casca",
}

const q26 = {
    numQuestao   : 26,
    pergunta     : "Qual ensaio é utilizado na areia verde para determinação do teor de água?",
    alternativaA : "Permeabilidade",
    alternativaB : "Compactabilidade",
    alternativaC : "Umidade",
    alternativaD : "Argila ativa",
    correta      : "Umidade",
}

const q27 = {
    numQuestao   : 27,
    pergunta     : "As principais matérias primas utilizadas na carga de um forno para fusão dos ferros fundidos são?",
    alternativaA : "gusa, retorno, sucata de aço e alumínio",
    alternativaB : "gusa, retorno, sucata de aço e cobre",
    alternativaC : "gusa, retorno, sucata de aço e ferros liga",
    alternativaD : "gusa, retorno, sucata de aço e mgnésio",
    correta      : "gusa, retorno, sucata de aço e ferros liga",
}

const q28 = {
    numQuestao   : 28,
    pergunta     : "O forno cubilô utilizado para a produção de ferros fundidos, emprega como principal fonte de energia?",
    alternativaA : "ar",
    alternativaB : "carvão vergetal",
    alternativaC : "coque",
    alternativaD : "energia elétrica",
    correta      : "coque",
}

const q29 = {
    numQuestao   : 29,
    pergunta     : "Qual é o tipo de areia mais utilizada na produção de ferros fundidos?",
    alternativaA : "cromita",
    alternativaB : "chamote",
    alternativaC : "olivina",
    alternativaD : "sílica",
    correta      : "sílica",
}

const q30 = {
    numQuestao   : 30,
    pergunta     : "As ligas dos ferros fundidos para serem produzidas podem ter a necessidade de machos. Quais são as etapas sequenciais para a  confecção de  machos pelo processo de cura a frio?",
    alternativaA : "mistura, sopro, gasagem, purgamento e extração",
    alternativaB : "sopro, purgamento, mistura , extração e gasagem",
    alternativaC : "purgamento, mistura, sopro, gasagem e extração",
    alternativaD : "gasagem, sopro, mistura, extração e purgamento",
    correta      : "mistura, sopro, gasagem, purgamento e extração",
}

const q31 = {
    numQuestao   : 31,
    pergunta     : "O pirômetro ótico utilizado nas fundições tem a função de controlar....",
    alternativaA : "composição química",
    alternativaB : "temperatura",
    alternativaC : "coquilhamento",
    alternativaD : "carbono equivalente",
    correta      : "temperatura",
}

const q32 = {
    numQuestao   : 32,
    pergunta     : "Como podemos evitar na formação cristalina devido ao resfriamento do lingote, estruturas frágeis nos cantos?",
    alternativaA : "Arredondando-se os cantos do lingote", //Esse
    alternativaB : "Criando um ângulo de saída no molde",
    alternativaC : "Arredondando-se os cantos da peça",
    alternativaD : "Arredondando-se os cantos do molde",
    correta      : "Arredondando-se os cantos do lingote",
}

const q33 = {
    numQuestao   : 33,
    pergunta     : " O que é contração sólida no metal vazado?",
    alternativaA : " É a variação de volume que ocorre já no estado sólido, desde a temperatura do fim da solidificação até a temperatura ambiente.", 
    alternativaB : "É a diminuição de volume que ocorre já no estado sólido, desde a temperatura do fim da solidificação até a temperatura ambiente.",
    alternativaC : "É o aumento de volume que ocorre já no estado sólido, desde a temperatura do fim da solidificação até a temperatura ambiente.",
    alternativaD : "É a variação de volume que ocorre já no estado sólido, apos o fim da solidificação.",
    correta      : "É a variação de volume que ocorre já no estado sólido, desde a temperatura do fim da solidificação até a temperatura ambiente.",
}

const q34 = {
    numQuestao   : 34,
    pergunta     : "Quais as conseqüências ocasionadas pela diferença entre os volumes no estado liquido e no estado sólido final? ",
    alternativaA : "Vazio ou chupagem, trincas e tensões ", //Esse
    alternativaB : "quebra, vazio ou trincas",
    alternativaC : "vazio, rechupe, tensões ",
    alternativaD : "N.D.A",
    correta      : "Vazio ou chupagem, trincas e tensões",
}

const q35 = {
    numQuestao   : 35,
    pergunta     : "Cite processos de fundição?",
    alternativaA : "Fundição por gravidade, Sob pressão, Por centrifugação, de precisão.", //Esse
    alternativaB : "Sob pressão, Fundição a frio, de precisão.",
    alternativaC : "Por centrifugação, Sob pressão, Pressão ambiente",
    alternativaD : "Fundição a frio, de precisão, Fundição por gravidade, Sob pressão.",
    correta      : "Fundição por gravidade, Sob pressão, Por centrifugação, de precisão.",
}

const q36 = {
    numQuestao   : 36,
    pergunta     : "Cite quais são as impurezas encontradas na liga ferro-carbono?",
    alternativaA : "enxofre, Fósforo, manganês, silício, hidrogênio.", 
    alternativaB : "fósforo, oxigênio, manganês, silício",
    alternativaC : "Fósforo, oxigênio, manganês, silício e carbono",
    alternativaD : "Fósforo, enxofre, manganês, silício e carbono.",
    correta      : "Fósforo, enxofre, manganês, silício e carbono.",
}

const q37 = {
    numQuestao   : 37,
    pergunta     : "De que material são constituídos os modelos? ",
    alternativaA : "madeira ou alumínio", //Esse
    alternativaB : "Areia ou ferro.",
    alternativaC : "alumínio ou areia",
    alternativaD : "ferro ou madeira.",
    correta      : "madeira ou alumínio",
}

const q38 = {
    numQuestao   : 38,
    pergunta     : "O que é molde?",
    alternativaA : "É o recipiente que contem as cavidades, com a forma da peça a ser fundida.", //Esse
    alternativaB : "É o recipiente que da forma a peça.",
    alternativaC : "É o recipiente de produtos pessoais.",
    alternativaD : "É o recipiente utilizado para guardar a peça.",
    correta      : "É o recipiente que contem as cavidades, com a forma da peça a ser fundida.",
}

const q39 = {
    numQuestao   : 39,
    pergunta     : "Quais os processos utilizados na moldagem em molde metálico ou permanente?",
    alternativaA : "Por gravidade e sob pressão", //Esse
    alternativaB : "Por centrifugação, Sob pressão",
    alternativaC : "Fundição a frio, de precisão",
    alternativaD : "Pressão ambiente, gravidade.",
    correta      : "Por gravidade e sob pressão",
}

const q40 = {
    numQuestao   : 40,
    pergunta     : "Quais os tipos de areia empregados na fundição no molde de areia?",
    alternativaA : "Areia verde, areia seca, areia cimento e areia de macho.", //Esse
    alternativaB : "Areia molhada, Areia verde, areia cimento, areia suja.",
    alternativaC : "Areia cristal,Areia suja, areia seca, e areia de macho.",
    alternativaD : "Areia verde, areia cimento e areia cristal, areia molhada.",
    correta      : "Areia verde, areia seca, areia cimento e areia de macho.",
}

const q41 = {
    numQuestao   : 41,
    pergunta     : "Quais características um molde de areia deve atender? ",
    alternativaA : "resistência, resistencia a erosão, baixa produção de gas.", //Esse
    alternativaB : "resistencia, resistencia a erosão, resistencia a ar.",
    alternativaC : "resistencia a ar, resistencia a quente, resistência a frio.",
    alternativaD : "resistencia, resistencia a frio, alta produção de gas.",
    correta      : "resistência, resistencia a erosão, baixa produção de gas.",
}

const q42 = {
    numQuestao   : 42,
    pergunta     : "Quais os componentes de uma areia de fundição?",
    alternativaA : "Areia, argila, carvão moído, dextrina, mogul, breu em pó e serragem.", //Esse
    alternativaB : "Areia, argila, carvão bruto, dextrina, mogul, breu em pó.",
    alternativaC : "Areia, carvão moído, dextrina, mogula, breu em pó e serragem",
    alternativaD : "Areia, argila, carvão bruto, dextrina, mogul, breu em pó e serragem",
    correta      : "Areia, argila, carvão moído, dextrina, mogul, breu em pó e serragem.",
}

const q43 = {
    numQuestao   : 43,
    pergunta     : "Que características as areias para a confecção de machos devem apresentar?",
    alternativaA : "Baixa dureza, alta permeabilidade e inalterabilidade.",
    alternativaB : "Baixa dureza, Baixa permeabilidade e inalterabilidade.",
    alternativaC : "Alta dureza, alta permeabilidade e inalterabilidade.",
    alternativaD : "Alta dureza, Baixa permeabilidade e inalterabilidade.",
    correta      : "Alta dureza, alta permeabilidade e inalterabilidade.",
}

const q44 = {
    numQuestao   : 44,
    pergunta     : "De que são feitos os moldes permanentes? ",
    alternativaA : "Aço ou ferro e em alguns casos utiliza-se ligas de cobre, como o bronze.",
    alternativaB : "Aço ou ferro fundido e em alguns casos utiliza-se ligas de cobre, como o bronze.",
    alternativaC : "Aço ou ferro fundido e em alguns casos utiliza-se ligas como o bronze.",
    alternativaD : "Aço ou bronze.",
    correta      : "Aço ou ferro fundido e em alguns casos utiliza-se ligas de cobre, como o bronze.",
}

const q45 = {
    numQuestao   : 45,
    pergunta     : "O que diferencia as peças fundidas no molde metálico, das peças fundidas em moldes de areia?",
    alternativaA : "As peças fundidas em moldes permanentes têm Menor uniformidade, pior acabamento superficial, tolerâncias dimensionais menos estreitas e melhores propriedades mecânicas.",
    alternativaB : "As peças fundidas em moldes permanentes têm Menor uniformidade, melhor acabamento superficial, tolerâncias dimensionais menos estreitas e piores propriedades mecânicas.",
    alternativaC : "As peças fundidas em moldes permanentes têm maior uniformidade, melhor acabamento superficial, tolerâncias dimensionais mais estreitas e melhores propriedades mecânicas.",
    alternativaD : "As peças fundidas em moldes permanentes têm maior uniformidade, pior acabamento superficial, tolerâncias dimensionais mais estreitas e piores propriedades mecânicas.",
    correta      : "As peças fundidas em moldes permanentes têm maior uniformidade, melhor acabamento superficial, tolerâncias dimensionais mais estreitas e melhores propriedades mecânicas.",
}

const q46 = {
    numQuestao   : 46,
    pergunta     : "Cite quais são as impurezas encontradas na liga ferro-carbono?",
    alternativaA : "Fosfato, sulfur, magnésio, sílica e grafita.",
    alternativaB : "Enxofre, Manganês, ferrita, cementita.",
    alternativaC : "Cromo, Vanádio, Phosphorus, aurum.",
    alternativaD : "Fósforo, enxofre, manganês, silício e o próprio carbono.",
    correta      : "Fósforo, enxofre, manganês, silício e o próprio carbono.",
}

const q47 = {
    numQuestao   : 47,
    pergunta     : "",
    alternativaA : "",
    alternativaB : "",
    alternativaC : "",
    alternativaD : "",
    correta      : ""
}
const q48 = {
    numQuestao   : 48,
    pergunta     : "",
    alternativaA : "",
    alternativaB : "",
    alternativaC : "",
    alternativaD : "",
    correta      : "",
}

const q49 = {
    numQuestao   : 49,
    pergunta     : "",
    alternativaA : "",
    alternativaB : "",
    alternativaC : "",
    alternativaD : "",
    correta      : "",
}

const q50 = {
    numQuestao   : 50,
    pergunta     : "",
    alternativaA : "",
    alternativaB : "",
    alternativaC : "",
    alternativaD : "",
    correta      : "",
}

const q51 = {
    numQuestao   : 51,
    pergunta     : "",
    alternativaA : "",
    alternativaB : "",
    alternativaC : "",
    alternativaD : "",
    correta      : "",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26, q27, q28, q29, q30, q31,
                 q32, q33, q34, q35, q36, q37, q38, q39, q40, q41, q42, q43, q44, q45, q46, q47, q48, q49, q50, q51]

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

alternativas.addEventListener('dblclick', () => {
    pontos -= 1 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 1 && pontos == 52) { pontos = 51 }
})

var audioerrou = new Audio('errou.mp3');
var audioacertou = new Audio('acertou.mp3');
var audiometademenos = new Audio('tiroumetademenos.mp3');
var audiometademais = new Audio('tiroumetademais.mp3');
var audiotiroudez = new Audio('tiroudez.mp3');
var audiotirouzero = new Audio('tirouzero.mp3');

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
        pontos += 1 // pontos = pontos + 10
        audioacertou.play();

    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        audioerrou.play();
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
let jogador = document.querySelector('.Nome')

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    
    if (pontos === 0){
        audiotirouzero.play()
    }else if (pontos === 30){
        audiotiroudez.play()      
    }else if (pontos <= 15){
        audiometademenos.play()      
    }else if (pontos >= 16){
        audiometademais.play()      
    }


    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    let jogadorindo = {
        "player": document.querySelector('#Nome').value,
        "score": pontos||pont
    }

    fetch('http://localhost:3000/pontuacao', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jogadorindo),
        })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('Success:', JSON.stringify(response))
    });

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
