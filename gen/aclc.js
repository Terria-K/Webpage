class Card {
    constructor(attr) {
        this.name = attr.title;
        this.description = attr.description;
        this.image = attr.image;
    }
    get Title() {
        return this.name;
    }
    get Description() {
        return this.description;
    }
    get Image() {
        return this.image;
    }
}
function openLink(url) {
    window.open(url);
}
function openACLC() {
    if (confirm("You will be redirected to ACLC Malolos Official's Facebook page"))
        openLink("https://www.facebook.com/ACLCMalolosOfficial");
}
const cards = [
    new Card({
        "title": "Online Student Enrollment System and Payment System",
        "description": "GREAT NEWS! You may now pay your tuition and other fees online. Pay via credit card, online banking, 7-Eleven, Cebuana, SM Bills payment and other safe and convenient payment methods.",
        "image": "assets/card/card1.jpg"
    }),
    new Card({
        "title": "No Title Yet",
        "description": "No Description Yet",
        "image": "null"
    }),
    new Card({
        "title": "No Title Yet",
        "description": "No Description Yet",
        "image": "null"
    })
];
const randomText = [
    "Be #RealWorld Ready when you study at ACLC!",
    "Online Learning for College and Senior High School",
    "DepEd voucher accepted for Senior High School"
];
const arrayOfCards = [];
const content = document.getElementById('content-id');
function main() {
    const cardNode = document.getElementById('childcontainer');
    const container = document.getElementById("container");
    addHoverScroller('contact', 'contactdest');
    addHoverScroller('home', 'homedest');
    addHoverScroller('about', 'aboutdest');
    addHoverScroller('homelogo', 'homedest');
    toggleButton();
    for (let i = 0; i < cards.length; i++) {
        addCards(cardNode);
        container.appendChild(arrayOfCards[i]);
        let text = arrayOfCards[i].childNodes[3];
        let cardTitleText = text.childNodes[0];
        let cardDescText = text.childNodes[3].childNodes[1];
        cardTitleText.nodeValue = cards[i].Title;
        cardDescText.nodeValue = cards[i].Description;
        if (cards[i]['image'] === "null")
            continue;
        let image = arrayOfCards[i].childNodes[1];
        image.style.backgroundImage = "url(" + cards[i].Image + ")";
        delete cards[i];
    }
    cardNode.remove();
    refreshText();
}
function refreshText() {
    for (let i = 0; i < randomText.length; i++) {
        let contentChild = content.childNodes[3].childNodes[0];
        contentChild.nodeValue = randomText[Math.floor(Math.random() * 3)];
    }
}
function addCards(node, clone = true) {
    if (clone) {
        arrayOfCards.push(node.cloneNode(true));
        return;
    }
    arrayOfCards.push(node);
}
function visible(target, active) {
    let x = document.getElementById(target);
    if (active) {
        x.style.display = 'block';
        return;
    }
    x.style.display = 'none';
}
function toggleButton() {
    const toggle = document.getElementsByClassName('togglebutton')[0];
    const navbarLinks = document.getElementsByClassName('navbar-links')[0];
    toggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
}
function addHoverScroller(button, dest) {
    document.getElementById(button).addEventListener('click', () => {
        document.getElementById(dest).scrollIntoView({ behavior: 'smooth' });
    });
}
main();
//# sourceMappingURL=aclc.js.map