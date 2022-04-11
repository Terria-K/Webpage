"use strict";
class Card {
    constructor(attr) {
        this.title = attr.title;
        this.description = attr.description;
        this.image = attr.image;
    }
    get Title() {
        return this.title;
    }
    get Description() {
        return this.description;
    }
    get Image() {
        return this.image;
    }
}
const openLink = (url) => {
    window.open(url);
};
const openACLC = () => {
    if (confirm("You will be redirected to ACLC Malolos Official's Facebook page"))
        openLink("https://www.facebook.com/ACLCMalolosOfficial");
};
const getNodeElements = (className) => document.getElementsByClassName(className);
const getNodeElement = (className, idx) => getNodeElements(className)[idx];
const getNodeByID = (id) => document.getElementById(id);
const getChild = (idx, node) => node.childNodes[idx];
const visible = (target, active) => {
    let x = getNodeByID(target);
    x.style.display = active ? 'block' : 'none';
};
const cards = [
    new Card({
        "title": "Enrollment Ongoing for College",
        "description": "New Students & Transferees Accepted! We will be glad to assist you! Enroll now and be part our Family!",
        "image": "assets/card/card2.png"
    }),
    new Card({
        "title": "Online Student Enrollment System and Payment System",
        "description": "GREAT NEWS! You may now pay your tuition and other fees online. Pay via credit card, online banking, 7-Eleven, Cebuana, SM Bills payment and other safe and convenient payment methods.",
        "image": "assets/card/card1.jpg"
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
const content = getNodeByID('content-id');
var Destinations;
(function (Destinations) {
    Destinations["Contact"] = "Contact";
    Destinations["Home"] = "Home";
    Destinations["About"] = "About";
})(Destinations || (Destinations = {}));
function main() {
    const cardNode = getNodeByID('childcontainer');
    const container = getNodeByID('container');
    addHoverScroller('contact', Destinations.Contact);
    addHoverScroller('home', Destinations.Home);
    addHoverScroller('about', Destinations.About);
    addHoverScroller('homelogo', Destinations.Home);
    toggleButton();
    for (let i = 0; i < cards.length; i++) {
        addCards(cardNode);
        container.appendChild(arrayOfCards[i]);
        let text = getChild(3, arrayOfCards[i]);
        let cardTitleText = getChild(0, text);
        let cardDescText = getChild(3, text).childNodes[1];
        cardTitleText.nodeValue = cards[i].Title;
        cardDescText.nodeValue = cards[i].Description;
        if (cards[i]['image'] === "null") {
            delete cards[i];
            continue;
        }
        let image = getChild(1, arrayOfCards[i]);
        image.style.backgroundImage = `url(${cards[i].Image})`;
        delete cards[i];
    }
    cardNode.remove();
    refreshText();
}
function refreshText() {
    let contentChild = content.childNodes[3].childNodes[0];
    contentChild.nodeValue = randomText[Math.ceil(Math.random() * 3)];
}
function addCards(node) {
    arrayOfCards.push(node.cloneNode(true));
}
function toggleButton() {
    const toggle = getNodeElement('togglebutton', 0);
    const navbarLinks = getNodeElement('navbar-links', 0);
    toggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
}
function addHoverScroller(button, dest) {
    getNodeByID(button).addEventListener('click', () => {
        getNodeByID(`Dest_${dest}`).scrollIntoView({ behavior: 'smooth' });
    });
}
main();
