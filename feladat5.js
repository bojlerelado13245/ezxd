function szokoo() {
let ev = document.getElementById('year').value;
let szoko;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        szoko = true;
} else {
        szoko = false;
    }
document.getElementById('eredmeny').textContent = szoko ? `${ev} szökőév.` : `${ev} nem szökőév.`;
}
