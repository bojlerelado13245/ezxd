let ora = 14;
let perc = 34;
let mp = 42;
let mpk = 24 * 60 * 60;

let eltelt = (ora * 60 * 60) + (perc * 60) + mp;
let xd = mpk - eltelt;
document.getElementById('remaining').textContent = `Hátralevő másodpercek: ${xd}`;