let iconPlus = document.querySelector('.bi-plus-circle-fill')
let modal = document.querySelector('.modalcontainer')
let removeModal = document.querySelector('.bi-x-lg')
let mainContainer = document.querySelector('.container1')
let input = document.querySelector('.modalcontainer input')
let send = document.querySelector('.send')
let nostatus = document.querySelector('.nostatus')
let ModalSpan = document.querySelector('.modalcontainer span')
// let statuses = document.querySelectorAll('.status')

iconPlus.addEventListener('click' , function (){
    modal.style.top = '10%'
    mainContainer.style.filter = 'blur(2px)'
})

removeModal.addEventListener('click' , function (){
    modal.style.top = '-50%'
    mainContainer.style.filter = 'blur(0px)'
    input.value = ""
})

let numberId = 0 

function newToDO(){
    let newRow = document.createElement('div')
    newRow.setAttribute('class' , "row rowtodo m-2 d-flex  align-items-center justify-content-center")
    newRow.setAttribute('id' , numberId++)
    newRow.setAttribute('draggable' , 'true')
    newRow.addEventListener('dragstart' , function(event){
        console.log('hii');
        event.dataTransfer.setData('newDa' , event.target.id)
    })

    let col1 = document.createElement('div')
    col1.setAttribute('class' , "col-9 mt-2 fs-6")
    let PCol1 = document.createElement('p')
    PCol1.innerHTML = input.value
    col1.append(PCol1)

    let col2 = document.createElement('div')
    col2.setAttribute('class' , 'col-3')
    let ICol2 = document.createElement('i')
    ICol2.setAttribute('class' , 'bi bi-trash')
    ICol2.addEventListener('click' , function(){
        newRow.remove()
    })
    ICol2.style.cursor = 'pointer'
    ICol2.style.fontSize = '21px' 
    ICol2.style.transition = ".4s"
    col2.append(ICol2)


    newRow.append(col1 , col2)

    nostatus.append(newRow)
}


send.addEventListener('click' , function(){
    if (input.value === ""){
            ModalSpan.style.display = 'inline'
    } else {

        newToDO()
        modal.style.top = '-50%'
        mainContainer.style.filter = 'blur(0px)'
        input.value = ""
    }
})

input.addEventListener('focus' , function(){
    ModalSpan.style.display = 'none'
})



function dragoverHandler(event){
    event.preventDefault()
}

function dropHandler(event){
    console.log(event)
    let getItem = event.dataTransfer.getData('newDa')
    let setItem = document.getElementById(getItem)
    event.target.append(setItem)
}