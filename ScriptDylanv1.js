const lingobieb = ["fiets", "hallo", "lopen", "pizza", "regen"];

function randomiser(bieb){
    let random = Math.floor(Math.random() * bieb.length);
    let lingowoord = lingobieb[random];
    return lingowoord;
}
var resultaat = randomiser(lingobieb); // EERSTE LETTER VAN RANDOMISER
for (var u = 0; u < resultaat.length ; u++){
console.log(resultaat[u]);
document.getElementById("1A").value = resultaat[0]; 
}

function invoer(){ // CONTROLE INVOER WOORD
    let woord = document.getElementById("invoerveld").value;
    console.log(woord);
    if( woord.length == 5 ){
        
    }
    else{
        alert("INCORRECT: Niet 5 letters");
    }
    if( woord == resultaat ){
        alert("Correct geraden, klik op nieuw woord voor een nieuwe woord!");
    }
    else{
        alert("Incorrect geraden, probeer opnieuw!")
        console.log(resultaat[u]);
        document.getElementById("2A").value = resultaat[0];
        document.getElementById('invoerveld').value = '';
     
    }

        var vullenvak1 = document.getElementById("invoerveld").value; // EERSTE RIJ ANTWOORD
        document.getElementById("1A").value = woord [0];
        document.getElementById("1B").value = woord [1];
        document.getElementById("1C").value = woord [2];
        document.getElementById("1D").value = woord [3];
        document.getElementById("1E").value = woord [4];
        
            
             
}

 
function nieuw(){ //RELOAD PAGINA OF TEXTVAK
    var vernieuw = document.getElementById('invoerveld').value = '';
    location.reload();
 }
 
 
