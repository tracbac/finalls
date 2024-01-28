/////#switch-mode/////
const body = document.body
const switch_mode= document.querySelector('#switch-mode i')
let mode = localStorage.getItem('darkmode')
if(mode=="true"){
    body.classList.add('dark')
    switch_mode.className= "bi bi-brightness-low"
}
switch_mode.addEventListener('click', ()=>{
    
    switch_mode.classList.toggle('bi-moon-stars-fill')
    switch_mode.classList.toggle('bi-brightness-low-fill');
    let mode = body.classList.toggle('dark');
    localStorage.setItem('darkmode', mode);

});