function gyoztes() {
    let p2 = parseInt(document.getElementById('p2').value);
    let eredmeny;

    if (p1 === p2) {
        eredmeny = "Döntetlen.";
    } else if ((p1 === 1 && p2 === 3) || (p1 === 2 && p2 === 1) || (p1 === 3 && p2 === 2)) {
        eredmeny = "p1 nyer.";
    } else {
        eredmeny = "p2 nyer.";
    }
    document.getElementById('nyertes').textContent = eredmeny; 
}

