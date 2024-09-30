function Factorial() {

    let number  = parseInt(document.getElementById("number").value);
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    document.getElementById("szam").innerText = `${number} faktorialisa ${factorial}.`;
}