let summarizeBasket = (prices, products) => {
    if(!products || !products.length) {
        return {
            price : 0,
            countArticles: 0,
            countProducts: 0
        };
    } else {
            return 'TO BE CONTINUED';
    }
}

module.export = {
    summarizeBasket: summarizeBasket
};