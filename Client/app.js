

const Base_Url = "http://localhost:3000/task";
    let tasks = [];
// Form functions
$("#form").on("submit", (e) => {
    e.preventDefault();
    const name = $('#name').val();
    console.log(name);

    const todo = { name };


    fetch(Base_Url + "/create", {
        method: "POST",
        body: JSON.stringify(todo),
        headers: { "Content-Type": "application/json" }

    }).then(res => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    }).then(data => console.log(data))
    .catch(err => console.log(err))
})


//  render all tasks in dom 

const renderTasks = () => {
    
    fetch(Base_Url ).then(res => {
        if(!res.ok){
            throw new Error('Network response was not ok');
        }
        return res.json();
    }).then(data =>{
        
        data.map((task)  => {
            return tasks.push(task);
        })
        console.log(tasks)
            const newList = $("<ul></ul>");
        tasks.map((task) => {
            newList.append("<input type='checkbox'>"+ task.name + " </input>");
            $('#tasks').append(newList);
        })
    }).catch((err)=>console.log(err));

    
}

renderTasks();

$('h1').on("click", () => { $('h1').html('hello') })

// console.log($())

// $('button').on("click",(function(){
//     alert('you just clicked the submit button');
// }));


