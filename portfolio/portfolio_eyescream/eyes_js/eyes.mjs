$(function(){
    var $slider = $('.slider'),
    $firstSlide = $slider.find('li').first() // 첫번째 슬라이드
    .stop(true).animate({'opacity':1},200); // 첫번째 슬라이드만 보이게 하기
    
    function PrevSlide(){ // 이전버튼 함수
        var $lastSlide = $slider.find('li').last() //마지막 슬라이드
        .prependTo($slider); //마지막 슬라이드를 맨 앞으로 보내기  
        $secondSlide = $slider.find('li').eq(1)
        //두 번째 슬라이드 구하기
        .stop(true).animate({'opacity':0},500); //밀려난 두 번째 슬라이드는 fadeOut 시키고
        $firstSlide = $slider.find('li').first() //맨 처음 슬라이드 다시 구하기
        .stop(true).animate({'opacity':1},500);
        //새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
    }
    function NextSlide(){ // 다음 버튼 함수
        $firstSlide = $slider.find('li').first() // 첫 번째 슬라이드
        .appendTo($slider); // 맨 마지막으로 보내기
        var $lastSlide = $slider.find('li').last() // 맨 마지막으로 보낸 슬라이드
        .stop(true).animate({'opacity':0},500); // fadeOut시키기
        $firstSlide = $slider.find('li').first()
        // 맨 처음 슬라이드
        .stop(true).animate({'opacity':1},500);
        // fadeIn 시키기
    }   
    $('.main_scroll_btn.left').on('click', function(){ //다음버튼 클릭
        NextSlide();
    });
    $('.main_scroll_btn.right').on('click', function(){ //이전 버튼 클릭하면
        PrevSlide();
    }); 
    setInterval(NextSlide, 5000); //자동 슬라이드 설정
});


$('.pu_slider').slick({
    centerMode: true,
    centerPadding: '160px',
    slidesToShow: 3,
    arrows: true,
    focusOnSelect:true,
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next'),
    responsive: [
        {
        breakpoint: 1000,
        settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
        }
        },
        {
        breakpoint: 1205,
        settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
        }
        }
    ]
});

// const box = document.querySelector('.btnBox');
const menuBtn = document.querySelector('a.menu_toggle_btn');
const b = document.querySelector('#nav_menu');
menuBtn.addEventListener('click', activeWork);

function activeWork(e){
    e.preventDefault();
    const a = e.target;
    if(!a.classList.contains('active')){
        a.classList.add('active');
        b.classList.add('active');
    }else{
        a.classList.remove('active');
        b.classList.remove('active');
    }
}
