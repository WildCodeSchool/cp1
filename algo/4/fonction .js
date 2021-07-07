function presentation(prenom, age ,metier){
    console.log(prenom+"("+ age +"ans)-" + metier);
}
let profession="dev junior js";
presentation("peter", 45,profession);
//console.log(profession)

function calculetcc(prixht, tva){
    return prixht*(1 + tva /100);
}
calculetcc(1, 2);
console.log(calculetcc(111, 20));