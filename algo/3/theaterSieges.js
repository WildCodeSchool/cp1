/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"
Au final la liste devra ressembler à : 
1-1 
1-2
1-3
.
.
.
26-98
26-99
26-100
*/

function theaterSieges() {
  // Your code here !
  // let colonnes = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26
  // ]; // 26 en tout
  // let siege = []; // 100 en tout
  // for (let i = 1; i <= 100; i++) {
  //   siege.push(i);
  // }
  // const finalArray = colonnes.map(num =>
  //   siege.map(siege => `${num}-${siege}`)
  // );
  // return finalArray;
const finalArray= [];

for(let col = 1; col <= 26; col += 1) {
  const colArray = [];
  for(let seat = 1; seat <= 100; seat += 1) {
    colArray.push(`${col}-${seat}`)
  }
  finalArray.push(colArray);
}
return finalArray;
}



console.log(theaterSieges());

module.exports = theaterSieges;
