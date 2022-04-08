// Huwag ninyo tong pakialamin
const arrayOfCards = [];
const content = document.getElementById("content-id")

function main() {
    const cardNode = document.getElementById("childcontainer");
    const container = document.getElementById("container");    
    connectEvents();

    addCards(cardNode, false);
    addCards(cardNode);
    addCards(cardNode);

    for (var i = 0; i < arrayOfCards.length; i++) {
        container.appendChild(arrayOfCards[i]);
        let text = arrayOfCards[i].childNodes[3];
        let cardTitleText = text.childNodes[0];
        let cardDescText = text.childNodes[3].childNodes[1];
        cardTitleText.nodeValue = cards[i].getTitle();
        cardDescText.nodeValue = cards[i].getDescription();
    }
    refreshText();
}

function addCards(node, clone = true) {
    if (clone) {
        arrayOfCards.push(node.cloneNode(true));
        return;
    }
    arrayOfCards.push(node);
}

function refreshText() {
    for (var i = 0; i < randomText.length; i++) {
        let contentChild = content.childNodes[3].childNodes[0];
        contentChild.nodeValue = randomText[Math.floor(Math.random() * 3)];
    }
}

function loginForm(active) {
    var x = document.getElementById('log');
    if (active) {
        x.style.display = 'block';
        return;
    }
    x.style.display = 'none';
}


window.addEventListener('scroll', () => {
    var scroll =  window.pageYOffset,
    blur_val = (scroll / 200);

    document.getElementById('ban').style.filter = "blur("+blur_val+"px)"
})

main();

