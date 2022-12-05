function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play(); 
    }
    else {
        alert('Elemento não encontrado ou seletor inválido!');
    }
};

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < listaDeTeclas.length) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    //console.log(instrumento);

    const idAudio = `#som_${instrumento}`;
    
    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio)
    };
    contador++;

    //console.log(contador);
}