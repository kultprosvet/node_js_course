var person = {
    lastName: "ddd",
    firsName: "xxxx",
    print: function () { return console.log("dss"); }
};
function printPerson(p) {
    console.log(p.firsName, p.lastName);
}
printPerson(person);
var worker = {
    lastName: "Pupkin",
    firsName: "Vasya",
    position: 'Developer',
    sallary: 100
};
worker.position = 'Tester';
var x = {
    prop: 'string',
    dsds: "sdsds",
    dsdds: "sddsds"
};
x['test'] = 'ddssdds';
var func = function (source, subString) {
    return true;
};
