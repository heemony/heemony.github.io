
window.addEventListener('scroll', classAddWork);
window.addEventListener('resize', classAddWork);

const htmlElem = document.querySelector('html'); //길이
const hdEventCoupon = document.querySelector('.popup_event'); //팝업이벤트
const gnbElem = document.querySelector('.gnb'); //헤더 글로벌바 영역
const topUtilTxt = document.querySelectorAll('.utility_list a');
// 스크롤에 따른 헤더 모양 변화
function classAddWork(){
    if (htmlElem.scrollTop > 50){
        hdEventCoupon.classList.add('hide');  //50만큼 내리면 사라졌다가 올리면 다시 생김.
        gnbElem.classList.add('on'); 
        for(let i=0; i < topUtilTxt.length; i++){
            topUtilTxt[i].classList.add('hide');
        }
    }else{
        hdEventCoupon.classList.remove('hide');  //50만큼 내리면 사라졌다가 올리면 다시 생김.
        gnbElem.classList.remove('on');  
        for(let i=0; i < topUtilTxt.length; i++){
            topUtilTxt[i].classList.remove('hide');
        }
    }
}

window.addEventListener('resize', function () {boxLayout() }, false);
window.addEventListener("load", function () {boxLayout();});
function boxLayout() {
    // 배너 오른쪽 위치 - 그냥해봄 
    var bnLeft = document.querySelector(".bn_lft");
    var bnRight = document.querySelector(".bn_rgt");
    var oldTop = parseInt(bnLeft.style.width);
    var oldTop = bnLeft.offsetWidth;
    bnRight.style.left = '50%'; 

    // 레이아웃
    var images = document.querySelectorAll(".gridfeed_items");
    let startLoc = document.querySelector(".banner_sec > li"); //처음 시작 위치값.
    var imgStack = [0, 0];
    var boxW = document.querySelector('.gridfeed_sec').offsetWidth;
    var colW = boxW / 2;
    
    for (var i = 0; i < images.length; i++) {
        var minIndex = imgStack.indexOf(Math.min.apply(0, imgStack));
        console.log(minIndex);
        var x = colW * minIndex;
        var y = imgStack[minIndex] + startLoc.offsetHeight;
        imgStack[minIndex] += (images[i].offsetHeight);
        images[i].classList.add('loaded'); // 트랜지션 효과
        images[i].style.left = x + 'px';
        images[i].style.top = y + 'px';

        if (i === images.length - 1) {
            document.querySelector('.gridfeed_sec').style.height =  startLoc.offsetHeight + Math.max.apply(0, imgStack) + 'px';
        }
    }
}





//좋아요 버튼 클릭 시 하트 색상 변경
const hrtBox = document.querySelector('.like_btn');
const hrtBtns = document.querySelectorAll('.hrt');

[].forEach.call(hrtBtns, function(hrtBtns){
    hrtBtns.addEventListener('click', changeClr);
}); //쿼리셀렉터올은 노드컬렉션으로 가져오기 떄문에 foreach나 반복문을 사용하여 이벤트핸들러를 붙여줘야함.

function changeClr(ev){
    if(this.className === 'hrt'){
        this.classList.add('on');
        console.log('빨간하트~~~~');
    }else{
        this.classList.remove('on');
        console.log('하얀하트~~~~');
    }
};
