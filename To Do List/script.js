document.querySelector('#push').onclick = function(){
    console.log(document.querySelector('#newtask input').value)
    if(document.querySelector('#newtask input').value.length == 0){
        alert('please enter a task')
    }
    else{
        document.querySelector('#tasks').innerHTML+=`
        
        <div class = "task">
        <span id = "taskname">
        ${document.querySelector('#newtask input').value}
        </span>
        <button class = "delete">
          <i class="fa fa-trash"></i>
        </button>
        </div>
    `;
    var current_tasks = document.querySelectorAll(".delete") ; 
    for(let i = 0 ; i < current_tasks.length ; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove() ; 
        }

    }
    var tasks = document.querySelectorAll('.task') ; 
    for(let i = 0 ; i < tasks.length ; i++){
        tasks[i].onclick = function(){
            this.classList.toggle('completed') ; 
        }
    }

    document.querySelector("#newtask input").value = "" 



        
    }
}