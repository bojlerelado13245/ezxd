function print() {
    let inputString = document.getElementById("string").value;
    let b = "";

    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i]; 

        if (char.match(/[a-zA-Z]/)) {
            b += char;
        } else {
            break;
        }
    }

    document.getElementById("betu").innerText = `Betuk: ${b}`; }