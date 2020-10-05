class AppBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `<style>
        * {
            margin: 0px;
            padding: 12px;
            box-sizing: border-box;
        }

        :host {
            display: block;
            width: 100%;
            background-color: #333;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            text-align: center;
        }

        h2 {
            padding: 32px;
        } 
    </style>
    <h1>FIND COCKTAILS</h1>`;
    }
 }
  
 customElements.define("app-bar", AppBar);