var search = document.getElementById("search")
var btn = document.getElementById("click")
var output = document.getElementById("output")


body.onload = function(){
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((response) => output.innerText = (response.slip.advice))
}

btn.onclick = function(){
    if(search.value === ""){
        alert("Search Field Is Empty")

    }else{
        fetch(`https://api.adviceslip.com/advice/search/${search.value}`)
        .then((response) => response.json())
        .then((response) => {
            if(response.message){
                alert(response.message.text)
            }else{
                var res = response.slips[Math.floor(Math.random() * response.slips.length - 1)]
                output.innerText = (res.advice)
               // output.innerText = (res.advice)
            }
        })
    }
}