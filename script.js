// MOBILE MENU

const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');

toggle.onclick = () => {
  menu.classList.toggle('active');
}

// SCROLL ANIMATION

const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }

  })

})

hiddenElements.forEach((el)=>observer.observe(el));
document.querySelectorAll(".learn-card img").forEach(img => {
  img.addEventListener("click", () => {
    img.parentElement.classList.toggle("active");
  });
});