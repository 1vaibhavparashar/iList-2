
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
        if(input.value != ""){
        let li = document.createElement('li')
        let del = document.createElement('button')
        let div = document.createElement('div')
        div.style.display = "flex"
        div.style.justifyContent = "space-between"
        del.innerHTML = "🔫"
        li.innerText = input.value
        div.append(li)
        div.append(del)
        ul.append(div)
        input.value = ""
        li.addEventListener('click' , function(e){
            if(li.innerText.includes("✅")){
                li.innerText = li.innerText.replace("✅", "").trim();
            }else{
                li.innerText +=  " ✅";
            }
        })
        del.addEventListener('click',function(e){
            let confirm = document.createElement('button')
            confirm.innerHTML = "✅"
            let cancel = document.createElement('button')
            cancel.innerHTML = "❌"
            let pouch = document.createElement('div')
            pouch.append(confirm,cancel)
    
            div.append(pouch)
            del.remove()
            confirm.addEventListener('click',function(e){
                pouch.remove()
                li.remove()
            })
            cancel.addEventListener('click',function(e){
                pouch.remove()
                div.append(del)
            })
    
    
        })
    }
    })


