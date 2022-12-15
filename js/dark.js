var icon = document.getElementById('icon');
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./img-icons/sun.png";
    }else{
        icon.src = "./img-icons/moon.png";
    }
}