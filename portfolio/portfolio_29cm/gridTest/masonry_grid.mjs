// window.addEventListener('load', relocate);


// function relocate(){
//     var element = document.querySelectorAll('.gridfeed_items');
//     for(let i = 0 ; i < element.length ; i++){
//         element[i].className += ' loaded';
//     } 
//   //  클래스 loaded 붙여서 opacity 트랜지션 줌 -> css 477라인


//     //탑 배너의 높이값 가져와서 그 아래에서 부터 그리드피드 아이템들 배치하기.
//     var topBanner = document.querySelector('.banner_sec'); 

//     // 탑배너 리스트의 왼쪽은 left:0 오른쪽은 = 왼쪽의 width값 넣기.
//     // var d = topBanner.children;
//     // console.log(d[1].offsetTop);
//     // d[1].offsetHeight = 30;
    

    
//     var bnLeft = document.querySelector(".bn_lft");
//     var bnRight = document.querySelector(".bn_rgt");
  
//     var oldTop = parseInt(bnLeft.style.width);
//     var oldTop = bnLeft.offsetWidth;
//     // bnRight.offsetTop = 0;
//     // bnRight.offsetLeft = bnLeft.offsetWidth;
//     bnRight.style.left = '50%';
//     bnRight.style.top = '0';
//     console.log(bnRight.style);
    


//     // var topBannerRgtitem = document.querySelector('.banner_sec > .bn_rgt '); 
//     // var topBannerH = topBanner.offsetHeight;
//     // var RgtitemXvalue = topBannerRgtitem.offsetHeight;
//     // console.log('탑배너의 높이값 ' + topBannerH);
//     // console.log(RgtitemXvalue);



//     // var feedStartLoc = document.querySelector('ul.gridfeed_sec');
//     // console.log(feedStartLoc);
//     // console.log(feedStartLoc.offsetTop);
//     // feedStartLoc.offsetTop = topBannerH;
//     // console.log(feedStartLoc.offsetTop);
    



//     // 탑배너의 위치부터 피드아이템 위치하기.
    
//     // var elemsH = {}; // var elemsLoc = new Object();
//     // for(let i = 0 ; i < element.length ; i++){
//     //     elemsH[i] = element[i].offsetHeight;
//     // } 
//     // console.log(elemsH);
//     // 요소들의 높이값.

    

//     // 처음에는 오프셋탑 = 0
//     // 두번재는 오프셋탑 = 처음 하이트값
//     // 세번째는 오프셋탑 = 처음 하이트값 + 두번째 하이트값


   
    
   
//     // for(let i = 0 ; i < element.length ; i++){
//     //     console.log(element[i].offsetHeight);  
//     //     // elemsLoc.keys[i] = element[i].offsetHeight;
//     // } 
//     // //각 앨리먼트의 크기값 구해서 배열에 넣기.
//     // // elemsLoc = element[i].offsetHeight;
// }

    