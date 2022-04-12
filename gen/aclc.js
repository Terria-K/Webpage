"use strict";
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
const loop = (iterations, block) => {
    for (let i = 0; i < iterations; i++) {
        block(i);
    }
};
const clamp = (value, min, max) => value > max ? max : value < min ? min : value;
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
var Destinations;
(function (Destinations) {
    Destinations["Contact"] = "Contact";
    Destinations["Home"] = "Home";
    Destinations["About"] = "About";
})(Destinations || (Destinations = {}));
const arrayOfCards = [];
const content = getNodeByID('content-id');
const destinations = [
    ['contact', Destinations.Contact],
    ['home', Destinations.Home],
    ['about', Destinations.About],
    ['homelogo', Destinations.Home]
];
function main() {
    const cardNode = getNodeByID('childcontainer');
    const container = getNodeByID('container');
    connectButtonEvents();
    loop(cards.length, i => {
        addCards(cardNode);
        container.appendChild(arrayOfCards[i]);
        let text = getChild(3, arrayOfCards[i]);
        let cardTitleText = getChild(0, text);
        let cardDescText = getChild(3, text).childNodes[1];
        cardTitleText.nodeValue = cards[i].Title;
        cardDescText.nodeValue = cards[i].Description;
        if (cards[i].Image === "null") {
            delete cards[i];
            return;
        }
        let image = getChild(1, arrayOfCards[i]);
        image.style.backgroundImage = `url(${cards[i].Image})`;
        delete cards[i];
    });
    cardNode.remove();
    refreshText();
}
function refreshText() {
    let contentChild = content.childNodes[3].childNodes[0];
    contentChild.nodeValue = randomText[Math.ceil(Math.random() * 3 - 1)];
}
function addCards(node) {
    arrayOfCards.push(node.cloneNode(true));
}
function connectButtonEvents() {
    const enrollButton = getNodeByID('enrollbutton');
    const exitenrollButton = getNodeByID('exitenrollbutton');
    enrollButton.onclick = () => visible('log', true);
    exitenrollButton.onclick = () => visible('log', false);
    const arrowLeftButton = getNodeElement('arrowleft', 0);
    const arrowRightButton = getNodeElement('arrowright', 0);
    loop(destinations.length, i => {
        addHoverScroller(destinations[i][0], destinations[i][1]);
    });
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
