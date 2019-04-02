class Card {
    constructor(data, subject) {
        this.title = data.title;
        this.label = Utility.createLabel(data.title);
        this.description = data.description;
        this.accessLink = data.accessLink;
        this.subject = subject;
        this.color = Utility.convertToRGBANotation(subject.color);
    }

    build() {
        let content = this._createContent();
        let link = this._createLink(content);
        let card = this._createCard(link);
        
        this.subject.cardContainer.appendChild(card);
    }

    _createContent() {
        let title = document.createElement("h3");
        title.innerText = this.title;
        title.classList.add("card__title");
        title.style.color = title.style.borderColor = this.color;

        let description = document.createElement("p");
        description.innerText = this.description;
        description.classList.add("card__description");
        
        let content = document.createElement("section");
        content.classList.add("card__content");
        content.appendChild(title);
        content.appendChild(description);

        return content;
    }

    _createLink(content) {
        let link = document.createElement("a");
        link.href = this.accessLink;
        link.target = "_blank";

        link.classList.add(
            "card__link",
            "card__link-" + this.label
        );

        link.appendChild(content);

        return link;
    }

    _createCard(link) {
        let card = document.createElement("article");
        card.classList.add("card", "card-" + this.label);
        card.appendChild(link);

        return card;
    }
}