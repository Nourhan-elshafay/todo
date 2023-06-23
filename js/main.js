let taskinput = document.querySelectorAll("#taskinput");
let addtaskbtn = document.querySelector("#addtaskbtn");
let alltasks = document.querySelector("#alltasks");

let addtask = (name , image) =>{
      alltasks.innerHTML += `
      <div class="alltasks" id="alltasks">
            <div class="alert alert-info text-center">
                  <p>${name}</p>
                  <img width="80" src="${image}" alt="">
            </div>
                             
      </div>
      `;
};

let rendertask= () =>{
      let alltasks = {
            taskname : taskinput[0].value,
            imageurl : taskinput[1].value,
      };
      console.log(alltasks);
      addtask(alltasks.taskname , alltasks.imageurl );
};

addtaskbtn.addEventListener("click", rendertask);
