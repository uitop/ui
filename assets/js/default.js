var ytpObj = document.documentMode;
if (ytpObj < 9) location.href="/ie8.html";
function onYouTubeIframeAPIReady(){
    ytpObj = new YT.Player('backVdo', {
        events:{
            'onReady':function(){
              ytpObj.playVideo();
            }
        }
    });
}