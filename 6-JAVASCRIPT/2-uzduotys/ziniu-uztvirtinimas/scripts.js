// duomenys

let workingHours=8;
let productivity=3;
let workers=10;
let loafCost=2;
let loafPrice=4;
let dayOrders=10;
let production=workers*productivity*workingHours
let costs=loafCost*production;
let income =loafPrice*production;
let PnL=income - costs;


console.log((workers*productivity*workingHours) + " kepalų iškepama per dieną");

console.log(PnL + " \x80 pelnas/nuostolis");

if (production>=dayOrders) {
    console.log ("Kepykla spės iškepti pateiktus užsakymus");
}

if (production<dayOrders) {
    console.log ("Kepykla nespės iškepti " + (dayOrders-production) + " kepalų");
} 

if (production>=dayOrders) {
    console.log (((income-costs)*dayOrders) + " \x80 pelnas gautas pardavus visus užsakytus kepalus");
} else if (production<dayOrders) {
    console.log (((income-costs)*production) + " \x80 pelnas gautas pardavus visus iškeptus kepalus")
}