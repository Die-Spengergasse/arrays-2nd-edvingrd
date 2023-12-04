const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

const output = document.getElementById("output");
output.publish = function (arg) {
    this.innerHTML = JSON.stringify(arg);
};

const button_push = document.getElementById("button_push");
button_push.addEventListener("click", push);

const button_indexof = document.getElementById("button_indexof");
button_indexof.addEventListener("click", indexof);

const button_includes = document.getElementById("button_includes");
button_includes.addEventListener("click", includes);

const button_slice = document.getElementById("button_slice");
button_slice.addEventListener("click", slice);

const button_splice = document.getElementById("button_splice");
button_splice.addEventListener("click", splice);

const button_of = document.getElementById("button_of");
button_of.addEventListener("click", of);

const button_map = document.getElementById("button_map");
button_map.addEventListener("click", map);

const button_filter = document.getElementById("button_filter");
button_filter.addEventListener("click", filter);

const button_split = document.getElementById("button_split");
button_split.addEventListener("click", split);

const button_join = document.getElementById("button_join");
button_join.addEventListener("click", join);

const button_some = document.getElementById("button_some");
button_some.addEventListener("click", some);

const button_reverse = document.getElementById("button_reverse");
button_reverse.addEventListener("click", reverse);

const button_spread = document.getElementById("button_spread");
button_spread.addEventListener("click", spread);

const button_reduce = document.getElementById("button_reduce");
button_reduce.addEventListener("click", reduce);

function push() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);

    i1.push(i2);
    output.publish(i1);
}

function indexof() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);

    const Index = i1.indexOf(i2);
    output.publish(Index);
}

function includes() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);

    const prüfen = i1.includes(i2);
    if (prüfen == true) {
        output.publish("Der Wert " + i2 + " ist im Array enthalten");
    }
    else {
        output.publish("Der Wert " + i2 + " ist nicht im Array enthalten");
    }
}

function slice() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const i3 = eval(input3.value);

    let Ausschnitt = i1.slice(i2, i3);
    output.publish(Ausschnitt);
}

function splice() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const i3 = eval(input3.value);

    let gespliced = i1.splice(i2, i3);
    output.publish(gespliced);
}

function of() {
    let i1 = eval(input1.value);

    Ausgabe = Array.of(i1);
    output.publish(Ausgabe);
}

function map() 
{
    let i1 = eval(input1.value);

    const Array = i1.every(Wert => !isNaN(Wert));

    if (Array) {
        const quadrierteZahlen = i1.map(Zahl => Zahl * Zahl);

        output.publish(quadrierteZahlen);
    } else {
        const Wortlänge = i1.map(function (Wort) {
            return Wort.length;
        });

        output.publish(Wortlänge);
    }
}
function filter()
{
    let i1 = eval(input1.value);

    const geradeZahlen = i1.filter(Zahl => Zahl % 2 === 0);

    output.publish(geradeZahlen);
}
function split()
{
    let i1 = eval(input1.value);

    const Wörter = i1.split(" ");

    output.publish(Wörter);
}
function join()
{
    let i1 = eval(input1.value);

    const Satz = i1.join(', ');

    output.publish(Satz);
}
function some()
{
    let i1 = eval(input1.value);

    const geradeZahlen = i1.some(function (Zahl) {
        return Zahl % 2 === 0;
      });

    if (geradeZahlen == true)
    {
        output.publish("Das Array hat gerade Zahlen");
    }
    else
    {
        output.publish("Das Array hat keine gerade Zahlen");
    }
}
function reverse()
{
    let i1 = eval(input1.value);

    let verkehrterWert = i1.reverse();

    output.publish(verkehrterWert);
}
function spread()
{
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    const i3 = eval(input3.value);

    if (i1 != null && i2 != null && i3 != null)
    {
        let Ausgabe = [...i1, ...i2, ...i3];
        output.publish(Ausgabe);
    }
    else if (i1 != null && i2 != null)
    {
        let Ausgabe = [...i1, ...i2];
        output.publish(Ausgabe);
    }
    else
    {
        output.publish(i1);
    }
}
function reduce()
{
    const i1 = eval(input1.value);

    const Summe = i1.reduce(function (Wert, verarbeiteterWert) {
        return Wert + verarbeiteterWert; }, 0);
      
    output.publish(Summe);
}