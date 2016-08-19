
~function(desW){
    var winW=document.documentElement.clientWidth;
    var oMain=document.getElementById('main');
    var n=winW/desW;
    if(winW>desW){
        oMain.style.width=desW+'px';
        return;
    }
    document.documentElement.style.fontSize=n*100+'px';
}(640);

/*//Swiper*/
var sw=new Swiper('.swiper-container',{
    loop:true,
    direction:'vertical',

    onSlideChangeEnd:function(swiper){
        //获取总共的slide
        var slideAry=swiper.slides,
            trueNum=slideAry.length- 2,
            lastIn=trueNum+1;

        //->获取当前活动块的索引
        var curIn=swiper.activeIndex;

        [].forEach.call(slideAry,function(item,index){
            if(index==curIn){
                switch (curIn){
                    case 0:
                        item.id='page'+trueNum;
                        break;
                    case lastIn:
                        item.id='page1';
                        break;
                    default :
                        item.id='page'+curIn;
                }
                return;
            }
            item.id=null;
        })
    }
});
//music
~function(){
    var music=document.getElementById('music'),
        musicAudio=document.getElementById('musicAudio');
    music.addEventListener('click',function(){
        if(musicAudio.paused){//->当前是暂停的
            musicAudio.play();
            music.className='music move';
            return;
        }
        musicAudio.pause();
        music.className='music';
    },false);

    window.setTimeout(function(){
        musicAudio.play();
        musicAudio.addEventListener('canplay',function(){
            music.style.display='block';
            music.className='music move'
        },false)
    },1000)

}();
