import {LitElement, html, css} from 'lit-element';
import '/src/get-data.js';
// import '/src/tr-employee.js';

export class TableComp extends LitElement{

  static get styles() {
    return css`
      .table{
        border: 1px solid #B2B3B4;
      }
      div{
        padding:10px 10px;
      }
      .content{
        border: 1px solid #119BFA;
        padding:0px;
      }
      .title{
        background-color:#119BFA;
        padding:0px;
        color:#FFF;
        padding-left:15px;
      }
      .buttons{
        text-align:right;
        padding-right:0px;
      }
      table{
        width:100%;
      }
      thead, tbody{
        text-align:center;
      }
    `;
  }

  static get properties() {
    return {
      employees: { type:Array },
      allEmployees: { type:Array },
      nameSearch: { type:Array }
    };
  }
  // Constructor
  constructor(){
    super();
    this.employees = [];
    this.allEmployees = [];
    this.nameSearch = "";
  }
  // Invoked when a component is added to the document’s DOM
  connectedCallback(){
    super.connectedCallback();
    this.addEventListener('ApiData', (e) => {
      this._dataFormat(e.detail.data);
    })
  }

  _dataFormat(data){
    let employees = [];
    data['data'].forEach((employee) => {
      employees.push({
        "id":employee.id,
        "name":employee.employee_name,
        "salary":employee.employee_salary,
        "age":employee.employee_age,
      });
    });
    // console.log(employees);
    this.allEmployees = employees;
    this.employees = this.allEmployees;
  }

  _typeName(e){
    this.nameSearch = e.target.value;
  }

  _searchEmployee(){
    if( this.nameSearch ){
      let employees = [];
      for( let employee of this.allEmployees ){
        if( employee.name.indexOf(this.nameSearch) != -1 ){
          employees.push(employee);
        }
      }
      this.employees = employees;
      // console.log(this.employees);
    }
  }

  _resetSearch(){
    this.employees = this.allEmployees;
  }

  render(){
    return html`
      <get-data url="http://dummy.restapiexample.com/api/v1/employees" method="GET"></get-data>

      <div class="content">
        <div class="title">
          view: Sample Page
        </div>
        <div class="filter">
          <form>
            <label for="search">Filter: </label>
            <input type="text" id="search" name="search" @input="${this._typeName}" placeholder="Search by name...">
            <button type="button" @click="${this._searchEmployee}" >Search</button>
            <button type="reset" @click="${this._resetSearch}"> Clear </button>
          </form>
        </div>
        <div>
          <div class="table">
            <table>
              <thead>
                <tr>
                  <th>Id</th><th>Name</th><th>Salary</th><th>Age</th>
                </tr>
              </thead>
              <tbody>
                ${this.employees.map(employee => html`
                  <tr>
                    <td>${employee.id}</td>
                    <td>${employee.name}</td>
                    <td>${employee.salary}</td>
                    <td>${employee.age}</td>
                  </tr>
                `)}
              </tbody>
            </table>
          </div>
          <div class="buttons">
            <button type="button" class="" name="" id="">Ok</button>
            <button type="button" class="" name="" id="">Cancel</button>
          </div>
        </div>
      </div>
    `;
  }
}customElements.define('table-comp', TableComp);
