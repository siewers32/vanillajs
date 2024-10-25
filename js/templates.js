async function addTemplates(path, tags) {
    const contentDiv = document.head;
    let url = "";
    let tag = "";
    for(i=0;i<tags.length;i++) {
        url = `${path}/${tags[i]}.html`;
        tag = tags[i]
        console.log(tag)
        await fetch(url)
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
}


// function registerElement(tag) {
//     console.log(`start registering ${tag}-template`)
//     const temp = `${tag}-template`
//     customElements.define(
//         tag,
//         class extends HTMLElement {
//           constructor() {
//             super();
//             let template = document.getElementById(temp);
//             let templateContent = template.content;
      
//             const shadowRoot = this.attachShadow({ mode: "open" });
//             shadowRoot.appendChild(templateContent.cloneNode(true));
//           }
//         },
//       );
//       console.log(`end registering ${tag}`)   
// }

function registerElement(tag) {
    classname = formatString(tag)
    console.log(`start registering ${tag} with ${classname}`)
    customElements.define(tag, NextCounter)
}


function formatString(input) {
    return input
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  }