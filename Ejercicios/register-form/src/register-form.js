import { LitElement, html, css } from 'lit-element';

export class RegisterForm extends LitElement{
  /* ..:: Style ::.. */
  static get styles() {
    return css`
      * {box-sizing: border-box}
      .container {
        padding: 16px;
      }
      input[type=text], input[type=email] {
        width: 100%;
        padding: 15px;
        margin: 5px 0 22px 0;
        display: inline-block;
        border: 1px solid #000;
        background: #f1f1f1;
      }
      input[type=text]:focus, input[type=email]:focus {
        background-color: #ddd;
        outline: none;
        border: 2px solid;
      }
      hr {
        border: 1px solid #f1f1f1;
        margin-bottom: 25px;
      }
      .registerbtn {
        background-color: #375ECF;
        color: white;
        padding: 16px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
        opacity: 0.9;
      }
      .registerbtn:hover {
        opacity:1;
        border: 2px solid #000;
      }
      h2{
        text-align:center;
      }
      .center{
        text-align:center;
      }
      a {
        color: dodgerblue;
      }
      .signin {
        background-color: #f1f1f1;
        text-align: center;
      }
    `;
  }

  /* ..:: Propiedades del componente ::.. */
  static get properties() {
    return {
      name: {type: String},
      lastname: {type: String},
      profession: {type: String},
      email: {type: String},
      phone: {type: String},
      registeredPeople: {type: Array}
    }
  }
  /* ..:: Constructor ::.. */
  constructor(){
    super();
    this.name = "";
    this.lastname = "";
    this.profession = "";
    this.email = "";
    this.phone = "";
    this.registeredPeople = [];
  }

  _validateForm(){
    console.log("Validando...");
  }

  /* ..:: Render | Template ::.. */
  render(){
    return html`
      <form action="${this._validateForm}">
        <div class="container">
          <h2>Register</h2>
          <p class="center">Please fill in this form to register an user.</p>
          <hr>

          <label for="name"><b>Name</b></label>
          <input type="text" placeholder="Enter name" name="name" id="name" required>

          <label for="lastname"><b>Lastname</b></label>
          <input type="text" placeholder="Enter lastname" name="lastname" id="lastname" required>

          <label for="profession"><b>Profession</b></label>
          <input type="text" placeholder="Enter profession" name="profession" id="profession" required>

          <label for="email"><b>Email</b></label>
          <input type="email" placeholder="someone@domain.com" name="email" id="email" required>

          <label for="phone"><b>Phone</b></label>
          <input type="text" placeholder="(55) 00 00 00 00" name="phone" id="phone" required>
          <hr>

          <button type="button" class="registerbtn">Register</button>
        </div>

      </form>
    `;
  }
}customElements.define('register-form', RegisterForm);
