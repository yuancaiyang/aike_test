/**
 * Created by Administrator on 2016/9/12.
 */

$(function(){

    //导航页js
    $('.sn_person').on('mouseover', function(){
        $('.per_mess').slideDown(300);
    }).on('mouseleave', function(){
        $('.per_mess').slideUp(300);
    });

    $('.sn_phone').on('mouseover', function(){
        $('.sn_erwei').slideDown(300);
    }).on('mouseleave', function(){
        $('.sn_erwei').slideUp(300);
    });

//隐藏的菜单列表
    var $lis=$('.cd_uls').children('li');
        $('.cd_uls').on('mouseover','li',function(){
            $(this).css({backgroundColor:'#E84227'}).siblings().css({backgroundColor:'#3A3A3A'});
            index=$(this).index();
            //console.log(index);
            $('.con').eq(index).show().siblings().hide();
        }).on('mouseleave','li', function(){
            $(this).css({backgroundColor:'#3A3A3A'});
            //$('.con').eq(index).hide();
        });
        $('.ddv_cd').on('mouseleave', function(){
            $('.con').hide();
        });

    $.ajax({
        'url':'http://dc.3.cn/category/get?cb=getCategoryCallback',
        'dataType':'jsonp',
        'jsonp':'callback',
        'scriptCharset':'gb2312',
        'success': function(data){
            //console.log(data);
            var d=data.data;
            //console.log(d[0].t);
            $.each(d, function(idd,ell){
            var _html='';
                _html+='<p>';
            $.each(d[idd].t, function(idx,ele){
                _html+='<span>'+ele.split('|')[1]+'</span>';
            });
                _html+='</p>';
            $('.con').eq(idd).append(_html);
            var dl='';
                dl+='<dl>';
            //console.log(d[0].s[0].s);
            $.each(d[idd].s[0].s, function(id,el){
                dl+='<dt>'+el.n.split('|')[1]+'</dt>';
                dl+='<dd>';
                $.each(d[idd].s[0].s[id].s, function(i,e){
                    dl+='<span>'+ e.n.split("|")[1]+'</span>';
                });
                dl+='</dd>';
            })
                dl+='</dl>';
            $('.con').eq(idd).append(dl);
            })
        }
    });



//图片区轮播图
     var $ddvimg=$('.ddv_img');
     var $jsnav=$('.jsNav');
     var index=0;
     var len=$('.ul_img').children('li').length;

    //初始化第一次
    show();
    $jsnav.animate({bottom:-46});//a标签初始化
    $('.ddv_prev').hide();
    $('.ddv_next').hide();
    $ddvimg.on('click','.ddv_prev', function(){
        index--;
        $jsnav.children('a').eq(index-1).css({backgroundColor:"#E84227",opacity:1}).siblings().css({backgroundColor:"#000",opacity:0.6});
        show();
    });
    $ddvimg.on('click','.ddv_next', function(){
        index++;
        console.log(index);
        $jsnav.children('a').eq(index-1).css({backgroundColor:"#E84227",opacity:1}).siblings().css({backgroundColor:"#000",opacity:0.6});
        show();

    });
    $jsnav.on('mouseover','a', function(){
         index=$(this).index();
         show();
         $(this).css({backgroundColor:"#E84227",opacity:1}).siblings().css({backgroundColor:"#000",opacity:0.6})
    });
//自动轮播
    var timer=null;
    ainimation();
    $ddvimg.on('mouseover', function(){
        clearInterval(timer);
        $jsnav.animate({bottom:0},500);
        $('.ddv_prev').show(500);
        $('.ddv_next').show(500);
    }).on('mouseleave', function(){
        ainimation();
        $jsnav.animate({bottom:-46},500);
        $('.ddv_prev').hide(500);
        $('.ddv_next').hide(500);
    });
    function ainimation(){
        timer=setInterval(function(){
            index++;
            $jsnav.children('a').eq(index-1).css({backgroundColor:"#E84227",opacity:1}).siblings().css({backgroundColor:"#000",opacity:0.6});
            show();
        },2000)
    }

     function show(){
         if(index<0){
             index=len-1;
         }else if(index==len){
             index=0;
         }
         $('.ul_img').children('li').eq(index).animate({opacity:1}).siblings().animate({opacity:0});
     }
});

//侧边栏
   var $taba=$('.tabs_wrap_a'); //回到顶部
    $(window).on('scroll',function(){
        var $scroll=$(window).scrollTop();
        //console.log($(window).scrollTop());
        if($scroll>=1500){
            $('.tabs_combk').show();
        }else{
            $('.tabs_combk').hide();
        }
    });
    $('.tabs_combk').on('click', function(){
        $('body').animate({scrollTop:0},300);
    });

//全球品牌
    $('.earch_nam').on('mouseover', function(){
       index=$(this).index();
        $('.earch_lit').eq(index).addClass('earch_only').siblings().removeClass('earch_only');
    });


