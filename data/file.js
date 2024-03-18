module.exports = function() {
    var data = {};

    data.orders = [];
    data.orders.push({ id: 1, ref: 'abcdef', customers_id: 2 });
    data.orders.push({ id: 2, ref: 'ghijkl', customers_id: 3 });
    data.orders.push({ id: 3, ref: 'mnopqr', customers_id: 1 });

    data.customers = [];
    data.customers.push({ id: 1, name: 'Pierre' });
    data.customers.push({ id: 2, name: 'Paul' });
    data.customers.push({ id: 3, name: 'Jacques' });

    return data;
}