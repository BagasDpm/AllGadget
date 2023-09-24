function filterGadgets() {
    var input, filter, cards, card, title, description;
    input = document.getElementById("filter-input");
    filter = input.value.toUpperCase();
    cards = document.getElementById("gadget-grid").getElementsByClassName("card");

    for (var i = 0; i < cards.length; i++) {
        card = cards[i];
        title = card.getElementsByTagName("h3")[0];
        description = card.getElementsByTagName("p")[0];
        if (title.innerText.toUpperCase().indexOf(filter) > -1 || description.innerText.toUpperCase().indexOf(filter) > -1) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    }
}