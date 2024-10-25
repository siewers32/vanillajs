function include(divid, doc) {
    const contentDiv = document.getElementById(divid);
    const url = doc; // Vervang dit met de juiste URL

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Converteer response naar tekst
        })
        .then(data => {
            // Plaats de opgehaalde inhoud in de div
            contentDiv.innerHTML = data;
        })
        .catch(error => {
            console.error('Fout bij het laden van het bestand:', error);
        });
}