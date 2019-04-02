class Utility {
    static createLabel(title) {
        return title
            .replace(/\s/g, "-")
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    }

    static convertToRGBANotation(color) {
        return (color.match(/,/g).length == 3 ?
            "rgba(".concat(color, ")") :
            "rgb(".concat(color, ")")
        );
    }

    static toggleSideMenuAndButton() {
        document.querySelector("#side-menu__container")
            .classList.toggle("side-menu__container--off");

        document.querySelector("#hamburger-menu-button")
            .classList.toggle("hamburger-menu-button--on");
    }
}