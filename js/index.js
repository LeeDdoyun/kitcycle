// section_01 => scroll event 
$(window).on("load", function () {
    function fade() {
      let animation_height = $(window).innerHeight() * 0.5;
      let ratio = Math.round((1 / animation_height) * 5000) / 5000;
      $("li").each(function () {
        let objectTop = $(this).offset().top;
        let windowBottom = $(window).scrollTop() + $(window).innerHeight();
        if (objectTop < windowBottom) {
          if (objectTop < windowBottom - animation_height) {
            $(this).css({
              transition: "opacity 0.5s linear",
              transition: "left 0.5s linear",
              opacity: 1,
              left: "0px",
            });
          } else {
            $(this).css({
              transition: "opacity 0.5s linear",
              opacity: (windowBottom - objectTop) * ratio,
              transition: "left 0.5s linear",
              left: `${200 * (1 - (windowBottom - objectTop) * ratio)}px`,
            });
          }
        } else {
          $(this).css({
            opacity: 0,
            left: "200px",
          });
        }
      });
    }
    $(".cont").css({
      opacity: 0,
      left: "200px",
    });
    fade();

    $(window).scroll(function () {
      fade();
    });

});

// section_03 => multiple slide 
//#1) 선택자 구성
var $sliderBox = document.querySelector("#zerowaste");
var $slider = document.querySelector(".slider");
var $slide = document.querySelectorAll(".slide");  //배열형식
console.log($slide);  
/*NodeList(5) 
[
    div.slide.slide1, 
    div.slide.slide2, 
    div.slide.slide3, 
    div.slide.slide4, 
    div.slide.slide5
]*/

var $prevBtn = document.querySelector(".arrow_prev");
var $nextBtn = document.querySelector(".arrow_next");

//#2) 초기 위치 설정(마지막 이미지 슬라이드 맨 처음으로 배치한다. 5-1(현재 화면의 위치)-2-3-4)
$slider.prepend($slide[$slide.length - 1]);

//#3) 반복설정
setInterval(function(){
    //#4-1) 슬라이드 영역에서 현재 클래스명인 hover의 존재유무를 판단 
    var $hover = $sliderBox.classList.contains("hover"); 
    console.log($hover);  //true(마우스 오버된 상태) 또는 false(마우스가 밖에 위치한 상태)

    if($hover == true){
        //아무것도 하지마~~! ==> 반복이동 없음
    }else{
        //#3-1)반복하는 시점에서 첫번째 슬라이드는 누구인가?
        var $first_slide = document.querySelector(".slide:first-child");
        console.log($first_slide);  //반복하는 시점 상에서 첫번째만 객체로 저장한다.

        $slider.classList.add("next");  //margin-left:-200%;  ==> .slider를 좌측으로 통째로 좌측으로 움지일래요~~
        setTimeout(function(){
            $slider.append($first_slide);  //맨 좌측에 위치한 이미지를 맨 우측으로 보낸다.
            $slider.classList.remove("next");  //margin-left:-100%;  ==> 첫번째 슬라이드 이미지가 빠지면 그자리로 다음 이미지가 들어가서 본화면에 이미지가 바뀌는 것을 막아준다.
            //setTimeout의 내부 실행문은 동시에 진행된다.
        }, 500);
    }
}, 3000);

//#4) 커서 진입시 반복설정을 제어(마우스 오버시 일시정지, 마우스 이탈시 자동 반복 진행)
$sliderBox.addEventListener("mouseover", function(){
    console.log(this);  //이벤트가 발생한 곳
    this.classList.add("hover");  //<section id="slider_box" class="hover">
});
$sliderBox.addEventListener("mouseout", function(){
    this.classList.remove("hover");  //<section id="slider_box" class="">
});

//#5) 양측 화살표 클릭시 해당하는 이미지로 보여주기
//#5-1) 이전(<) 버튼 클릭시
$prevBtn.addEventListener("click", function(event){
    event.preventDefault();  //이벤트에 의해 초기화 되는 것을 막는다.

    var $last_slide = document.querySelector(".slide:last-child");

    $slider.classList.add("prev");
    setTimeout(function(){
        $slider.prepend($last_slide);
        $slider.classList.remove("prev");
    }, 500);
});

//#5-2) 다음(>) 버튼 클릭시
$nextBtn.addEventListener("click", function(event){
    event.preventDefault();  //이벤트에 의해 초기화 되는 것을 막는다.

    var $first_slide = document.querySelector(".slide:first-child");

    $slider.classList.add("next");
    setTimeout(function(){
        $slider.append($first_slide);
        $slider.classList.remove("next");
    }, 500);
});


/*removeChild() : 기존에 존재하는 하위의 자식을 제거*/
var $nations = document.querySelector(".removeChild_method");
var $del_list = document.querySelector(".removeChild_method p:nth-child(4)");

$nations.removeChild($del_list);  //<p>태국</p> 삭제











