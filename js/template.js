function addTemplate(path, tag) {
    const url = `${path}/${tag}.html`;
    const contentDiv = document.head;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Converteer response naar tekst
        })
        .then(data => {
            // Plaats de opgehaalde inhoud in de div
            contentDiv.innerHTML += data;
            // registerElement(tag);
            
        })
        .catch(error => {
            console.error('Fout bij het laden van het bestand:', error);
        });
}

console.log("call register()")
register()
register = undefined;

function registerElement(tag) {
    console.log(`start registering ${tag}-template`)
    const temp = `${tag}-template`
    customElements.define(
        tag,
        class extends HTMLElement {
          constructor() {
            super();
            let template = document.getElementById(temp);
            let templateContent = template.content;
      
            const shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(templateContent.cloneNode(true));
          }
        },
      );
      console.log(`end registering ${tag}`)   
}


