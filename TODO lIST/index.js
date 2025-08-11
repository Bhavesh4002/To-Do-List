let task=[]
let ulEl=document.getElementById("ul-El")
let inputEl=document.getElementById("input-el")
let addEl=document.getElementById("add-el")
addEl.addEventListener("click",function(){
    let li=document.createElement("li")
    li.innerHTML=inputEl.value
    ulEl.appendChild(li)
    inputEl.value=""
    let span=document.createElement("span")
    span.innerHTML="\u00d7"
    li.appendChild(span)
})
ulEl.addEventListener("click",function(e){
        if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
    }
},false)