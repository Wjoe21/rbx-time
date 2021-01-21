const btnTest = document.getElementById("buttonTest")
const userInput = document.getElementById("userInput");
const passInput = document.getElementById("passwordInput");

btnTest.addEventListener("click", function(e){
    console.log("clicked");
    const data = {username: userInput.value, password: passInput.value};
    btnTest.className = "button is-success is-loading";
    btnTest.setAttribute("disabled", true);
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        console.log("success");
    })
})