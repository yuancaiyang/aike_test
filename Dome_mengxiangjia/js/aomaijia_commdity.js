/**
 * Created by Administrator on 2016/9/9.
 */
$(function(){



    //商品放大镜效果

    $(".bigpic").imagezoom({xzoom:300,yzoom:300});

    $('.poin_lit').on('mouseover','a', function(){
        $(this).addClass('poin_bor').siblings().removeClass('poin_bor');
        $('.bigpic').attr('src',$(this).find('img').attr('mid'));
        $('.bigpic').attr('rel',$(this).find('img').attr('big'));
    });

    //侧边栏 回到顶部
    var $taba=$('.tabs_wrap_a');
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


    //购物车弹出与隐藏
    var $tabs=$('.tabs_right');
    var $tabsa=$('.tabs_wrap_a');
    var $tabsg=$('.tabs_goods');
        var tempsl=0; //灵活运用自定义变量
    $tabsa.click(function(){
        if(tempsl==0){
            $tabs.animate({right:0});
            tempsl++;
        }else if(tempsl==1){
            $tabs.animate({right:-235});
            tempsl--;
        }
    });

    //购买商品操作
    var index=1;
    $('.mun_add').on('click', function(){
        index++;
        $(this).prev().val(index);
    });
    $('.mun_low').on('click', function(){
        index--;
        $(this).next().val(index);
        if(index<=1){
            index=1;
            $(this).next().val(index);
        }
    });

     //加入购物车
    var _html='';
    //cookie操作
    var $url=$('.cook_img').attr('src');
    var $text=$('.text_t').html();
    var $munn=$('.much').html();
    var $shulg=$('.mun_albo').val();
    //console.log($shulg);
    var json={
            'url':$url,
            'tex':$text,
            'munn':$munn,
            'albo':$shulg
        };
        var temp=JSON.stringify(json);
        $.cookie('cook',temp);


    //商品移动位移计算
    var left=$('.god_btn2').offset().left+$('.god_btn2').width()/2;
    var top=$('.god_btn2').offset().top;
    var $tabsul=$('.tabs_goods').children('ul');
    $('.god_btn2').click(function(){
        var $li=$('<li>');
        //console.log($text);
        //克隆商品
        var $comread=$('.com_read').clone();
        //商品加入购物车动画效果
        var $newpic=$('.bigpic').clone();
        $newpic.appendTo('body');
        $newpic.addClass('imgm');
        $newpic.css({
            position:"absolute",
            left:left,
            top:top
        });
        $newpic.animate({left:$('.tabs_wrap_a').offset().left,top:$('.tabs_wrap_a').offset().top},600, function(){
            //$('.tabs_wrap_d2').html(munber);
            //var $comread=$('.com_read').eq(0).clone();
            $newpic.hide();
            $li.html($comread).appendTo($tabsul);
            $li.find('a,div').removeClass('com_read').addClass('com_new');//防止购物车商品错乱
            //$tabsul.append('<li>'+$comread.html()+'</li>');
            $('<span class="btn_close"/>').html('&times').appendTo($li);


            //删除商品
        var $linew=$tabsul.children('li');
        $linew.on('mouseover', function(){
                    $(this).find($('.btn_close')).show();
                    index=$(this).index();
                    $('.btn_close').click(function(){
                        $linew.eq(index).remove();
                        //munber--;
                        //$('.tabs_wrap_d2').html(munber);
                    })
                }).on('mouseleave', function(){
                    $('.btn_close').hide();
                });

        });
        });





    //文字打开效果
    var $lis=$('.prefer').find('li');
    $.each($lis, function(idx,ele){
        //console.log(ele);
        $lis.eq(idx).on('mouseover', function(){
            $lis.eq(idx).find('.pre_ph').animate({left:-51,opacity:0},280);
            $lis.eq(idx).find('.pre_rtex').animate({right:-50,opacity:0},280);
            $lis.eq(idx).find('.pre_tex').animate({opacity:1});
        }).on('mouseleave', function(){
            $lis.eq(idx).find('.pre_ph').animate({left:51,opacity:1},280).show();
            $lis.eq(idx).find('.pre_rtex').animate({right:50,opacity:1},280).show();
            $lis.eq(idx).find('.pre_tex').animate({opacity:0});
        })
    });

});
