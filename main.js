class Card {
    constructor(title, image, id) {
        this.title = title;
        this.image = image;
        this.id = id;
    }
}

class cardsDeck {
    constructor() {
        this.cards = [];    
    }                      
    createCards() {
    let titles = ['product 1', 'product 2', 'product 3'];
    let images = ['images/image_01.jpg','images/image_02.jpg','images/image_03.jpg'];
    let ids = [1, 2, 3];
        for (let i = 0; i < titles.length; i++) {
                this.cards.push(new Card(titles[i], images[i], ids[i]));
                // renderCard(this.cards[i]);
        }     
    }
}
   
const c = new cardsDeck();
c.createCards();

const initPage = () =>{
    const body = document.querySelector("body");
    const cards_container = document.createElement("div");
    const backdrop_elm = document.createElement("div");
    backdrop_elm.setAttribute("class", "backdrop");
    cards_container.setAttribute("class", "container");
    cards_container.setAttribute("id", "cards_container");
    body.append(backdrop_elm);
    body.append(cards_container);
};

const renderCard = (data) =>{
//----------init containers-------------
const body = document.querySelector("body");
const cards_container = document.createElement("div");
cards_container.setAttribute("class", "container");
cards_container.setAttribute("id", "cards_container");
body.append(cards_container);
//-------------------------------------

    for(let i =0 ; i < data.length ; i++){
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const a = document.createElement("a");
        const img = document.createElement("img");
        const button = document.createElement("button"); 
        const cards_container_div = document.getElementById('cards_container');  

        cards_container_div.append(div);
        div.append(h1);
        div.append(img);
        div.append(button);
    
        h1.innerHTML = data[i].title;

        div.setAttribute("class", "card");

        img.setAttribute("src", data[i].image);

        button.setAttribute("type","button");
        button.setAttribute("name","button" + data[i].id);
        button.setAttribute("id", data[i].id);
        button.innerText = "showCard";
        button.style.marginLeft = "20px";
        button.style.marginTop = "20px";
        button.onclick = () => showCard(button.id);
    }
};

renderCard(c.cards);

const renderCardSelected = (data) =>{
    const div_card_selected = document.createElement("div");
    const h1 = document.createElement("h1");
    const img = document.createElement("img");  
    const body = document.querySelector("body");

    body.append(div_card_selected );
    div_card_selected.append(h1);
    div_card_selected.append(img);
   
    h1.innerHTML = data.title;
    img.setAttribute("src", data.image);

    div_card_selected.setAttribute("class", "card_selected");
    div_card_selected.onclick = function () {
    let  backdrop_elm = document.getElementById('backdrop_id');
    backdrop_elm.parentNode.removeChild(backdrop_elm);
    this.remove();
};
    
};
const showCard = (value) =>{

    const body = document.querySelector("body");
    const backdrop_elm = document.createElement("div");
    backdrop_elm.setAttribute("class", "backdrop");
    backdrop_elm.setAttribute("id", "backdrop_id");
    body.append(backdrop_elm);
    let index = Number(value);
    renderCardSelected(c.cards[index-1]);
    };




