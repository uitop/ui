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

    Kakao.init('24349f424ecf65ab4b1575d146f61f1f');
    Kakao.Link.createDefaultButton({
    container: '#kakao-link-btn',
    objectType: 'feed',
    content: {
        title: '프론트엔드 포트폴리오',
        description: '도메인이 없어서 플랫폼 사이트 등록을 못했습니다.',
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

