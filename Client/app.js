$(function () {

    // Handler for .ready() called.
    const Base_Url = "http://localhost:3000/task";
    // my variables   
    let tasks = [];
    let newList = $("<ul></ul>");
    let completedList = $("<ul></ul>");
    const completedTasks = []; 

    //  render all tasks in dom =================================================================

    const renderTasks = () => {
        fetch(Base_Url).then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        }).then(data => {

            data.map((task) => {
                tasks.push(task);
            })
            console.log(tasks)
            return tasks;

        }).then((tasks) => {
            const pendingTasks = [];
            const completedTasks = [];
            tasks.map((task) => {

                if (!task.completed) {
                    pendingTasks.push(task);

                } else {
                    completedTasks.push(task);
                }
                console.log(completedTasks)
            })

            pendingTasks.map((task) => {
                newList.append(
                    `<div class='taskStyle'> <label><input type='checkbox' id='check' value = ${task._id}> ${task.name} </label>
                    <div> <button id='delete' value="${task._id}"> delete</button> <button id='edit' value="${task._id}">edit</button> </div> </div> `
                );
            })
            $("#pending").append(newList);

            completedTasks.map((completedtask) => {
                completedList.append(
                    `<div class='taskStyle'> <label><input type='checkbox' id='check' value ="${completedtask._id}" >${completedtask.name} </label>
                    <div> <button id='delete' value="${completedtask._id}" > delete</button> <button  id='edit' value="${completedtask._id}">edit</button> </div> </div> `
                );
                $('#completed').append(completedList);
            })


            if(pendingTasks.length > 0) {
                $(".heroSection span.pendingTasks").text(`You have ${pendingTasks.length} tasks pending....`)
            }else{
                $(".heroSection span.pendingTasks").text(`You have no pending Tasks....`)
            }

            if(completedTasks.length > 0) return $(".heroSection span.completedTasks").text(`You have completed ${completedTasks.length} tasks you got it ....`);
            
        }).catch((err) => console.log(err));
    }
    renderTasks();
    console.log(tasks)
    // Form functions =======================================================================

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
        }).then(data => {
            console.log(data)
            $('#tasks ul').remove();
            tasks = [];
            // tasks.splice(0, tasks.length);
            completedTasks.splice(0, completedTasks.length);
            return renderTasks();
        }
        )
            .catch(err => console.log(err))
        $('#name').val("")
    })


    

    const deleteTask = (taskId) => {

        fetch(Base_Url + `/delete/${taskId}`, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
        }).then(res => {
            if (!res.ok) return console.log('response is not okay')
            else return res.json();
        }).then(data => console.log(data))
            .catch(err => console.log(err));

    }


    // set taskCompleted=====================================================================================>
    setTimeout(() => {

        $('input[type=checkbox]').on('click',
            function () {
                if ($(this).is(':checked')) {
                    $(this).css({'text-decoration':'line-through'});
                    const taskId = $(this).val();
                    setTaskCompleted(taskId);
                } else {
                    console.log("checkbox is not checked")
                }
            });
    }, 1000);


    // delete Task ==================================================================================================>

    setTimeout(() => {

        $("button#delete").on("click", function (){
                const value = $(this).val();
                return deleteTask(value);
            
        })

    }, 1000)


    const setTaskCompleted = (taskId) => {

        fetch(Base_Url + `/edit/${taskId}`, {
            method: "PUT",
            body: JSON.stringify({ completed: true }),
            headers: { "Content-Type": "application/json" }

        }).then(res => {
            if (!res.status) return console.log(res);
            return res.json();
        }).then(data => console.log(data))
            .catch(err => console.log(err));

    }
    // editTask ==============================================================================>

    const editTask = (taskId) => {
        fetch(Base_Url + `/edit/${taskId}` , {
            method: 'PUT',
            headers:  { "Content-Type": "application/json" },
            body: JSON.stringify()
        }).then(res => {
            if (!res.status) return console.log(res);
            return res.json();
        }).then(data => console.log(data))
            .catch(err => console.log(err));
    }

    setTimeout(()=>{
        $('button#edit').on('click',function(){
            // get value using this ;
             const value = $(this).val();
             console.log(value);
             // set value of input #name to value;
             $('#name').attr('value', value);
    
        })
    },1000)




    $('h1').on("click", () => { $('h1').html('hello') })










































});

