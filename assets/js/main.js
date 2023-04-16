$(document).ready(function(){
  $('.go_btn').click(function(e){
    $('.ripple').remove();
    $('.intro').addClass('push');
    var wid = this.offsetWidth/2;
    var left = e.clientX - this.offsetLeft*1.25;
    var top = e.clientY - this.offsetTop - wid/2;
    $(this).append('<span class="ripple" style="left:'+left+'px;top:'+top+'px;height:'+wid+'px"></span>');
    $('.secSlide').slick('slickGoTo',0);
  });
  $('#go_top').click(function(){
    $('.subArea').animate({scrollTop: '0'}, 500);
  });
  $('#go_intro').click(function(){
    $('.intro').removeClass('push');
    $('.ripple').remove();
    enter_text(0);
  });
  var ctx = document.getElementById('radar');
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ["STR","DEX","CON","INT","WIS","CHA","LUK","AGI"],
      datasets: [{
        data:[50,80,100,85,90,80,30,70],
        backgroundColor:'rgba(142, 125, 14, 0.2)',
        borderColor:'#ffeb02',
        borderWidth:1,
      }]
    },
    options: {
      layout: {
        padding: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 0
        }
      },
      legend: {
        display: false,
      },
      elements:{
        point:{
            borderWidth:1,
            radius:3,
            hoverRadius:5,
            backgroundColor:'#ffeb02'
        }
      },
      scale: {
        ticks: { 
          suggestedMin: 00,
          suggestedMax: 100,
          fontColor:'#000',
          fontSize:10,
          display:false
        },
        angleLines:{
          display:true,
          color:'#ddd'
        },
        gridLines:{
          color:['#888','#444','#444','#444','#8f8f8f','#eee','#9ab4c3']
        },
        pointLabels:{
          fontSize:12,
          fontColor:'#eee',
          position:'bottom'
        }
      }
    }
  });
  var links = [
    {n:0,a:'http://www.yzpark.kr/',t:'와이즈파크',y:2014,i:'워드프레스 기반 블로그'},
    {n:1,a:'http://homepage.kim/',t:'김씨네 홈페이지',y:2015,i:'직접만드는 홈페이지, 웹에디터 서비스'},
    {n:2,a:'http://thesupkorea.com/home.php',t:'더숲 코리아',y:2016,i:'비동기식 갤러리, 회사소개 사이트'},
    {n:3,a:'http://coffeecave.co.kr/',t:'커피케이브',y:2016,i:'고도몰 기반 커피용품 쇼핑몰'},
    {n:4,a:'https://www.thehigh1.com/',t:'더하이원펀딩',y:2017,i:'크라우드펀딩 사이트'},
    {n:5,a:'https://www.daily-funding.com/',t:'데일리펀딩',y:2017,i:'크라우드펀딩 사이트'},
    {n:6,a:'https://www.finstreet.co.kr/',t:'핀스트리트',y:2017,i:'크라우드펀딩 사이트'},
    {n:7,a:'assets/img/po7.png',t:'어학원 사이트',y:2017,i:'이미지 페이지로 이동합니다.'},
    {n:8,a:'http://www.winnersplan.co.kr/',t:'위너스플랜',y:2017,i:'그누보드 기반 회사소개 사이트'},
    {n:9,a:'http://www.bullsinvest.co.kr/',t:'불스인베스트',y:2017,i:'주식정보 제공사이트'},
    {n:10,a:'assets/img/po10.png',t:'가상화페 거래소 지갑화면',y:2018,i:'이미지 페이지로 이동합니다.'},
    {n:11,a:'http://event.pping.kr',t:'행복쇼핑 이벤트',y:2018,i:'가격비교 사이트 이벤트 리스트'},
    {n:12,a:'http://www.innerinfo.net/',t:'이너인포',y:2019,i:'회사소개 사이트'},
    {n:13,a:'https://www.kaida.co.kr/',t:'KAIDA',y:2020,i:'수입차 정보제공 사이트'},
    {n:14,a:'http://lms.khcu.ac.kr/',t:'사이버대학LMS',y:2021,i:'학습자 수강,성적,커뮤니티 통합관리 시스템'},
    {n:15,a:'https://m.yes-us.co.kr',t:'예스어스',y:2021,i:'친환경 못난이 농산물 구독서비스'},
    {n:16,a:'https://www.hiver.co.kr',t:'하이버',y:2022,i:'남성 타깃 쇼핑앱'},
    {n:17,a:'https://www.seoulstore.com',t:'서울스토어',y:2022,i:'20대여성 타깃 브랜드 팝업 플랫폼'},
    {n:18,a:'https://www.selpi.co.kr',t:'셀피',y:2023,i:'의류 도매, 무료사입 앱'}
  ];
  links.forEach(function(it){
    $('.secSlide').prepend('<div class="slideItem"><a href="'+it.a+'" target="_blank" title="'+it.t+'"><img src="assets/img/spo'+it.n+'.png"></a><div class="sItemTxt yr'+it.y+'"><h3>'+it.t+'<sub>('+it.y+')</sub></h3><h4>'+it.i+'</h4></div></div>');
  });
 
  $('.secSlide').slick({
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3800,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false,
    dots: true,
    responsive:[
        {
            breakpoint:800,
            settings:{
                arrows:false,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint:600,
            settings:{
                arrows:false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]});
    
  enter_text(0);
  APIReady();
});
var timeout,txt = ['안','녕','하','세','요','!','<br/>','"','E','nt','er','"','를',' ','눌','러','주','세','요.','^_^'];
function enter_text(n){
  if(n == 0){
    clearTimeout(timeout);
    $('.bottom_text').html('<span class="under_cursor"></span>')    
  }
  if(txt.length > n){
    $('.under_cursor').before(txt[n]);
    timeout = setTimeout(enter_text,210,n+1);
  } else {
    $('.under_cursor').remove();
  }
}