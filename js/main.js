// variabili globali
let messaggio, nomePasseggero, kmPercorrere, eta ;

const buttonGenera = document.getElementById("button-genera");

const buttonReset = document.getElementById("button-reset");

buttonGenera.addEventListener('click',
    function(){
        let nomePasseggero = document.getElementById("nomeUser").value;
        let kmPercorrere = document.getElementById("km").value ;
        let eta = document.getElementById("età").value;
        console.log(nomePasseggero);
        console.log(kmPercorrere);
        console.log(eta);

       // calcolo prezzo biglietto (prezzoBase) (0.21€ prezzo X1 Km)
        let prezzoBase = kmPercorrere * 0.21;
        console.log(prezzoBase);

        // sconto del 20% per i minorenni
        let prezzoMinorenni = prezzoBase - (prezzoBase * 0.2);
        console.log("Prezzo minorenni = ", prezzoMinorenni);

        // del 40% per gli over 65
        let prezzoOver65 = prezzoBase - (prezzoBase * 0.4);
        console.log("Prezzo over65 = ", prezzoOver65)


        if (eta < 18){ // se è minorenne
            messaggio = prezzoMinorenni;
        } else if (eta >= 65) { // se è over 65
            messaggio = prezzoOver65;
        } else { // ALTRIMENTI
            messaggio = prezzoBase;
        }

        //output
        document.getElementById("mio-id").innerHTML = "Il prezzo del tuo biglietto è " + messaggio.toFixed(2) + "€"; 
    }
);

buttonReset.addEventListener('click',
    function(){
        document.getElementById("form-id").reset();
    }
);
