let active = 1;
let lable = document.getElementById("currentSlide");
function nextSlide(){
    let el = document.getElementById("prom-"+ active);
    el.classList.remove("active");
    if(active == 6){
        active = 1;
    }
    else{
        active += 1;
    }
    el = document.getElementById("prom-"+ active);
    el.classList.add("active");
    lable.innerHTML = active + "/6";
}
function prevSlide(){
    let el = document.getElementById("prom-"+ active);
    el.classList.remove("active");
    if(active == 1){
        active = 6;
    }
    else{
        active -= 1;
    }
    el = document.getElementById("prom-"+ active);
    el.classList.add("active");
    lable.innerHTML = active + "/6";
}