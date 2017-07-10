/**
 * Created by Administrator on 2016/9/14.
 */
$(function(){

    var json= $.cookie('cook');
    var temp=JSON.parse(json);
    //console.log(temp);
    var urls=temp.url;
        var _html='';
       _html+='<img src="'+urls+'">';
        //_html.appendTo($('.shp2_im'));
        $('.shp2_im').append(_html);
        var pnew='<p>'+temp.tex+'</p>';
        $('.shp2_im').append(pnew);
        //var munnew='<p>'+temp.munn+'</p>';
        $('.shp3').children('p').append(temp.munn);
        $('.shp4_num').val(temp.albo);
});