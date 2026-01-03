function showPopup(id){
    document.getElementById(id).style.display ="flex";

} function closePopup(id){
    document.getElementById(id).style.display ="none";
}

window.addEventListener('click', event => {
    if(event.target.classList.contains('popup')){
        event.target.style.display = 'none';
    }
})  

document.getElementById('year').textContent = new Date().getFullYear();


