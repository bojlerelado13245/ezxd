function xd() {
    let pont = document.getElementById('pont').value;
    let osztalyzat;
    if (pont >= 90) {
        osztalyzat = 'A';
    } else if (score >= 70) {
        osztalyzat = 'B';
    } else if (score >= 50) {
        osztalyzat = 'C';
    } else if (score >= 40) {
        osztalyzat = 'D';
    } else {
        osztalyzat = 'F';
    }

    document.getElementById('pont').textContent = `Osztályzat: ${osztalyzat}`;
}