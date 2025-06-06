const pet = document.querySelector('#pet')
const pontosdisplay = document.querySelector('#pontos')

const alimentarBtn = document.querySelector('#alimentarBtn')
const brincarBtn = document.querySelector('#brincarBtn')
const dormirBtn = document.querySelector('#dormirBtn')

const historicoLista = document.querySelector('#historico')

function addHistorico(texto, tipo){
    const li = document.createElement('li')
    const horario = new Date().toLocaleTimeString()
    li.textContent = `${horario} - ${texto}` ;
    historicoLista.appendChild(li)

if(historicoLista.children.length > 10){
 historicoLista.removeChild(historicoLista.firstChild)
}

if(tipo == 'triste'){
    li.classList.add('triste')
}
}
let pontos = 0;

alimentarBtn.addEventListener('click', function(){
    pet.innerHTML = '😻'
    pontos +=1
    pontosdisplay.textContent = pontos
    addHistorico('Comeu!')
    resetarTempoinativo()
});

brincarBtn.addEventListener('click', function(){
    pet.innerHTML = '😽'
    pontos +=1
    pontosdisplay.textContent = pontos
    addHistorico('brincou hahaha!')
    resetarTempoinativo()
});

dormirBtn.addEventListener('click', function(){
    pet.innerHTML = '😴'
    pontos +=3
    pontosdisplay.textContent = pontos
    addHistorico('dormiu zzzzzzz!')

    resetarTempoinativo()
});
let tempoinativo = 0;

setInterval(function(){
    tempoinativo += 1       
    if(tempoinativo >= 10 ){
       pontos -= 1;
       if (pontos < 0) pontos = 0
       pontosdisplay.textContent = pontos
       pet.textContent = '😿' 
       addHistorico('esta triste buahh!', 'triste')
    }
}, 1000)
function resetarTempoinativo(){
    tempoinativo = 0;
}