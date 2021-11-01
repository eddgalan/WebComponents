import {LitElement, html, css} from 'lit-element';

export class ProductContainer extends LitElement{
  // Propiedades
  static get properties() {
    return {
      drinks:{type:Array}
    };
  }
  // Constructor
  constructor(){
    super();
    this.drinks = [
        {
            "idDrink": "15997",
            "strDrink": "GG",
            "strCategory": "Ordinary Drink",
            "strAlcoholic": "Optional alcohol",
            "strDrinkThumb":"https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg"
        },
        {
            "idDrink": "17222",
            "strDrink": "A1",
            "strCategory": "Cocktail",
            "strAlcoholic": "Alcoholic",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"
        },
        {
            "idDrink": "13501",
            "strDrink": "ABC",
            "strCategory": "Shot",
            "strAlcoholic": "Alcoholic",
            "strDrinkThumb":"https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg"
        },
        {
            "idDrink": "17203",
            "strDrink": "Kir",
            "strCategory": "Ordinary Drink",
            "strAlcoholic": "Alcoholic",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg"
        },
        {
            "idDrink": "14229",
            "strDrink": "747",
            "strCategory": "Shot",
            "strAlcoholic": "Alcoholic",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg"
        },
        {
            "idDrink": "15288",
            "strDrink": "252",
            "strCategory": "Shot",
            "strAlcoholic": "Alcoholic",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg"
        }
    ];
  }
  connectedCallback(){
    super.connectedCallback();
    // fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s')
    // .then(response => response.json())
    // .then(data => {
    //   this.drinks = data;
    //   console.log(this.drinks);
    // });
  }

  render(){
    return html`
      <section>
        <h1>Drinks</h1>
        ${this.drinks.map(drink =>{
          return html`
            <product-card name="${drink.strDrink}" pathImg="${drink.strDrinkThumb}" category="${drink.category}" alcoholic="${drink.alcoholic}" ></product-card>
          `;
        })}
      </section>
    `;
  }
}customElements.define('product-container', ProductContainer);
