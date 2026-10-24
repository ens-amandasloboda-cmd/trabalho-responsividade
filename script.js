const morango = document.getElementById('morango');
const maracuja = document.getElementById('maracuja');
const cenoura = document.getElementById('cenoura');
const framboesa = document.getElementById('framboesa');

const nutriMorango = document.getElementById('informacoes-nutricionais-morango');
const nutriMaracuja = document.getElementById('informacoes-nutricionais-maracuja');
const nutriCenoura = document.getElementById('informacoes-nutricionais-cenoura');
const nutriFramboesa = document.getElementById('informacoes-nutricionais-framboesa');


function verMorango(){
    let informacoes = document.getElementById('informacoes-nutricionais-morango');

    if (informacoes.innerHTML === '') {
        informacoes.innerHTML = `
            <h3>Informações nutricionais</h3>
            <p>Calorias: 320 kcal</p>
            <p>Carboidratos: 42 g</p>
            <p>Proteínas: 5 g</p>
            <p>Gorduras: 14 g</p>
        `;
    } else {
        informacoes.innerHTML = '';
    }
}

function verMaracuja(){
    let informacoes = document.getElementById('informacoes-nutricionais-maracuja');

    if (informacoes.innerHTML === '') {
        informacoes.innerHTML = `
            <h3>Informações nutricionais</h3>
            <p>Calorias: 250 kcal</p>
            <p>Carboidratos: 40 g</p>
            <p>Proteínas: 8 g</p>
            <p>Gorduras: 12 g</p>
        `;
    } else {
        informacoes.innerHTML = '';
    }
}

function verCenoura(){
    let informacoes = document.getElementById('informacoes-nutricionais-cenoura');

    if (informacoes.innerHTML === '') {
        informacoes.innerHTML = `
            <h3>Informações nutricionais</h3>
            <p>Calorias: 230 kcal</p>
            <p>Carboidratos: 35 g</p>
            <p>Proteínas: 10 g</p>
            <p>Gorduras: 9 g</p>
        `;
    } else {
        informacoes.innerHTML = '';
    }
}

function verFramboesa(){
    let informacoes = document.getElementById('informacoes-nutricionais-framboesa');

    if (informacoes.innerHTML === '') {
        informacoes.innerHTML = `
            <h3>Informações nutricionais</h3>
            <p>Calorias: 264 kcal</p>
            <p>Carboidratos: 42 g</p>
            <p>Proteínas: 5 g</p>
            <p>Gorduras: 9 g</p>
        `;
    } else {
        informacoes.innerHTML = '';
    }
}




