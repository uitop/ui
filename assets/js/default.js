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
    console.log(111);
    Kakao.Link.createDefaultButton({
    container: '#kakao-link-btn',
    objectType: 'feed',
    content: {
        title: '딸기 치즈 케익',
        description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
        imageUrl: 'https://uitop.github.io/ui/assets/img/chrome.jpg',
        link: {
        mobileWebUrl: 'https://uitop.github.io/ui/',
        webUrl: 'https://uitop.github.io/ui/'
        }
    },
    social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845
    },
    buttons: [
        {
        title: '웹으로 보기',
        link: {
            mobileWebUrl: 'https://uitop.github.io/ui/',
            webUrl: 'https://uitop.github.io/ui/'
        }
        },
        {
        title: '앱으로 보기',
        link: {
            mobileWebUrl: 'https://uitop.github.io/ui/',
            webUrl: 'https://uitop.github.io/ui/'
        }
        }
    ]
    });
}

