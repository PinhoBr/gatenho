const selector = document.querySelector('#emojis')
const Galeria = document.querySelector('#emojiGalery')
const adicionarBtn = document.querySelector('#adicionar')



adicionarBtn.addEventListener('click', addemoji)



function addemoji(){
  const span = document.createElement('span');
  span.textContent = selector.options[selector.selectedIndex].text;


emojiGalery.appendChild(span);
span.classList.add('emoji')
}