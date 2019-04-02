window.addEventListener("load", function (event) {
    data.map(data => {
        let subject = new Subject(data);
        let container = subject.build();

        let link = new Link(subject);
        link.build();

        data.cards.map(data => {
            let card = new Card(data, subject);
            card.build();
        });
    });
});

document.querySelectorAll(".side-menu__item").forEach(item =>
    item.addEventListener(
        "click", 
        Utility.toggleSideMenuAndButton()
    )
);

document.querySelector("#hamburger-menu-button").addEventListener(
    "click",
    function() { Utility.toggleSideMenuAndButton(); }
);