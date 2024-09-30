       
        let h = 10.4;
        let sz = 13.5;
        let m = 8.2;
        let felszin = 2 * (h * sz + sz * m + m * h);
        let terfogat = h * sz * m;
        document.getElementById('felszin').textContent = `Felszín: ${felszin}`;
        document.getElementById('terfogat').textContent = `Térfogat: ${terfogat}`;

        let currentHours = 14;
        let currentMinutes = 34;
        let currentSeconds = 42;
        let totalSecondsInDay = 24 * 60 * 60;

        let secondsPassed = (currentHours * 60 * 60) + (currentMinutes * 60) + currentSeconds;
        let remainingSeconds = totalSecondsInDay - secondsPassed;
        document.getElementById('remainingSeconds').textContent = `Hátralevő másodpercek: ${remainingSeconds}`;

         
        let mass_in_kg = 81.2;
        let height_in_m = 1.78;
        let bmi = mass_in_kg / (height_in_m * height_in_m);
        document.getElementById('bmi').textContent = `BMI: ${bmi}`;

        function calculateGrade() {
                let score = document.getElementById('score').value;
                let grade;
                if (score >= 90) {
                    grade = 'A';
                } else if (score >= 80) {
                    grade = 'B';
                } else if (score >= 70) {
                    grade = 'C';
                } else if (score >= 60) {
                    grade = 'D';
                } else {
                    grade = 'F';
                }

                document.getElementById('grade').textContent = `AZ ön jegye: ${grade}`;
            }

        function checkLeapYear() {

                let year = document.getElementById('year').value;
                let isLeapYear;
                if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                    isLeapYear = true;
                } else {
                    isLeapYear = false;
                }
                document.getElementById('eredmeny').textContent = isLeapYear ? `${year} szökőév.` : `${year} nem szökőév.`;
        }

        function gyoztes() {
                let player2 = parseInt(document.getElementById('player2').value);
                let result;
    
                if (player1 === player2) {
                    result = "Döntetlen.";
                } else if ((player1 === 1 && player2 === 3) || (player1 === 2 && player2 === 1) || (player1 === 3 && player2 === 2)) {
                    result = "jatekos 1 nyer.";
                } else {
                    result = "jatekos 2 nyer.";
                }
                document.getElementById('nyertes').textContent = result; 
        }

        let string = 'hello';
        let outputDiv = document.getElementById('output');

        for (let i = 0; i < string.length; i++) {
            let letter = document.createElement('p');
            letter.textContent = string[i];
            outputDiv.appendChild(letter);
        }

        function calculateFactorial() {

                let number = parseInt(document.getElementById("numberInput").value);
                let factorial = 1;
                for (let i = 1; i <= number; i++) {
                    factorial *= i;
                }
                document.getElementById("szam").innerText = `${number} factorial is ${factorial}.`;
            }

            function calculateAverageOfDigits() {

                let number = document.getElementById("numberInput").value;
                let sum = 0;
                let count = 0;
    
                for (let i = 0; i < number.length; i++) {
                    sum += parseInt(number[i]);
                    count++;
                }
    
                let average = sum / count;

                document.getElementById("betu").innerText = `The average of digits is ${average}.`;
            }
            function printLetters() {
                let inputString = document.getElementById("stringInput").value;
                let b = "";
    
                for (let i = 0; i < inputString.length; i++) {
                    let char = inputString[i]; 

                    if (char.match(/[a-zA-Z]/)) {
                        b += char;
                    } else {
                        break;
                    }
                }
    
                document.getElementById("betu").innerText = `Letters: ${b}`; }