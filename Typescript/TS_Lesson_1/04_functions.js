function add(x, y) {
    return x + y;
}
var add2 = function (x, y) {
    return x + y;
};
var add3 = function (x, y) {
    return x + y;
};
add(1, 2);
function buildName(name, prefix) {
    if (prefix === void 0) { prefix = 'mr'; }
    return prefix + " " + name;
}
console.log(buildName('Jons'));
console.log(buildName('Jons', 'ms'));
function optional(req, opt) {
    console.log(req, opt);
}
optional(1);
function optionalObject(x) {
    if (x === void 0) { x = { "foo": "bar" }; }
    console.log(x);
}
optionalObject();
function varArg(first) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return first + ' , ' + rest.join(' , ');
}
console.log(varArg("first", 'second', 'third'));
var person = {
    lastName: "ddd",
    firsName: "xxxx",
    print: function () {
        console.log(this.firsName, this.lastName);
    }
};
person.print();
function compare(x, y) {
    if (typeof x == 'string') {
        return x < y;
    }
    if (typeof x == 'object') {
        if (x.lastName === y.lastName) {
            return x.firsName < y.firsName;
        }
        return x.lastName < y.lastName;
    }
}
compare("1", "2");
