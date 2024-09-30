function osztok() {
    let output = '';
    let num = 10;

    while (num <= 30) {
        output += num + ': ';
        let oszto = 1;
        while (oszto <= num) {
            if (num % oszto === 0) {
                output += oszto + ', ';
            }
            oszto++;
        }
        output = output.slice(0, -2) + '\n';
        num++;
    }

    document.getElementById('output').textContent = output;
}

osztok();