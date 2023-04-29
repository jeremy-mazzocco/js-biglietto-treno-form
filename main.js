// varibili globali
let agePrice, userAge, userName, quantityKilometers;


// al click scrivi ti HTML
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


// al click cancel data
const buttonCancel = document.getElementById('myBtn-cancel').addEventListener('click',
    function () {
        // scrivi sull'HTML
        userName = document.getElementById("input_name").value = " ";
        userAge = document.getElementById("input_age").value = " ";
        quantityKilometers = document.getElementById("input_kilometers").value = " ";
    }
)



