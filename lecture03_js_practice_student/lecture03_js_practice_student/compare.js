
function comparenum(a, b) {
    var A = parseInt(document.getElementById("a").value);
    var B = parseInt(document.getElementById("b").value);
    var C = "";
    var D = Math.abs(A - B);
    
    if (A > B) {
        C = "A > B";
    } else if (A < B) {
        C = "A < B";
    } else {
        C = "A = B";
    }
    
    document.getElementById("c").value = C;
    document.getElementById("d").value = D;
}

