const pet = document.querySelector('#pet')
const pontosdisplay = document.querySelector('#pontos')

const alimentarBtn = document.querySelector('#alimentarBtn')
const brincarBtn = document.querySelector('#brincarBtn')
const dormirBtn = document.querySelector('#dormirBtn')

const historicoLista = document.querySelector('#historico')

function addHistorico(texto){
    const li = document.createElement('li')
    li.textContent = texto;
    historicoLista.appendChild(li)
}

let pontos = 0;

alimentarBtn.addEventListener('click', function(){
    pet.innerHTML = '😻'
    pontos +=1
    pontosdisplay.textContent = pontos
    addHistorico('Comeu!')
});

brincarBtn.addEventListener('click', function(){
    pet.innerHTML = '🤩'
    pontos +=1
    pontosdisplay.textContent = pontos
    addHistorico('brincou hahaha!')
});

dormirBtn.addEventListener('click', function(){
    pet.innerHTML = '😴'
    pontos +=3
    pontosdisplay.textContent = pontos
    addHistorico('dormiu zzzzzzz!')
});

