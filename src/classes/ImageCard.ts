type ImageAttribute = {
    readonly card: CardAttribute;
    readonly image: string;
}

class ImageCard extends CardBase {
    private readonly image: string;

    public constructor(attr: ImageAttribute) {
        super(attr.card);
        this.image = attr.image;
    }

    protected override define(node: HTMLElement): void {
        if (this.isNullOrEmpty(this.Image)) {
            return;
        }
        let image: HTMLElement = getChild(1, node);
        image.style.backgroundImage = `url(${this.Image})`;
    }

    private isNullOrEmpty(text: string): boolean {
        return text === "null" || text === "" || text == null ? true : false;
    }
    
    public get Image(): string {
        return this.image;
    }
}