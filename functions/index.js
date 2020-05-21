// 书写完整函数类型
var myAdd = function (x, y) {
    return x + y;
};
// 可选参数和默认参数
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
// 重载
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 },
];
var pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
