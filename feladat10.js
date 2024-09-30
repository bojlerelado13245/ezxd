let string = 'apple';
let outputDiv = document.getElementById('output');

for (let i = 0; i < string.length; i++) {
    let letter = document.createElement('p');
    letter.textContent = string[i];
    outputDiv.appendChild(letter);
}
