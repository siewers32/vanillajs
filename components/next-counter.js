class NextCounter extends HTMLElement {
    constructor() {
        super();    
    }

    connectedCallback() {
        console.log("next-counter has been added to the page.");
        this.fetchTemplate("components/next-counter.html")
        this.addEventListener("click", function () {
            let curvalue = parseInt(this.innerText)
            let newval = curvalue  + 1
            this.innerText = newval
        })
    }

    async fetchTemplate(url) {
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Converteer response naar tekst
        })
        .then(data => {
            const contentDiv = document.head;
            contentDiv.innerHTML += data;
            let template = document.getElementById("next-counter-template");
            let shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(template.content.cloneNode(true));
        })
        .catch(error => {
            console.error('Fout bij het laden van het bestand:', error);
        });
    }

}


customElements.define("next-counter", NextCounter)


