let but = document.querySelectorAll('.box button')
let btn = document.querySelectorAll('.box1 button')
let prag = document.querySelectorAll('.box1 p')
console.log(but);



for (let i = 0; i < but.length; i++) {
    but[i].onclick = function(){
        alert("Are you Sure To Buy This")
    }
    
}

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function(){
        if(btn[i].textContent == "Read More"){
        prag[i].style="height:50px"
        btn[i].textContent = "less More"
        }
        else{
            prag[i].style="height:0px"
        btn[i].textContent = "Read More"
        }
    }
}
