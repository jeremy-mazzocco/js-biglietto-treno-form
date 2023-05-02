// Varibili globali
let agePrice, userAge, userName, quantityKilometers;


// Button - al click scrivi calcola prezzo biglietto
const button = document.getElementById('myBtn').addEventListener('click',
    function () {
        // Salva chilometri e eta' in variabili
        userName = document.getElementById("input_name").value;
        userAge = document.getElementById("input_age").value;
        quantityKilometers = document.getElementById("input_kilometers").value;

        // definisci prezzo biglietto per chilometri da percorrere
        const priceTicket = quantityKilometers * 0.21;

        // definisci prezzo biglietto in base all'eta
        if (userAge < 18) {
            agePrice = priceTicket * 0.8;
        } else if (userAge > 65) {
            agePrice = priceTicket * 0.6;
        } else {
            agePrice = priceTicket;
        }

        // riduci il prezzo in centesimi
        const finalPrice = agePrice.toFixed(2);

        // scrivi sull'HTML
        document.getElementById('ticket').innerHTML = finalPrice;
        document.getElementById('name').innerHTML = userName;
    });


// Button - al click cancel data
const buttonCancel = document.getElementById('myBtn-cancel').addEventListener('click',
    function () {
        // scrivi sull'HTML
        userName = document.getElementById("input_name").value = " ";
        userAge = document.getElementById("input_age").value = " ";
        quantityKilometers = document.getElementById("input_kilometers").value = " ";
    });


// Button - win a free ticket
const buttonLuck = document.getElementById('myBtn-luck').addEventListener('click',
    function () {
        // onclick generate a random number
        const giveRdm = Math.floor(Math.random() * 11);
        // add display: block to a div
        const luckDisplay = document.querySelector(".win").style.display = "block";
        let luckText = document.getElementById('text-win');

        // from 0 to 1 you win, from 2 to 7 you don't win, if 8 to 10 pay double
        if (giveRdm <= 1) {
            luckText.innerHTML = "You WIN a FREE trip !!!";
        } else if ((giveRdm >= 2) && (giveRdm <= 7)) {
            luckText.innerHTML = "It's not your lucky day, pay the same";
        } else {
            luckText.innerHTML = ":-P you pay double";
        }
    });


// check if price is calulate then yu can play the game
