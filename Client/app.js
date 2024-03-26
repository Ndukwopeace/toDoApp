

// Form functions
const createTask = (e)=>{
    e.preventDefault();
    const name = $('#name').val();
    console.log(name)
    $('#output').html(name);
    
    // $('#form').on('submit', (e)=>{
    //     e.preventDefault();
    //     $('#name').on('change',)
    //     axios.postAdd()
    // })
}

$('#submit').on('click', createTask);


$('h1').on("click" , ()=>{$('h1').html('hello')})

// console.log($())

// $('button').on("click",(function(){
//     alert('you just clicked the submit button');
// }));


