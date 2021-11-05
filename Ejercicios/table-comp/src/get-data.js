import { LitElement } from 'lit-element';

export class GetData extends LitElement{

  static get properties(){
    return{
      url:{type:String},
      method:{type:String}
    }
  }

  firstUpdated(){
    this.getData();
  }

  _sendData(data){
    console.log(data.data);
    this.dispatchEvent(new CustomEvent('ApiData',{
      detail:{ data },
      bubbles: true,
      composed: true
    }));
  }

  getData(){
    fetch(this.url, { method: this.method})
      .then((response) => {
        if(response.ok) return response.json();
        return Promise.reject(response);
      })
      .then((data) => {this._sendData(data);})
      .catch((error) => {console.warn('Something went wrong', error);})
  }

  constructor(){
    super();
  }
}customElements.define('get-data', GetData);
