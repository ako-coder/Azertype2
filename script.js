// --- partie 2.3 ---


// let choixUtilisateur = prompt(`Est-ce que vous souhaitez jouer avec les ${listeChoix[0]} ou ${listeChoix[1]}`)


// switch (choixUtilisateur) {
//     case listeChoix[0] :
//         for (let i = 0; i < 3; i++) {
//             let motUtilisateur = prompt(`Entrez le mot : ${listeMots[i]}`)
//         }
//         break
//     case listeChoix[1] :
//     for (let i = 0; i < 3; i++) {
//             let motUtilisateur = prompt(`Entrez la phrase : ${listePhrases[i]}`)
//         }
//         break
// }


// if (choixUtilisateur = listeChoix[0]){
//     for (let i = 0; i <3; i++){
//         let motUtilisateur = prompt(`Entrez le mot : ${listeMots[i]}`)
//     }
// } else {
//     for (let i = 0; i <3; i++){
//         let motUtilisateur = prompt(`Entrez le mot : ${listePhrases[i]}`)
//     }
// }


// --- partie 2.4 --- fonctions ---

function retournerMessageScore(score, nombreQuestions) {
    let message = `Votre score est de ${score} sur ${nombreQuestions}`
    return message
}

let nouveauMessage = retournerMessageScore(5, 10)
console.log(nouveauMessage)