// Huwag ninyo tong pakialamin
type Configure = {
    readonly buttonName: string
    readonly onClick: () => void
}


enum Destinations {
    Contact = "Contact",
    Home = "Home",
    About = "About"
}

const arrayOfCards: HTMLElement[] = [];
const content: HTMLElement = getNodeByID('content-id');
const destinations: string[][] = [
    ['contact', Destinations.Contact],
    ['home', Destinations.Home],
    ['about', Destinations.About],
    ['homelogo', Destinations.Home]
]

function main(): void {
    const cardNode: HTMLElement = getNodeByID('childcontainer');

    connectButtonEvents([{
        buttonName: 'enrollbutton',
        onClick: () => { visible('log', true) }
    },
    {
        buttonName: 'exitenrollbutton',
        onClick: () => { visible('log', false) }
    }])

    loop(cards.length, i => {
        cards[i].addCards(<HTMLElement>cardNode.cloneNode(true));
        delete cards[i];
    });

    cardNode.remove();
    refreshText();
}

function refreshText(): void {
    let contentChild: ChildNode = content.childNodes[3].childNodes[0];
    contentChild.nodeValue = randomText[Math.ceil(Math.random() * 3 - 1)];
}


function addCards(node: HTMLElement): void {
    arrayOfCards.push(<HTMLElement>node.cloneNode(true));
}

function connectButtonEvents(config: Configure[]): void {
    for (let i = 0; i < config.length; i++) {
        const button: HTMLButtonElement = getNodeByID<HTMLButtonElement>(config[i].buttonName);
        button.onclick = config[i].onClick;
    }
    
    const arrowLeftButton: HTMLButtonElement = getNodeByID<HTMLButtonElement>('arrowleft');
    const arrowRightButton: HTMLButtonElement = getNodeByID<HTMLButtonElement>('arrowright');

    loop(destinations.length, i => {
        addHoverScroller(destinations[i][0], <Destinations>destinations[i][1]);
    })
    const toggle: Element = getNodeByID('toggle');
    const navbarLinks: Element = getNodeByID('nvlink');

    toggle.addEventListener('click', (): void => {
        navbarLinks.classList.toggle('active');
    });
}


function addHoverScroller(button: string, dest: Destinations): void {
    getNodeByID(button).addEventListener('click', (): void => {
        getNodeByID(`Dest_${dest}`).scrollIntoView({ behavior: 'smooth'})
    })
}

main();