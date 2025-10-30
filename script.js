// Fonction appelée quand la souris survole une image
function upDate(previewPic) {
    console.log("upDate called");  // Vérifie que l'événement se déclenche
    console.log(previewPic.src, previewPic.alt); // Vérifie source et alt

    // Modifier le texte de la div
    document.getElementById('image').innerHTML = previewPic.alt;

    // Modifier l'image de fond de la div
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

// Fonction appelée quand la souris quitte l'image
function unDo() {
    // Remettre le texte original
    document.getElementById('image').innerHTML = "Hover over an image below to display here";

    // Réinitialiser l'image de fond
    document.getElementById('image').style.backgroundImage = "url('')";
}
