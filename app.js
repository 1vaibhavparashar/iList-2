
// let input = document.querySelector('input')
// let ul = document.querySelector('ul')
// let btn = document.querySelector('button')
// btn.addEventListener('click' ,function(e){
// let li = document.createElement('li')

//     li.innerText = input.value
//     ul.append(li)
//     input.value = ""
//     li.addEventListener('click', function(e){
//         li.remove();
//     })
// })




// ----------------------TODOLIST

let input = document.querySelector('input')
let ul = document.querySelector('ul')
let btn = document.querySelector('button')

btn.addEventListener('click',function(e){
    let li = document.createElement('li')
    li.innerText = input.value
    ul.append(li)
    input.value = ""
    li.addEventListener('click' , function(e){
        li.innerText +=  " ✅";
    })
})

