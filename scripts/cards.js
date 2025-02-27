let cards_1 = document.getElementById('bnt1');
let cards_2 = document.getElementById('bnt2');
var c = 0;

function button_cards() {

    if (c % 2 == 0) {
        cards_1.style.display = 'none';
        cards_2.style.display = 'flex';
    }
    else {
        cards_1.style.display = 'flex';
        cards_2.style.display = 'none';
    }

    c++
}