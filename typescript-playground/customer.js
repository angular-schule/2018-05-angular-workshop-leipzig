"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(id) {
        this.id = id;
    }
    Customer.prototype.foo = function () {
        var _this = this;
        debugger;
        var self = this;
        function callback() {
            return self.id * 10;
        }
        var callback2 = function () { return _this.id * 100; };
        console.log(callback2());
        var city = 'Leipzig';
        var text = 'Hallo\n' + city + '!';
        var text2 = "Hallo\n        " + city + "!";
        console.log(text2);
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map