function atlag() {

    let number = document.getElementById("number").value;
    let sum = 0;
    let count = 0;

    for (let i = 0; i < number.length; i++) {
        sum += parseInt(number[i]);
        count++;
    }

    let average = sum / count;

    document.getElementById("eredmeny").innerText = `A számjegyek átlaga ${average}.`;
}