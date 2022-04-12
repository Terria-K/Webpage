interface ICard {
    title: string
    description: string
    image: string
}

class Card {
    private title: string
    private description: string
    private image: string

    constructor(attr: ICard) {
        this.title = attr.title;
        this.description = attr.description;
        this.image = attr.image;
    }

    public get Title() {
        return this.title;
    }

    public get Description() {
        return this.description;
    }

    public get Image() {
        return this.image;
    }
}