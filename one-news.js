window.onload = () =>{
    const btnPhoto = document.getElementById('filterJustPhoto');
    const btnVideo = document.getElementById('filterJustVideo');
    const mediamaterial = [...document.querySelectorAll('.one-new__material-item')]; 

    btnPhoto.addEventListener('click', ()=> {
        mediamaterial.forEach(item  => {
            item.style.display = "none";
            if(item.childNodes[1].tagName === "IMG") {
                item.style.display = "list-item";
            }
        }) 
    })

    btnVideo.addEventListener('click', ()=> {
        mediamaterial.forEach(item  => {
            item.style.display = "none";
            if(item.childNodes[1].tagName === "VIDEO") {
                item.style.display = "list-item";
            }
        }) 
    })
}