const Base_Url = "http://localhost:3000/task";

// Form functions


// $('#submit').on('click', createTask);

$("#form").on("submit" , (e)=>{
        e.preventDefault();
        const name = $('#name').val();
        console.log(name);
       
            const todo = {name};
            
        fetch(Base_Url + "/create" , {
            method: "POST",
            body: JSON.stringify(todo),
            headers:{"Content-Type":"application/json"}
        }).then(res=> console.log(res))
        .catch(err=> console.log(err))
})


$('h1').on("click" , ()=>{$('h1').html('hello')})

// console.log($())

// $('button').on("click",(function(){
//     alert('you just clicked the submit button');
// }));


