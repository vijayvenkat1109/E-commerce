var con = document.getElementById("pro");
var se = document.getElementById("in");
var pl = con.querySelectorAll("div");

se.addEventListener("keyup", function(event) {
    var pln = event.target.value.toUpperCase();
    for (let count = 0; count < pl.length; count++) {
        var pn = pl[count].querySelector("p").textContent;
        if (pn.toUpperCase().indexOf(pln) < 0) {
            pl[count].style.display = "none";
        } else {
            pl[count].style.display = "block";
        }
    }
});
