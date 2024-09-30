function count() {
    let output = '';
    let skip = 1;
    let cskip = 1;

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            if (cskip === skip) {
                skip++;
                cskip = 1;
                continue;
            } else {
                cskip++;
            }
        }
        output += i + ', ';
    }

    document.getElementById('output').textContent = output.slice(0, -2);
}

count();