const slides=document.querySelectorAll(".slide");function changeActiveSlide(){slides.forEach(e=>{e.classList.remove("open")}),this.classList.add("open")}slides.forEach(e=>e.addEventListener("click",changeActiveSlide));