/**
 * Created by Administrator on 2016/9/8.
 */
$(function(){
        var $login_hd=$('.login_hd');
        var $spans=$login_hd.children('span');
    for(var i =0;i<$spans.length;i++){
        $spans.eq(i).on('click', function(){
            var temp=$(this).index();
            //console.log($(this).index());
            $('.login_i').animate({width:(temp)*65+80,left:temp*146+50});
           $('.login_ul').animate({left:-temp*$('.login').width()});
    });
    }
        //账号登录页面
        var $btn=$('.txt_firbtn').children('button');
            $btn.on('click', function(){
                if($('.txt_box1').children('input').val()==''){
                    $('.txt_box1').addClass('txt_add1');
                    $('.displace1').show();
                }
                if($('.txt_box2').children('input').val()==''){
                    $('.txt_box2').addClass('txt_add1');
                    $('.displace2').show();
                }
                if($('.txt_box3t').children('input').val()==''){
                    $('.txt_box3t').addClass('txt_add1');
                    $('.displace3').show();
                }
            });
//账号登录页面_keyup事件
            var $inputf=$('.txt_keyup1').children('input');
                $inputf.on('keyup', function(){
                    if($('.txt_box1').children('input').val()!=''){
                       $('.txt_box1').removeClass('txt_add1');
                       $('.displace1').hide();
                    }
                    if($('.txt_box2').children('input').val()!=''){
                        $('.txt_box2').removeClass('txt_add1');
                        $('.displace2').hide();
                    }
                    if($('.txt_box3').children('input').val()!=''){
                        $('.txt_box3').removeClass('txt_add1');
                        $('.displace3').hide();
                    }
                });


        //手机动态登录页面
        var $bbtn=$('.txt_btn3').children('button');
            $bbtn.on('click', function(){



                var reg=/^1[3|4|5|7|8]\d{9}$/;
                var str=$('.txt_btn2').children('input').val();
                var result=reg.test(str);
                if(result==false){
                    $('.txt_btn2').addClass('txt_add1');
                    $('.displ_1').show().next().hide();
                }else if(str==''){
                    $('.txt_btn2').removeClass('txt_add1');
                    $('.displ_1').hide();
                }

                if($('.txt_btn2').children('input').val()==''){
                    $('.displ_2').show();
                    $('.displ_1').hide();
                    $('.txt_btn2').addClass('txt_add1');
                }

                if($('.txt_boxf').children('input').val()==''){
                    $('.displ_3').show();
                    $('.txt_boxf').addClass('txt_add1');
                }

            });
    //手机动态登录页面_keyup事件
                var $inputs=$('.txt_keyup2').children('input');
                    $inputs.on('keyup', function(){
                        if($('.txt_btn2').children('input').val()!=''){
                            $('.txt_btn2').removeClass('txt_add1');
                            $('.displ_2').hide();
                        }
                        if($('.txt_boxf').children('input').val()!=''){
                            $('.txt_boxf').removeClass('txt_add1');
                            $('.displ_3').hide();
                        }
                    })

});