var ytpObj = document.documentMode;
if (ytpObj < 9) location.href="/ie8.html";
function APIReady(){
    // ytpObj = new YT.Player('backVdo', {
    //     events:{
    //         'onReady':function(){
    //           ytpObj.playVideo();
    //         }
    //     }
    // });

    Kakao.init('5c812e8e06cf3b0114b3aad910e691b4');
    Kakao.Link.createDefaultButton({
    container: '#kakao-link-btn',
    objectType: 'feed',
    content: {
        title: '프론트엔드 포트폴리오',
        description: 'HTML,SCSS,REACT,javascript,VUE,PHP // 도메인이 없어서 개발자 사이트 등록을 못했습니다. 아래버튼으로 이동해 부탁드립니다.',
        imageUrl: 'https://uitop.github.io/ui/assets/img/chrome.jpg',
        link: {
        mobileWebUrl: 'https://uitop.github.io/ui/',
        webUrl: 'https://uitop.github.io/ui/'
        }
    },
    buttons: [
        {
            title: '포트폴리오 보기',
            link: {
                mobileWebUrl: 'https://uitop.github.io/ui/',
                webUrl: 'https://uitop.github.io/ui/'
            }
        }
    ]
    });
}

