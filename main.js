// varibili globali
let agePrice, finalPrice;


// al click scrivi ti HTML
const button = document.getElementById("myBtn").addEventListener("click",
    function () {

        // Salva chilometri e eta' in variabili
        const quantityKilometers = document.getElementById("input_kilometers").value;
        const userAge = document.getElementById("input_age").value;
        console.log(quantityKilometers, userAge);

        // definisci prezzo biglietto per chilometri da percorrere
        const priceTicket = quantityKilometers * 0.21;
        console.log(priceTicket);


        // definisci prezzo biglietto in base all'eta
        if (userAge < 18) {
            agePrice = priceTicket * 0.8;
        } else if (userAge > 65) {
            agePrice = priceTicket * 0.6;
        } else {
            agePrice = priceTicket;
        }
        console.log(agePrice)

        // riduci il prezzo in centesimi
        finalPrice = agePrice.toFixed(2)
        // scrivi sull'HTML
        document.getElementById('ticket').innerHTML = finalPrice;
    });



