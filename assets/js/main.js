$(document).ready(function(){
  $('.go_btn').click(function(e){
    $('.ripple').remove();
    var jqo = $(this);
    jqo.addClass('push');
    var left = e.clientX - (jqo.offset().left + (jqo.width()/2));
    var top = e.clientY - (jqo.offset().top + (jqo.width()/2));
    jqo.append('<span class="ripple" style="left:'+left+'px;top:'+top+'px"></span>');
    // location.reload();
    setTimeout(function(){
      jqo.removeClass('push');
      $('body').addClass('wrap_on');
      $('.wrap').fadeIn();
      $('.intro').fadeOut();
      $('.secSlide').slick('slickNext');
    },400);
  });
  $('#go_top').click(function(){
    $('.subArea').animate({scrollTop: '0'}, 500);
  });
  $('#go_intro').click(function(){
    $('body').removeClass('wrap_on');
    $('.wrap').fadeOut();
    $('.intro').fadeIn();
    $('.bottom_text').html('<span class="cl"></span>');
    enter_text(0);
  });
  var ctx = document.getElementById('radar');
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ["체력","지구력","실력","이해력","매력","적응력"],
      datasets: [{
        data:[95,95, 95, 95, 90,100],
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
          suggestedMin: 30,
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
    {n:13,a:'https://www.kaida.co.kr/',t:'KAIDA',y:2020,i:'수입차 정보제공 사이트'}
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
                dots: false,
            }
        }
    ]});
    
  enter_text(0);
  APIReady();
});
var txt = ['안','녕','하','세','요','.','<br/>','"','pol','"','을',' ','눌','러','주','세','요.','^_^'];
function enter_text(n){
  if(txt.length > n && $('.wrap_on').length == 0){
    $('.cl').before(txt[n]);
    setTimeout(enter_text,210,n+1);
  } else {
    $('.cl').remove();
  }
}