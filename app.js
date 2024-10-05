let add=document.querySelector(".add .work");
let main=document.querySelector(".main");
let ul=document.querySelector("ul");
let del=document.querySelector(".delete .work");
let tasks=[];
add.addEventListener("click",()=>{
    let task=document.createElement("input");
    task.setAttribute("placeholder","Enter Text")
    task.setAttribute("type","text")
    task.setAttribute("class","task")
    main.appendChild(task)
    task.addEventListener("keydown",(event)=>{
    if(event.code=="Enter"){
        let check=document.createElement("input");
        check.setAttribute("type","checkbox");
        check.setAttribute("class","check")
        tasks.push(task.value); 
        let li=document.createElement("li");
        ul.appendChild(li);
        li.innerText=task.value;
        li.append(check);
        task.remove();
        }
    })
})
del.addEventListener("click",()=>{
    let check=document.querySelectorAll(".check");
    for(tick of check){
        tick.style.opacity=1;
    for(tick of check){
        tick.addEventListener("keydown",(event)=>{
            if(event.code=="Enter"){
                for(tick of check){
                    if(tick.checked==true){
                        tick.parentElement.remove();
                    }
                    else{
                        tick.style.opacity=0;
                    }
                }
                
            }
        })
        
    }
    }
    
})


