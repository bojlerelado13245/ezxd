function draw() {
    const meret = parseInt(document.getElementById('meret').value);
    let output = '';

    for (let i = 0; i < meret; i++) {
        for (let j = 0; j < meret; j++) {
            if (i === 0 || i === meret - 1 || j === 0 || j === meret - 1 || i === j) {
                output += '%';
            } else {
                output += ' ';
            }
        }
        output += '\n';
    }

    document.getElementById('output').textContent = output;
}
