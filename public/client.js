const btnTest = document.getElementById("buttonTest")

btnTest.addEventListener("click", function(e){
    console.log("clicked");
    btnTest.className = "button is-success is-loading";
    btnTest.setAttribute("disabled", true);
})