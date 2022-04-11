// Huwag ninyo tong pakialamin
const arrayOfCards: HTMLElement[] = [];
const content: HTMLElement = document.getElementById('content-id');

function main(): void {
    const cardNode: HTMLElement = document.getElementById('childcontainer');
    const container: HTMLElement = document.getElementById("container");
    addHoverScroller('contact', 'contactdest');
    addHoverScroller('home', 'homedest');
    addHoverScroller('about', 'aboutdest');
    addHoverScroller('homelogo', 'homedest');
    toggleButton();

    for (let i: number = 0; i < cards.length; i++) {
        addCards(cardNode);
        container.appendChild(arrayOfCards[i]);
        let text: ChildNode = arrayOfCards[i].childNodes[3];
        let cardTitleText: ChildNode = text.childNodes[0];
        let cardDescText: ChildNode = text.childNodes[3].childNodes[1];
        cardTitleText.nodeValue = cards[i].Title;
        cardDescText.nodeValue = cards[i].Description;
        if (cards[i]['image'] === "null") 
            continue;
        let image: HTMLElement = <HTMLElement>arrayOfCards[i].childNodes[1];
        image.style.backgroundImage = "url(" + cards[i].Image + ")";
        delete cards[i];
    }
    cardNode.remove();
    refreshText();
}

function refreshText(): void {
    for (let i: number = 0; i < randomText.length; i++) {
        let contentChild: ChildNode = content.childNodes[3].childNodes[0];
        contentChild.nodeValue = randomText[Math.floor(Math.random() * 3)];
    }
}

function addCards(node: HTMLElement, clone: boolean = true): void {
    if (clone) {
        arrayOfCards.push(<HTMLElement>node.cloneNode(true));
        return;
    }
    arrayOfCards.push(node);
}

function visible(target: string, active: boolean) {
    let x: HTMLElement = document.getElementById(target);
    if (active) {
        x.style.display = 'block';
        return;
    }
    x.style.display = 'none';
}


function toggleButton(): void {
    const toggle: Element = document.getElementsByClassName('togglebutton')[0];
    const navbarLinks: Element = document.getElementsByClassName('navbar-links')[0];

    toggle.addEventListener('click', (): void => {
        navbarLinks.classList.toggle('active');
    });
}

function addHoverScroller(button: string, dest: string): void {
    document.getElementById(button).addEventListener('click', (): void => {
        document.getElementById(dest).scrollIntoView({ behavior: 'smooth'})
    })
}

main();