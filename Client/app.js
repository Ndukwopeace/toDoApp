

$(function () {
    // Handler for .ready() called.
    const Base_Url = "http://localhost:3000/task";
    let tasks = [];

    //  render all tasks in dom =================================================================
    const renderTasks = () => {

        fetch(Base_Url).then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        }).then(data => {

            data.map((task) => {
                return tasks.push(task);
            })
            console.log(tasks)

            let newList = $("<ul></ul>");
            tasks.map((task) => {
                // newList.append("<input type='checkbox'>"+ task.name + " </input>");
                newList.append(
                    "<div class='taskStyle'> <label><input type='checkbox' id='check' value =" + task._id + " >" + task.name + "</label>" +
                    "<div> <button id='check'> delete</button> <button>edit</button> </div> </div> "
                );

            })
            $('#tasks').append(newList);

        }).catch((err) => console.log(err));

    }
    renderTasks();

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
        return renderTasks();
    }
    )
        .catch(err => console.log(err))

    $('#name').val("")
})


    const deleteTask = () => {

    }

    // set taskCompleted=====================================================================================
    setTimeout(() => {

        $('input[type=checkbox]').on('click',
        function () {
            if ($(this).is(':checked')) {
               const taskId = $(this).val();
               setTaskCompleted(taskId);
            } else {
                console.log("checkbox is not checked")
            }
        });


        
    }, 1000);

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


    




  


   
    $('h1').on("click", () => { $('h1').html('hello') })

   
});

