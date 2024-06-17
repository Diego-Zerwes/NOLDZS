$(window).on('scroll', function () {
  if ($(window).scrollTop() > 600) {
      $('#header').addClass('colored');
      
  } else {
      $("#header").removeClass('colored');
  }
})

const anime= document.querySelectorAll(".hidden");

const animacao= new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    const visio= entry.isIntersecting;
    toggleVisibility(entry.target, visio);
  })
})

anime.forEach((e)=>animacao.observe(e))
const toggleVisibility=(e,visio)=>{
  if (visio){
    e.classList.add("show");
  }else{
    e.classList.remove("show");
  }
}


const faqs = document.querySelectorAll(".perguntasFrequentes");

faqs.forEach(perguntasFrequentes => {
  perguntasFrequentes.addEventListener("click", () => {
    perguntasFrequentes.classList.toggle("active");
  });
});