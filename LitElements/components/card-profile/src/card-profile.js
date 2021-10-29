import {LitElement, html, css} from 'lit-element';

export class MyElement extends LitElement{
  // Propiedades
  static get properties() {
    return {
      name: String,
      occupation: String,
      university: String,
      pathImg: String,
      altImg: String
    };
  }
  // Constructor
  constructor(){
    super();
  }

  // Estilos
  static get styles() {
    return css`
    h3{
      font-size:26px;
    }
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      max-width: 300px;
      margin: auto;
      text-align: center;
    }
    .title {
      color: grey;
      font-size: 18px;
    }

    button {
      border: none;
      outline: 0;
      display: inline-block;
      padding: 8px;
      color: white;
      background-color: #000;
      text-align: center;
      cursor: pointer;
      width: 100%;
      font-size: 18px;
    }

    a {
      text-decoration: none;
      font-size: 22px;
      color: black;
    }

    button:hover, a:hover {
      opacity: 0.7;
    }
    `;
  }

  clicContact(){
    alert("Clic en contact...!");
  }

  render(){
    return html`
    <div class="card">
      <img src="${this.pathImg}" alt="${this.altImg}" style="width:100%">
      <h3>${this.name}</h3>
      <p class="title">${this.occupation}</p>
      <p>${this.university}</p>
      <p><button @click="${this.clicContact}">Contact</button></p>
    </div>
    `;
  }
}customElements.define('card-profile', MyElement);
