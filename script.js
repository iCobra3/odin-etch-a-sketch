const container = document.querySelector('.container');
let gridSizeButton = document.querySelector('.grid-button')

function createGrid (size) {
// create the 16 * 16 divs
for (let i = 0; i < size * size; i++){
    const div = document.createElement('div');
    container.appendChild(div);
}
}

gridSizeButton.addEventListener('click', () => {
    let size = prompt('Enter the number of squares per side (max 100):');
    size = Math.min(size, 100);
    createGrid(size);
})