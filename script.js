const container = document.querySelector(".container");

const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 32

const generatePalette = () => {
    
    container.innerHTML = ""; // limpando o container

    for (let i= 0; i < maxPaletteBoxes; i++) {
        // gerando um hex color aleatório
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        
        // criando uma nova lista de cores
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = 
        `
            <div class="rect-box" style="background: ${randomHex}"></div>
            <span class="hex-value">${randomHex}</span>
        `

        // adicionando evento de click para copiar o color hex
        color.addEventListener("click", () => copyColor(color, randomHex))
        container.appendChild(color)
        
    }

}
generatePalette();

// copiando o hexVal e atualizando o texto para "Copied" e mudando de volta para o hexVal após 1s
const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexVal, 1000)
    }).catch(() => alert("Failed to copy the color code!"));
}

refreshBtn.addEventListener("click", generatePalette)