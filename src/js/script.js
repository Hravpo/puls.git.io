var name = "Ivan";

let number = 7;
const pi = 3.14;

number = 4;

let leftBorderWidth = 200;

/* if (2*6 == 8*1) {
    console.log ('Верно')
} else {
    console.log ('Ошибка')
}
let answer = confirm("Вам есть 18?")
if (answer) {
    console.log ('Проходите')
} else {
    console.log ('Уходи')
} */

/* const num = 50;

if (num < 49) {
    console.log ('Неправильно')
} else if (num > 100) {
    console.log ('Много')
} else {
    console.log ('Правильно')
} */
/* for (let i=1; i<8; i++) {
    console.log(i);
} */

/* function logging (a, b) {
    console.log (a + b)
}
logging(3,6); */


/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: true
                }
            }
        ]
      });
  });
 */

  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

  document.querySelector('.prev').addEventListener ('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener ('click', function () {
    slider.goTo('next');
  }); 

