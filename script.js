let a=document.getElementById('menubtn')
let b=document.getElementById('respnav')
let c=document.getElementById('closebtn')
let d=document.getElementById('navbar')

a.addEventListener('click',()=>{
    b.classList.add('active')
    d.classList.add('active')
})

c.addEventListener('click',()=>{
    b.classList.remove('active')
    d.classList.remove('active')
})



