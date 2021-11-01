import {LitElement, html, css} from 'lit-element';

export class ProductCard extends LitElement{
  // Propiedades
  static get properties() {
    return {
      name: String,
      pathImg: String,
      category: String,
      alcoholic: String
    };
  }
  // Constructor
  constructor(){
    super();
  }
  connectedCallback() {
    super.connectedCallback();
  }
  // Estilos
  static get styles() {
    return css`
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      max-width: 300px;
      margin: auto;
      text-align: center;
      font-family: arial;
    }

    .price {
      color: grey;
      font-size: 22px;
    }

    .card button {
      border: none;
      outline: 0;
      padding: 12px;
      color: white;
      background-color: #000;
      text-align: center;
      cursor: pointer;
      width: 100%;
      font-size: 18px;
    }

    .card button:hover {
      opacity: 0.7;
    }
    `;
  }

  add(){
    alert("Drink added");
  }

  render(){
    return html`
      <div class="card">
        <img src="${this.pathImg}" alt="${this.name}" style="width:100%">
        <h1>${this.name}</h1>
        <p><strong>Category: </strong> ${this.category} </p>
        <p><strong>Alcoholic: </strong> ${this.alcoholic} </p>
        <p><button @click="${this.add}"> Order </button></p>
      </div>
    `;
  }
}customElements.define('product-card', ProductCard);
