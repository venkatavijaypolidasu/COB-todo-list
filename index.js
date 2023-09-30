let inp = document.querySelector("input");
let list = document.querySelector(".task-list ul");

inp.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        if(inp.value == ""){
            alert("Please write a task");
        }
        else {
            
            let task = document.createElement("ul");
            let dlt = document.createElement("button");
            let checkbox = document.createElement("button");

            
            task.innerHTML = inp.value;
            dlt.innerHTML = "X";

            
            list.appendChild(task);
            task.appendChild(checkbox);
            task.appendChild(dlt);

            
            checkbox.classList.add("task-checkbox");
            dlt.classList.add("dlt");
            task.classList.add("task");

            
            inp.value = "";

            
            dlt.addEventListener("click", function(){
                
                dlt.parentElement.remove();
            });

            
            task.addEventListener("click", function(){
                task.classList.toggle("task-complete");
                checkbox.classList.toggle("task-checkbox-tick");
            });
        }
    }
});
