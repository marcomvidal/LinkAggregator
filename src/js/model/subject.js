class Subject {
    constructor(data) {
        this.title = data.subject;
        this.icon = data.icon;
        this.color = data.color;
        this.label = this._createLabel();
        this.cardContainer;
    }

    build() {
        let title = this._createTitle();
        this.cardContainer = this._createCardContainer();
        
        let subjectContainer = this._createSubjectContainer(
            title,
            this.cardContainer
        );

        document.querySelector("main.content.container")
            .appendChild(subjectContainer);
    }

    _createLabel() {
        return "content__".concat(
            Utility.createLabel(this.title),
            "-container"
        );
    }

    _createTitle() {
        let icon = document.createElement("i");

        this.icon.map(i => {
            icon.classList.add(i);
        });

        let title = document.createElement("h1");
        title.classList.add("subject__title");
        title.innerText = " " + this.title;
        title.prepend(icon);

        let titleContainer = document.createElement("header");
        titleContainer.classList.add("subject");
        titleContainer.appendChild(title);

        return titleContainer;
    }

    _createCardContainer() {
        let cardContainer = document.createElement("section");

        cardContainer.classList.add(
            "content__cards-container",
            this.label
        );

        return cardContainer;
    }
    
    _createSubjectContainer(title, cardContainer) {
        let subjectContainer = document.createElement("section");

        let anchor = document.createElement("a");
        anchor.id = Utility.createLabel(this.title);
        anchor.classList.add("anchor");
        
        subjectContainer.classList.add(
            "content__subject-container",
            this.label
        );

        subjectContainer.append(anchor);
        subjectContainer.appendChild(title);
        subjectContainer.appendChild(cardContainer);

        return subjectContainer;
    }
}