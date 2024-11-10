const model=document.querySelector('.model');
const overlay=document.querySelector('.overlay');

const openModel=()=>{
    console.log("Model is Open");
    model.classList.add('active');
    overlay.classList.add('overlayactive');
};


const closeModel=()=>{
    console.log("close model");
    model.classList.remove("active");
    overlay.classList.remove("overlayactive");
};