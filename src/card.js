class Card {
    constructor(attr) {
        this.name = attr['title'];
        this.description = attr['description'];
        this.image = attr['image'];
    }

    getTitle() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getImage() {
        return this.image;
    }
}