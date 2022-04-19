// Huwag ninyo tong pakialamin

namespace ACLC {
    import cards = Writeable.Cards;
    import randomText = Writeable.RandomText;

    type Configure = {
        readonly buttonName: string
        readonly onClick: () => void
    }
    

    const enum Destinations {
        Contact = "Contact",
        Home = "Home",
        About = "About"
    }

    const content: HTMLElement = getNodeByID('content-id');
    const destinations: Map<string, Destinations> = new Map<string, Destinations>([
        ['contact', Destinations.Contact],
        ['home', Destinations.Home],
        ['about', Destinations.About],
        ['homelogo', Destinations.Home]
    ])
    
    export function main(): void {
        const cardNode: HTMLElement = getNodeByID('childcontainer');
    
        connectButtonEvents([{
            buttonName: 'enrollbutton',
            onClick: () => { visible('log', "block") }
        },
        {
            buttonName: 'exitenrollbutton',
            onClick: () => { visible('log', "none") }
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
        let num: number = Math.random() * 3 - 1;
        contentChild.nodeValue = randomText[Math.ceil(num)];
    }
    
    function connectButtonEvents(config: Configure[]): void {
        for (let i = 0; i < config.length; i++) {
            const button: HTMLButtonElement = getNodeByID(config[i].buttonName);
            button.onclick = config[i].onClick;
        }
    
        for (let entry of destinations.entries()) {
            addHoverScroller(entry[0], entry[1]);
        }   
    
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
}