let hossz = 10.4;
let szelesseg = 13.5;
let magassag = 8.2;
let felszin = 2 * (hossz * szelesseg + szelesseg * magassag + magassag * hossz);
let terfogat = hossz * szelesseg * magassag;


document.getElementById('felszin').textContent = `Felszín: ${felszin}`;
document.getElementById('terfogat').textContent = `Térfogat: ${terfogat}`;
