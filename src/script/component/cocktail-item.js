class CocktailItem extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode:"open"});
    }
    set cocktail(cocktail) {
        this._cocktail = cocktail;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: inherit;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }
        .cocktail-info {
            padding: 15px;
        }
       
        .cocktail-info > h1 {
            font-size: 20px;
            margin: 0;
            color: #333;
        }
       
        .cocktail-info > p {
            flex: 1; /* make p grow to fill available space*/
            line-height: 1.4;
        }

        .card-image {
            width: 100%;
            object-fit: cover;
            object-position: center;
            height: 500px;
        }
    </style>    
    <img class="card-image"  width="280" height="180" src="${this._cocktail.strDrinkThumb}" alt="">
    <div class="cocktail-info">
        <h1>${this._cocktail.strDrink}</h1>
        <p>${this._cocktail.strInstructions}</p>
        <h3>Category: ${this._cocktail.strCategory}</h3>
    </div>`;
    }
 }
  
 customElements.define("cocktail-item", CocktailItem);
 