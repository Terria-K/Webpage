type ImageAttribute = {
    readonly card: CardAttribute;
    readonly image: string;
}

class ImageCard extends CardBase {
    private image: string;

    constructor(attr: ImageAttribute) {
        super(attr.card);
        this.image = attr.image;
    }

    protected override define(node: HTMLElement) {
        if (this.Image === "null") {
            return;
        }
        let image: HTMLElement = getChild(1, node);
        image.style.backgroundImage = `url(${this.Image})`;
    }

    public get Image() {
        return this.image;
    }
}