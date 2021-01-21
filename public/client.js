const btn = document.getElementById("buttonTest");
const userInput = document.getElementById("userInput");

btn.addEventListener("click", function(){
    console.log("clicked");
    fetch("http://api.roblox.com/users/get-by-username?username=Builderman", {method: GET})
     .then(function(res){
        if(res.ok) return res.json()
        throw new Error("failed");
    })
     .then(function(data){
        console.log(data);
    })
     .catch(function(err){
        throw new Error(err);
    })
})
