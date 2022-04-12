type CardAttribute = {
    readonly title: string;
    readonly description: string;
}

abstract class CardBase {
    private title: string
    private description: string
    private container: HTMLElement

    constructor(attr: CardAttribute) {
        this.title = attr.title;
        this.description = attr.description;
        this.container = getNodeByID('container');
    }

    public addCards(node: HTMLElement) {
        this.container.appendChild(node);
        let text: ChildNode = getChild(3, node);
        let cardTitleText: HTMLElement = getChild(0, text);
        let cardDescText: ChildNode = getChild(3, text).childNodes[1];
        cardTitleText.nodeValue = this.Title;
        cardDescText.nodeValue = this.Description;
        this.define(node);
    }

    protected abstract define(node: HTMLElement): void;

    public get Title() {
        return this.title;
    }

    public get Description() {
        return this.description;
    }
}

