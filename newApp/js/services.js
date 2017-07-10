/**
 * Created by Administrator on 2016/10/26 0026.
 */
angular.module('myAppServices',[])
.service('NewsService',function($http,$rootScope){

        var list=[];
        return {
            requestData:function(){

                /*触发请求数据的方法*/
                var myUrl = "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1&callback=JSON_CALLBACK";
                $http.jsonp(myUrl).success(
                    function(data){
                        console.log(data);

                        list=data.result;  /*请求完成数据以后 把数据给 list*/

                        $rootScope.$broadcast('newsListSerivceUpdata');
                    }
                ).error(function(){
                        alert('shibai');

                 });


            },getListData:function(){

                return list;
            }
        }
 })

 /*新闻详情*/
.service('NewsContentService',function($http,$rootScope){

    var list=[];
    return {
        requestData:function(aid){

            /*触发请求数据的方法*/
            var myUrl = "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid="+aid+"&callback=JSON_CALLBACK";
            $http.jsonp(myUrl).success(
                function(data){
                    console.log(data);

                    list=data.result;  /*请求完成数据以后 把数据给 list*/

                    $rootScope.$broadcast('NewsContentServiceUpdata');
                }
            ).error(function(){
                    alert('shibai');

                });


        },getContentData:function(){

            return list;
        }
    }
})

    /*新闻详情*/
    .service('Storage',function(){

        return{

            setItem:function(key,value){


                localStorage.setItem(key,JSON.stringify(value));
            },
            getItem:function(key){
                return JSON.parse(localStorage.getItem(key));
            },
            removeItem:function(key){
                localStorage.removeItem(key);
            },
            isCollect:function(key,aid){  /* collect  123*/

                var collect= this.getItem(key);
                    if(collect){
                        for(var i=0;i<collect.length;i++){
                            if(aid==collect[i].aid){
                                    return i+1;   /*如果有的话只返回 索引值*/
                            }
                        }
                }else{
                    return false;
                }

                return false;
            }
        }
    })