"use strict";
const totalPrice = ({ price, discount, isInstallment, months }) => {
    if (isInstallment) {
        const result = (price / months) - ((price / months) * (discount / 100));
        return result;
    }
    else {
        console.log('not data');
    }
};
const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250
