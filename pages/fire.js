let firePixelsArray = []
const fireWidth = 60
let fireHeight = 60
const fireColorsPalette = [{ "r": 7, "g": 7, "b": 7 }, { "r": 31, "g": 7, "b": 7 }, { "r": 47, "g": 15, "b": 7 }, { "r": 71, "g": 15, "b": 7 }, { "r": 87, "g": 23, "b": 7 }, { "r": 103, "g": 31, "b": 7 }, { "r": 119, "g": 31, "b": 7 }, { "r": 143, "g": 39, "b": 7 }, { "r": 159, "g": 47, "b": 7 }, { "r": 175, "g": 63, "b": 7 }, { "r": 191, "g": 71, "b": 7 }, { "r": 199, "g": 71, "b": 7 }, { "r": 223, "g": 79, "b": 7 }, { "r": 223, "g": 87, "b": 7 }, { "r": 223, "g": 87, "b": 7 }, { "r": 215, "g": 95, "b": 7 }, { "r": 215, "g": 95, "b": 7 }, { "r": 215, "g": 103, "b": 15 }, { "r": 207, "g": 111, "b": 15 }, { "r": 207, "g": 119, "b": 15 }, { "r": 207, "g": 127, "b": 15 }, { "r": 207, "g": 135, "b": 23 }, { "r": 199, "g": 135, "b": 23 }, { "r": 199, "g": 143, "b": 23 }, { "r": 199, "g": 151, "b": 31 }, { "r": 191, "g": 159, "b": 31 }, { "r": 191, "g": 159, "b": 31 }, { "r": 191, "g": 167, "b": 39 }, { "r": 191, "g": 167, "b": 39 }, { "r": 191, "g": 175, "b": 47 }, { "r": 183, "g": 175, "b": 47 }, { "r": 183, "g": 183, "b": 47 }, { "r": 183, "g": 183, "b": 55 }, { "r": 207, "g": 207, "b": 111 }, { "r": 223, "g": 223, "b": 159 }, { "r": 239, "g": 239, "b": 199 }, { "r": 255, "g": 255, "b": 255 }]
let firecanvas = document.querySelector('#fireCanvas')
let intervalId;
let som;
let fireTop = 470

// Cria um objeto Audio com o arquivo de som
const soundBtn = new Audio('./fire.mp3')
soundBtn.loop = true;

function start() {

    if (firePixelsArray.every(num => num === 0)) {
        clearInterval(intervalId);

        soundBtn.volume = 1
        fireHeight = 60
        fireTop = 470
        firecanvas.style.top = `${fireTop}px`

        createFireDataStructure()
        createFireSource(36)
        renderFire()

        intervalId = setInterval(() => {
            if (soundBtn.volume < 1 && som == true) {
                soundBtn.volume = + (soundBtn.volume + 0.02).toFixed(2)
            }
            calculateFirePropagation()
        },
            200)
    }
}

start()
apagarFogo()
function createFireDataStructure() {
    const numberOfPixels = fireWidth * fireHeight;
    for (let i = 0; i < numberOfPixels; i++) {
        firePixelsArray[i] = 0
    }
}

function calculateFirePropagation() {
    for (let column = 0; column < fireWidth; column++) {
        for (let row = 0; row < fireHeight; row++) {
            const pixelIndex = column + (fireWidth * row)
            updateFireIntensityPerPixel(pixelIndex)
        }
    }

    renderFire()

}

function updateFireIntensityPerPixel(currentPixelIndex) {
    const belowPixelIndex = currentPixelIndex + fireWidth
    if (belowPixelIndex >= fireWidth * fireHeight) {
        return
    }
    const decay = Math.floor(Math.random() * 3)
    const belowPixelFireIntensity = firePixelsArray[belowPixelIndex]
    const newFireIntensity = belowPixelFireIntensity
        - decay > 0 ? belowPixelFireIntensity - decay : 0

    firePixelsArray[currentPixelIndex - decay] = newFireIntensity

}

function renderFire() {
    const debug = false
    let html = '<table cellpadding=0 cellspacing=0>'

    for (let row = 0; row < fireHeight; row++) {
        html += '<tr>';

        for (let column = 0; column < fireWidth; column++) {
            const pixelIndex = column + (fireWidth * row)
            const fireIntensity = firePixelsArray[pixelIndex]


            if (debug === true) {
                html += '<td>';
                html += `<div class="pixel-index">${pixelIndex}</div>`
                html += fireIntensity
                html += '</td>';
            } else {
                const color = fireColorsPalette[fireIntensity]
                const colorString = `${color.r},${color.g},${color.b}`
                html += `<td class="pixel" style="background-color: rgb(${colorString})">`
                html += '</td>'
            }
        }

        html += '</tr>'
    }

    html += '</table>'
    document.querySelector('#fireCanvas').innerHTML = html
}




//Função que cria a fonte do fogo
function createFireSource(x) {
    for (let column = 0; column <= fireWidth; column++) {
        const overflowPixelIndex = fireWidth * fireHeight
        const pixelIndex = (overflowPixelIndex - fireWidth) + column
        firePixelsArray[pixelIndex] = x
    }

}

const button_acender_fogo = document.querySelector('#acenderFogo'); // seleciona o botão na página
button_acender_fogo.addEventListener('click', () => { // adiciona um evento de clique no botão
    soundBtn.play();
    som = true
    console.log("Acender!");
    start(); // imprime uma mensagem no console quando o botão for clicado
});

const button_apagar_fogo = document.querySelector('#apagarFogo'); // seleciona o botão na página
button_apagar_fogo.addEventListener('click', () => { // adiciona um evento de clique no botão
    console.log("Apagar!");
    som = false
    apagarFogo(); // imprime uma mensagem no console quando o botão for clicado
});


const button_reduzir_fogo = document.querySelector('#reduzirFogo'); // seleciona o botão na página
button_reduzir_fogo.addEventListener('click', () => { // adiciona um evento de clique no botão
    if (fireHeight > 30) {
        console.log("reduzindo fogo!");

        if (soundBtn.volume > 0.1) {
            soundBtn.volume = + (soundBtn.volume - 0.1).toFixed(2)
        }

        fireHeight = fireHeight - 1
        firecanvas.style.top = `${fireTop}px`
        fireTop = fireTop + 5

    }
});

function apagarFogo() {
    createFireSource(0)

    for (let column = 0; column <= fireWidth; column++) {
        const overflowPixelIndex = fireWidth * fireHeight
        const pixelIndex = (overflowPixelIndex - fireWidth) + column
        firePixelsArray[pixelIndex] = 0
    }
    intervalId = setInterval(() => {


        if (soundBtn.volume > 0) {
            soundBtn.volume = + (soundBtn.volume - 0.02).toFixed(2)
        }

        console.log(soundBtn.volume)
        // verifica se todos os elementos são iguais a zero
        if (firePixelsArray.every(num => num === 0)) {
            clearInterval(intervalId);

            console.log("O fogo apagou!");
            firePixelsArray = []
            soundBtn.pause();
        }
    }, 50); // intervalo de 1 segundo
}