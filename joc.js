var ok = 0;
var verif = 0;

var jucator = 2;
var j1 = document.getElementById("j1");
var j2 = document.getElementById("j2");
j1.value = "Jucator1 (X)";
j2.value = "Jucator2 (0)";

function functieXsi0(contor) {
    if (contor == 1)
        var nr = document.getElementById("nr1");
    if (contor == 2)
        var nr = document.getElementById("nr2");
    if (contor == 3)
        var nr = document.getElementById("nr3");
    if (contor == 4)
        var nr = document.getElementById("nr4");
    if (contor == 5)
        var nr = document.getElementById("nr5");
    if (contor == 6)
        var nr = document.getElementById("nr6");
    if (contor == 7)
        var nr = document.getElementById("nr7");
    if (contor == 8)
        var nr = document.getElementById("nr8");
    if (contor == 9)
        var nr = document.getElementById("nr9");
    if (ok == 0) {
        nr.value = "x";
        ok = 1;
        castigator();
    }
    else {

        nr.value = "0";
        ok = 0;
        castigator();
    }
}


function castigator() {

    var nr1 = document.getElementById("nr1");
    var nr2 = document.getElementById("nr2");
    var nr3 = document.getElementById("nr3");
    var nr4 = document.getElementById("nr4");
    var nr5 = document.getElementById("nr5");
    var nr6 = document.getElementById("nr6");
    var nr7 = document.getElementById("nr7");
    var nr8 = document.getElementById("nr8");
    var nr9 = document.getElementById("nr9");

    if (nr1.value == "x" && nr2.value == "x" && nr3.value == "x") {
        nr1.style.backgroundColor = "red";
        nr2.style.backgroundColor = "red";
        nr3.style.backgroundColor = "red";
        verif = 1; jucator = 1; ftext();
    }
    if (nr1.value == "0" && nr2.value == "0" && nr3.value == "0") {
        nr1.style.backgroundColor = "red";
        nr2.style.backgroundColor = "red";
        nr3.style.backgroundColor = "red";
        verif = 1; jucator = 0; ftext();
    }
    if (nr1.value == "x" && nr4.value == "x" && nr7.value == "x") {
        nr1.style.backgroundColor = "white";
        nr4.style.backgroundColor = "white";
        nr7.style.backgroundColor = "white";
        verif = 1; jucator = 1; ftext();
    }
    if (nr1.value == "0" && nr4.value == "0" && nr7.value == "0") {
        nr1.style.backgroundColor = "white";
        nr4.style.backgroundColor = "white";
        nr7.style.backgroundColor = "white";
        verif = 1; jucator = 0; ftext();
    }
    if (nr7.value == "x" && nr8.value == "x" && nr9.value == "x") {
        nr7.style.backgroundColor = "yellow";
        nr8.style.backgroundColor = "yellow";
        nr9.style.backgroundColor = "yellow";
        verif = 1; jucator = 1; ftext();
    }
    if (nr7.value == "0" && nr8.value == "0" && nr9.value == "0") {
        nr7.style.backgroundColor = "yellow";
        nr8.style.backgroundColor = "yellow";
        nr9.style.backgroundColor = "yellow";
        verif = 1; jucator = 0; ftext();
    }
    if (nr3.value == "x" && nr6.value == "x" && nr9.value == "x") {
        nr3.style.backgroundColor = "purple";
        nr6.style.backgroundColor = "purple";
        nr9.style.backgroundColor = "purple";
        verif = 1; jucator = 1; ftext();
    }
    if (nr3.value == "0" && nr6.value == "0" && nr9.value == "0") {
        nr3.style.backgroundColor = "purple";
        nr6.style.backgroundColor = "purple";
        nr9.style.backgroundColor = "purple";
        verif = 1; jucator = 0; ftext();
    }
    if (nr1.value == "x" && nr5.value == "x" && nr9.value == "x") {
        nr1.style.backgroundColor = "pink";
        nr5.style.backgroundColor = "pink";
        nr9.style.backgroundColor = "pink";
        verif = 1; jucator = 1; ftext();
    }
    if (nr1.value == "0" && nr5.value == "0" && nr9.value == "0") {
        nr1.style.backgroundColor = "pink";
        nr5.style.backgroundColor = "pink";
        nr9.style.backgroundColor = "pink";
        verif = 1; jucator = 0; ftext();
    }
    if (nr3.value == "x" && nr5.value == "x" && nr7.value == "x") {
        nr3.style.backgroundColor = "green";
        nr5.style.backgroundColor = "green";
        nr7.style.backgroundColor = "green";
        verif = 1; jucator = 1; ftext();
    }
    if (nr3.value == "0" && nr5.value == "0" && nr7.value == "0") {
        nr3.style.backgroundColor = "green";
        nr5.style.backgroundColor = "green";
        nr7.style.backgroundColor = "green";
        verif = 1; jucator = 0; ftext();
    }
    if (nr2.value == "x" && nr5.value == "x" && nr8.value == "x") {
        nr2.style.backgroundColor = "green";
        nr5.style.backgroundColor = "green";
        nr8.style.backgroundColor = "green";
        verif = 1; jucator = 1; ftext();
    }
    if (nr2.value == "0" && nr5.value == "0" && nr8.value == "0") {
        nr2.style.backgroundColor = "green";
        nr5.style.backgroundColor = "green";
        nr8.style.backgroundColor = "green";
        verif = 1; jucator = 0; ftext();
    }
    if (nr4.value == "x" && nr5.value == "x" && nr6.value == "x") {
        nr4.style.backgroundColor = "green";
        nr5.style.backgroundColor = "green";
        nr6.style.backgroundColor = "green";
        verif = 1; jucator = 1; ftext();
    }
    if (nr4.value == "0" && nr5.value == "0" && nr6.value == "0") {
        nr4.style.backgroundColor = "green";
        nr5.style.backgroundColor = "green";
        nr6.style.backgroundColor = "green";
        verif = 1; jucator = 0; ftext();
    }
}
function ftext() {
    if (verif == 1) {
        document.getElementById("castig").innerHTML = "Ai caștigat!";
        if (jucator == 1) {
            var scor1 = document.getElementById("scor1");
            scor1.value++;
        }
        if (jucator == 0) {
            var scor2 = document.getElementById("scor2");
            scor2.value++;
        }

    }
    else
        document.getElementById("castig").innerHTML = "";
}

function restartare() {
    var nr1 = document.getElementById("nr1");
    var nr2 = document.getElementById("nr2");
    var nr3 = document.getElementById("nr3");
    var nr4 = document.getElementById("nr4");
    var nr5 = document.getElementById("nr5");
    var nr6 = document.getElementById("nr6");
    var nr7 = document.getElementById("nr7");
    var nr8 = document.getElementById("nr8");
    var nr9 = document.getElementById("nr9");
    nr1.value = "";
    nr2.value = "";
    nr3.value = "";
    nr4.value = "";
    nr5.value = "";
    nr6.value = "";
    nr7.value = "";
    nr8.value = "";
    nr9.value = "";
    nr1.style.backgroundColor = "blue";
    nr2.style.backgroundColor = "blue";
    nr3.style.backgroundColor = "blue";
    nr4.style.backgroundColor = "blue";
    nr5.style.backgroundColor = "blue";
    nr6.style.backgroundColor = "blue";
    nr7.style.backgroundColor = "blue";
    nr8.style.backgroundColor = "blue";
    nr9.style.backgroundColor = "blue";
    verif = 0; jucator = 2;
    ftext();

}
