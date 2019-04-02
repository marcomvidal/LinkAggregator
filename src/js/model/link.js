class Link {
    constructor(subject) {
        this.subject = subject;
        this.menus = [".main-menu", ".side-menu"];
    }

    build() {
        this.menus.map(menu => this._bindToMenu(menu));
    }

    _createLink() {
        let link = document.createElement("a");
        link.href = "#".concat(Utility.createLabel(this.subject.title));
        link.classList.add("menu__link");
        link.innerText = this.subject.title;

        return link;
    }

    _bindToMenu(menu) {
        let link = this._createLink();
        let item = document.createElement("li");
        item.appendChild(link);

        if (menu == ".side-menu") {
            let icon = document.createElement("i");
            this.subject.icon.map(i => icon.classList.add(i));
            link.classList.add("side-menu__item");
            link.prepend(icon, " ");
        }

        let list = document.querySelector(menu);
        list.appendChild(item);
    }
}