//alert("Hello Welcome to my new project");
var p = document.getElementById(col).value

function testing() {
    var colr = document.getElementById("sel").value
    var c = document.getElementById("c1");
    var ct = c.getContext("2d");
    ct.fillStyle = colr;
    //  ct.fillStyle = "red";
    ct.beginPath();
    ct.fillRect(10, 20, 200, 150);
    ct.closepath();
}

function square() {
    var colr = document.getElementById("sel").value
    var c = document.getElementById("c1");
    var ct = c.getContext("2d");
    ct.beginPath();
    ct.fillStyle = colr;
    //  ct.fillStyle = "red";
    ct.fillRect(325, 101, 100, 100);
    ct.closepath();
}

function circle() {
    var colr = document.getElementById("sel").value
    var c = document.getElementById("c1");
    var ct = c.getContext("2d");
    ct.beginPath();
    ct.arc(300, 400, 40, 0, 6);
    ct.fillStyle = colr;
    ct.fill();
    ct.closepath();
}

function line() {
    var c = document.getElementById("c1");
    var ct = c.getContext("2d");
    ct.beginPath();
    ct.moveTo(450, 50);
    ct.lineTo(600, 50);
    ct.stroke();
    ct.closepath();
}

function tri() {
    var colr = document.getElementById("sel").value
    var c = document.getElementById("c1");
    var ct = c.getContext("2d");

    ct.beginPath();
    ct.moveTo(600, 500);
    ct.lineTo(450, 650);
    ct.lineTo(950, 650);
    ct.lineTo(600, 500);
    ct.fillStyle = colr;
    ct.fill();
    ct.closepath();
}

function ceck() {
    var c = document.getElementById("c1");
    var ct = c.getContext("2d");
    ct.clearRect(0, 0, c.height, c.width);
}