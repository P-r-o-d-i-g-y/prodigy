// скролл
// window.addEventListener('scroll', e => {
//     document.body.style.cssText = `--scrollTop: ${this.scrollY}px` //переменная ccs, используются обратные кавычки
// })


// // Получаем ссылку на элемент <div>
// const widthDisplayDiv = document.getElementById("widthDisplay");

// // Обновляем содержимое <div> текущим значением внутренней ширины окна
// function updateWidthDisplay() {
//     widthDisplayDiv.textContent = `${window.innerWidth}`;
// };

// // Начальное обновление при загрузке страницы
// updateWidthDisplay();

// // Привязываем обработчик события для обновления при изменении размера окна
// window.addEventListener("resize", updateWidthDisplay);



// --------------------------------------------меню

function redirectToPage() {
    var targetURL;

    // Добавьть исключения для перенаправления на определенные страницы
    if (
        window.location.href.indexOf('web_map.html') !== -1 ||
        window.location.href.indexOf('about_me.html') !== -1||
        window.location.href.indexOf('anime.html') !== -1||
        window.location.href.indexOf('culture.html') !== -1||
        window.location.href.indexOf('food.html') !== -1||
        window.location.href.indexOf('cars.html') !== -1||
        window.location.href.indexOf('travel.html') !== -1
    ) {
        return; // Не выполнять перенаправление на эти страницы
    }
    
    if (window.innerWidth <= 1500) {
      targetURL = 'no_web.html';
    } else {
      targetURL = 'index.html';
    }
  
    // Проверка текущего URL перед перенаправлением
    if (window.location.href.indexOf(targetURL) === -1) {
      window.location.href = targetURL;
    }
  }
  
  // Вызываем функцию при загрузке страницы и изменении размера окна
  window.addEventListener('load', redirectToPage);
  window.addEventListener('resize', redirectToPage);

  
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
    
    });
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
    
}










