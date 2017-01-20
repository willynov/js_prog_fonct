var expect = require('chai').expect;
var summerizeBasket = require('./panier.js').summarizeBasket;

let prices = { banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 };

let products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato',
'potato', 'tomato', 'potato' ];

describe ('summarizeBasket', function() {
    it('Empty basket should retun 0 for each value', function() {
        var res = summerizeBasket({}, []);
        expect(res.prices).to.be.equal(0);
        expect(res.countArticles).to.be.equal(0);
        expect(res.countProducts).to.be.equal(0);
    });
    it('Basket with only product should return price of the product', function() {
        var res = summerizeBasket({prices}, ['cucumber']);
        expect(res.prices).to.be.equal(4);
        expect(res.countArticles).to.be.equal(1);
        expect(res.countProducts).to.be.equal(1);
    });
});