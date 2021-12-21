/* document.getElementById("html").onchange() = function() {

} */
document.getElementById("button").onclick = function() {
        alert('HELLO');
        $("#select").change(function() {
            /* alert("Test content changed") */
            console.log("Test content changed")
        })
    }
    /* 
    $("#button").change(function() {
        alert("Test content changed")
    }) */