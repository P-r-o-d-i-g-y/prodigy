// скролл
// window.addEventListener('scroll', e => {
//     document.body.style.cssText = `--scrollTop: ${this.scrollY}px` //переменная ccs, используются обратные кавычки
// })

// --------------------------------------------меню


$(document).ready(function() {
    $(".header_menu_btn").on('click',function(){ // При клике по элементу с class=".header_menu_btn"
        $(".menu").toggleClass("open"); // Если у него есть class="open", уберет его, а если нет, то добавит.
    });

        
    $("to_foot").fadeIn();
    $("#to_top").fadeOut();
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 1500) {
            $("#to_top").fadeIn();
            $("#to_foot").fadeOut();
        } else {
            $("#to_top").fadeOut();
            $("#to_foot").fadeIn();
        }
    });
})




// регистрация плагинов
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)



// для телефонов условие
if (ScrollTrigger.isTouch !==1) { //определение телефон или нет
    ScrollSmoother.create({
        wrapper : '.wrapper', //оболочка
        content: '.content', //контент в оболочке
        smooth: 1.5,
        effects:true
    
    })
}




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}





