//alert("Hello Welcome to my new project");
var p = document.getElementById(col).value

function testing() {
    var colr = document.getElementById("sel").value
    var c = document.getElementById("c1");
    var ct = c.getContext("2d");
    ct.fillStyle = colr;
    //  ct.fillStyle = "red";
    ct.fillRect(10, 20, 200, 150);
    ct.arc(300, 400, 40, 0, 6);
    ct.stroke();
}

function ceck() {
    var c = document.getElementById("c1");
    var ct = c.getContext("2d");
    ct.clearRect(0, 0, c.height, c.width);
}