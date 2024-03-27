const Base_Url = "http://localhost:3000/task";

// Form functions


// $('#submit').on('click', createTask);

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


$('h1').on("click", () => { $('h1').html('hello') })

// console.log($())

// $('button').on("click",(function(){
//     alert('you just clicked the submit button');
// }));


