var app = angular.module('myPortfolio', ['ngRoute','chart.js','slickCarousel']);
app.controller('myPof', function($scope){
    $scope.isCon = 1;
    $scope.isFcs = 1;
    $scope.goSec = function(nn){
        $scope.isFcs = nn;
        if(nn == 2) nn = $('#skWrap').height();
        if(nn == 3) nn = $('#skWrap').height() + $('#pfWrap').height();
        $('section').animate({scrollTop:nn}, '500');
    }
});
app.controller("radarCht", function ($scope) {
    $scope.labels = ["Communication","Frontend","UX/UI","Tool","Search","Health"];
    $scope.data = [[100,95, 90, 90, 95,100]] ;
    $scope.options = {
        elements:{
            point:{
                borderWidth:1,
                radius:7
            }
        },
        scale: {
            ticks: { 
                suggestedMin: 30,
                suggestedMax: 100,
                fontColor:'#000',
                fontSize:15   
            },
            angleLines:{
                display:true,
                color:'#ddd'
            },
            gridLines:{
                color:['#888','#444','#444','#444','#8f8f8f','#eee','#9ab4c3']
            },
            pointLabels:{
                fontSize:18,
                fontColor:'#eee'
            }
        }
    };
});
app.controller('SlickController', function ($scope) {
    $scope.slickConfig2 = {
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
        ]
    };
    $scope.links = [
        {'a':'http://www.yzpark.kr/','t':'와이즈파크','y':2014,'i':'워드프레스 기반 블로그'},
        {'a':'http://homepage.kim/','t':'김씨네 홈페이지','y':2015,'i':'직접만드는 홈페이지, 웹에디터 서비스'},
        {'a':'http://thesupkorea.com/home.php','t':'더숲 코리아','y':2016,'i':'비동기식 갤러리, 회사소개 사이트'},
        {'a':'http://coffeecave.co.kr/','t':'커피케이브','y':2016,'i':'고도몰 기반 커피용품 쇼핑몰'},
        {'a':'https://www.thehigh1.com/','t':'더하이원펀딩','y':2017,'i':'크라우드펀딩 사이트'},
        {'a':'https://www.daily-funding.com/','t':'데일리펀딩','y':2017,'i':'크라우드펀딩 사이트'},
        {'a':'https://www.finstreet.co.kr/','t':'핀스트리트','y':2017,'i':'크라우드펀딩 사이트'},
        {'a':'assets/img/po07.png','t':'어학원 사이트','y':2017,'i':'이미지 페이지로 이동합니다.'},
        {'a':'http://www.winnersplan.co.kr/','t':'위너스플랜','y':2017,'i':'그누보드 기반 회사소개 사이트'},
        {'a':'http://www.bullsinvest.co.kr/','t':'불스인베스트','y':2017,'i':'주식정보 제공사이트'},
        {'a':'assets/img/po010.png','t':'가상화페 거래소 지갑화면','y':2018,'i':'이미지 페이지로 이동합니다.'},
        {'a':'http://event.pping.kr','t':'가격비교 사이트 이벤트 리스트','y':2018,'i':'행복쇼핑 이벤트'}
    ]
});
app.controller('footerArea', function($scope){
    APIReady()
});