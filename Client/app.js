// const { default: axios } = require("axios");
const Base_URl = "http://localhost:3000";



// Form functions
// const createTask = (e)=>{
//     e.preventDefault();
//     const name = $('#name').val();
//     console.log(name)

//     $('#output').html(name);

//     fetch( Base_URl+"/create" , {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
            
//         body: JSON.stringify(name)
//     }).then(res => console.log(remode: 'cors',s))
//     .catch(err => console.log(err));
// }
        
    
$('#form').on("submit", (e)=>{
    e.preventDefault();
    const formData = $("#name").val();
    console.log(formData);
    try {
        
        fetch( Base_URl + "/task/createTask", {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData
        }).then(res => console.log(res))
        .catch(err => console.log(err));
    } catch (error) {
        console.log(error.message);
    }
})

// $('#submit').on('click', createTask);


$('h1').on("click" , ()=>{$('h1').html('hello')})

// console.log($())

// $('button').on("click",(function(){
//     alert('you just clicked the submit button');
// }));


