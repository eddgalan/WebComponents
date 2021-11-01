import {LitElement, html, css} from 'lit-element';

export class MyElement extends LitElement{
  // Propiedades
  static get properties() {
    return{
      slideIndex: {type: Number},
      slides: {type: Array}
    };
  }
  /* ..:: Constructor ::.. */
  constructor(){
    super();
    this.slideIndex = 1;
    this.slides = [
      {texto:"Halloween 1", path:"imgs/halloween-01.webp", numero:"1 / 3", class:" active"},
      {texto:"Halloween 2", path:"../imgs/halloween-02.webp", numero:"2 / 3", class:" active"},
      {texto:"Halloween 3", path:"../imgs/halloween-03.webp", numero:"3 / 3", class:" active"}
    ];

  }

  /* ..::  Estilos  ::.. */
  static get styles() {
    return css`
      * {box-sizing:border-box}
      /* Slideshow container */
      .slideshow-container {
      max-width: 1000px;
      position: relative;
      margin: auto;
      }
      /* Hide the images by default */
      .mySlides {
      display: none;
      }
      /* Next & previous buttons */
      .prev, .next {
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: auto;
      margin-top: -22px;
      padding: 16px;
      color: white;
      font-weight: bold;
      font-size: 18px;
      transition: 0.6s ease;
      border-radius: 0 3px 3px 0;
      user-select: none;
      }
      /* Position the "next button" to the right */
      .next {
      right: 0;
      border-radius: 3px 0 0 3px;
      }
      /* On hover, add a black background color with a little bit see-through */
      .prev:hover, .next:hover {
      background-color: rgba(0,0,0,0.8);
      }
      /* Caption text */
      .text {
      color: #f2f2f2;
      font-size: 15px;
      padding: 8px 12px;
      position: absolute;
      bottom: 8px;
      width: 100%;
      text-align: center;
      }
      /* Number text (1/3 etc) */
      .numbertext {
      color: #f2f2f2;
      font-size: 12px;
      padding: 8px 12px;
      position: absolute;
      top: 0;
      }
      /* The dots/bullets/indicators */
      .dot {
      cursor: pointer;
      height: 15px;
      width: 15px;
      margin: 0 2px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
      transition: background-color 0.6s ease;
      }
      .active, .dot:hover {
      background-color: #717171;
      }
      /* Fading animation */
      .fade {
      -webkit-animation-name: fade;
      -webkit-animation-duration: 1.5s;
      animation-name: fade;
      animation-duration: 1.5s;
      }
      @-webkit-keyframes fade {
      from {opacity: .4}
      to {opacity: 1}
      }
      @keyframes fade {
      from {opacity: .4}
      to {opacity: 1}
      }
    `;
  }

  /* ..:: Funciones que utiliza el componente ::.. */
  // Cambia la slide (Adelante)
  plusSlides(){
    this.showSlides(this.slideIndex++);
  }
  lessSlides(n){
    this.showSlides(this.slideIndex--);
  }
  // Imagenes miniatura
  currentSlide(n){
    this.showSlides(this.slideIndex = n);
  }

  // Muestra los slides
  showSlides(n) {

    // var i;
    // var slides = document.getElementsByClassName("mySlides");
    // var dots = document.getElementsByClassName("dot");
    // if (n > slides.length) {this.slideIndex = 1}
    // if (n < 1) {this.slideIndex = slides.length}
    // for (i = 0; i < slides.length; i++) {
    //     slides[i].style.display = "none";
    // }
    // for (i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    // slides[this.slideIndex-1].style.display = "block";
    // dots[this.slideIndex-1].className += " active";

  }

  render(){
    return html`
      <!-- Slideshow container -->
      <div class="slideshow-container">
        <!-- Full-width images with number and caption text -->
        <div class="mySlides fade active">
          <div class="numbertext">${this.slides[0].numero}</div>
          <img src="${this.slides[0].path}" style="width:100%">
          <div class="text">${this.slides[0].texto}</div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">${this.slides[1].numero}</div>
          <img src="${this.slides[1].path}" style="width:100%">
          <div class="text">${this.slides[1].texto}</div>
        </div>
        <div class="mySlides fade">
          <div class="numbertext">${this.slides[2].numero}</div>
          <img src="${this.slides[2].path}" style="width:100%">
          <div class="text">${this.slides[2].texto}</div>
        </div>
        <!-- Next and previous buttons -->
        <a class="prev" @click="${this.lessSlides}">&#10094;</a>
        <a class="next" @click="${this.plusSlides}">&#10095;</a>
      </div>
      <br>
      <!-- The dots/circles -->
      <div style="text-align:center">
        <span class="dot" @click="${this.currentSlide(1)})"></span>
        <span class="dot" @click="${this.currentSlide(2)}"></span>
        <span class="dot" @click="${this.currentSlide(3)}"></span>
      </div>
    `;
  }
}customElements.define('img-slide', MyElement);
