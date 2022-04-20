"use strict";
function openLink(url) {
    window.open(url);
}
function openACLC() {
    if (confirm("You will be redirected to ACLC Malolos Official's Facebook page"))
        openLink("https://www.facebook.com/ACLCMalolosOfficial");
}
function getNodeElements(className) {
    return document.getElementsByClassName(className);
}
function getNodeElement(className, idx) {
    return getNodeElements(className)[idx];
}
function getNodeByID(id) {
    return document.getElementById(id);
}
function getChild(idx, node) {
    return node.childNodes[idx];
}
function visible(target, active) {
    let x = getNodeByID(target);
    x.style.display = active;
}
function loop(iterations, block) {
    for (let i = 0; i < iterations; i++) {
        block(i);
    }
}
function clamp(value, min, max) {
    return value > max ? max : value < min ? min : value;
}
class CardBase {
    constructor(attr) {
        this.title = attr.title;
        this.description = attr.description;
        this.container = getNodeByID('container');
    }
    addCards(node) {
        this.container.appendChild(node);
        let text = getChild(3, node);
        let cardTitleText = getChild(0, text);
        let cardDescText = getChild(3, text).childNodes[1];
        cardTitleText.nodeValue = this.Title;
        cardDescText.nodeValue = this.Description;
        this.define(node);
    }
    get Title() {
        return this.title;
    }
    get Description() {
        return this.description;
    }
}
class ImageCard extends CardBase {
    constructor(attr) {
        super(attr.card);
        this.image = attr.image;
    }
    define(node) {
        if (this.isNullOrEmpty(this.Image)) {
            return;
        }
        let image = getChild(1, node);
        image.style.backgroundImage = `url(${this.Image})`;
    }
    isNullOrEmpty(text) {
        return text === "null" || text === "" || text == null ? true : false;
    }
    get Image() {
        return this.image;
    }
}
var ACLC;
(function (ACLC) {
    var Writeable;
    (function (Writeable) {
        Writeable.Cards = [
            new ImageCard({
                card: {
                    title: "Enrollment Ongoing for College",
                    description: "New Students & Transferees Accepted! We will be glad to assist you! Enroll now and be part our Family!"
                },
                image: "assets/card/card2.png"
            }),
            new ImageCard({
                card: {
                    title: "Online Student Enrollment System and Payment System",
                    description: "GREAT NEWS! You may now pay your tuition and other fees online. Pay via credit card, online banking, 7-Eleven, Cebuana, SM Bills payment and other safe and convenient payment methods."
                },
                image: "assets/card/card1.jpg"
            }),
            new ImageCard({
                card: {
                    title: "No Title Yet",
                    description: "No Description Yet",
                },
                image: "null"
            }),
            new ImageCard({
                card: {
                    title: "",
                    description: ""
                },
                image: "null"
            }),
            new ImageCard({
                card: {
                    title: "",
                    description: ""
                },
                image: "null"
            })
        ];
    })(Writeable = ACLC.Writeable || (ACLC.Writeable = {}));
})(ACLC || (ACLC = {}));
var ACLC;
(function (ACLC) {
    var Writeable;
    (function (Writeable) {
        Writeable.RandomText = [
            "Be #RealWorld Ready when you study at ACLC!",
            "Online Learning for College and Senior High School",
            "DepEd voucher accepted for Senior High School"
        ];
    })(Writeable = ACLC.Writeable || (ACLC.Writeable = {}));
})(ACLC || (ACLC = {}));
var ACLC;
(function (ACLC) {
    var cards = ACLC.Writeable.Cards;
    var randomText = ACLC.Writeable.RandomText;
    let Destinations;
    (function (Destinations) {
        Destinations["Contact"] = "Contact";
        Destinations["Home"] = "Home";
        Destinations["About"] = "About";
    })(Destinations || (Destinations = {}));
    const content = getNodeByID('content-id');
    const destinations = new Map([
        ['contact', "Contact"],
        ['home', "Home"],
        ['about', "About"],
        ['homelogo', "Home"]
    ]);
    function main() {
        const cardNode = getNodeByID('childcontainer');
        connectButtonEvents([{
                buttonName: 'enrollbutton',
                onClick: () => { visible('log', "block"); }
            },
            {
                buttonName: 'exitenrollbutton',
                onClick: () => { visible('log', "none"); }
            }]);
        loop(cards.length, i => {
            cards[i].addCards(cardNode.cloneNode(true));
            delete cards[i];
        });
        cardNode.remove();
        refreshText();
    }
    ACLC.main = main;
    function refreshText() {
        let contentChild = content.childNodes[3].childNodes[0];
        let num = Math.random() * 3 - 1;
        contentChild.nodeValue = randomText[Math.ceil(num)];
    }
    function connectButtonEvents(config) {
        for (let i = 0; i < config.length; i++) {
            const button = getNodeByID(config[i].buttonName);
            button.onclick = config[i].onClick;
        }
        for (let entry of destinations.entries()) {
            addHoverScroller(entry[0], entry[1]);
        }
        const toggle = getNodeByID('toggle');
        const navbarLinks = getNodeByID('nvlink');
        toggle.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
        });
    }
    function addHoverScroller(button, dest) {
        getNodeByID(button).addEventListener('click', () => {
            getNodeByID(`Dest_${dest}`).scrollIntoView({ behavior: 'smooth' });
        });
    }
})(ACLC || (ACLC = {}));
ACLC.main();
