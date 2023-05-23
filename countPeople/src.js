let incre = document.getElementById("incre");
let decre = document.getElementById("decre");
let countLabel = document.getElementById("count");

var count = localStorage.getItem("count")

if ( !count ){
    count = 0
}else{
    count = parseInt(count)
}

countLabel.innerText = count;

let text = "Count"
for ( let count = 0; count < 11; count+=1 ){
    console.log(` ${text} ${count}`)
}

incre.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        countLabel.innerText = tabs[0].status + count;
    }
    )
    count += 1;
    // countLabel.innerText = count;
    localStorage.setItem("count", count)
})

decre.addEventListener("click", function(){
    count -= 1;
    countLabel.innerText = count;
    localStorage.setItem("count", count)
})

