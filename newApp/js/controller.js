angular.module('myAppController',[])

.controller('NewsListCtrl',function($scope,NewsService){

        NewsService.requestData();  /*触发请求*/


        /*接收到 广播以后再去获取值*/
        $scope.$on('newsListSerivceUpdata',function(){
            $scope.list=NewsService.getListData();  /*获取值*/


            console.log($scope.list);
        })


})

.controller('NewsContentCtrl',function($scope,$stateParams,NewsContentService,$rootScope,$ionicPopup,Storage) {

        //$stateParams  接收url传过来的参数


        /*
         * 1.进来隐藏底部
         *
         * 2.出去的时候显示底部
         *
         * */
        $scope.$on('$ionicView.beforeEnter', function () {

            $rootScope.hideTab = 'tabs-item-hide';
            /*隐藏底部*/
        });

        $scope.$on('$destroy', function () {
            $rootScope.hideTab = '';
            /*隐藏底部*/
        })

        $scope.hasLoading = true;

        NewsContentService.requestData($stateParams.aid);


        $scope.$on('NewsContentServiceUpdata', function () {
            $scope.item_old = NewsContentService.getContentData();
            /*获取值*/

            $scope.item= $scope.item_old[0];
            $scope.hasLoading = false;
           // console.log($scope.item);
        })


        /*设置字体*/

        /*
        * 1.判断localstorage有没有数据
        *
        * 2.有的话加载localstorage里面的字体数据
        * */


        var c_size=Storage.getItem('c_size');
        if(c_size){
            if(c_size=='A'){
                $scope.c_size='s_24';
            }else if(c_size=='B'){
                $scope.c_size='s_20';
            }else if(c_size=='C'){
                $scope.c_size='s_16';
            }else{
                $scope.c_size='s_14';
            }
            $scope.ret = {size:c_size};

        }else{
            $scope.c_size='s_16';
            $scope.ret = {size:"C"};
        }


        $scope.font_size = [
            { text: "特大字号", value: "A" },
            { text: "大字号", value: "B" },
            { text: "中字号", value: "C" },
            { text: "小字号", value: "D"}
        ];  //初始化字号







        // 触发一个按钮点击，或一些其他目标
        $scope.newsContentFontSize = function() {

            // 一个精心制作的自定义弹窗
            var myPopup = $ionicPopup.show({
                templateUrl:'template/news/font-size.html',
                title: '设置字体',
                //subTitle: 'Please use normal things',
                scope: $scope,    /*让模板可以绑定$scope上面绑定的值*/
                buttons: [
                    {text: '取消'},
                    {
                        text: '<b>确定</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                        //    e.preventDefault();

                            //console.log($scope.ret.size);

                            if($scope.ret.size=='A'){
                                $scope.c_size='s_24';
                            }
                            if($scope.ret.size=='B'){
                                $scope.c_size='s_20';
                            }
                            if($scope.ret.size=='C'){
                                $scope.c_size='s_16';
                            }
                            if($scope.ret.size=='D'){
                                $scope.c_size='s_14';
                            }

                            /*把设置的值保存起来*/
                            Storage.setItem('c_size',$scope.ret.size);

                        }
                    },
                ]
            });

        }


  //     console.log(Storage.getItem('collect'));

        var collect= Storage.getItem('collect');   /*获取localstorage数据*/


        $scope.is_collect=Storage.isCollect('collect',$stateParams.aid);   /*is_collect  给class用的*/


        /*收藏文章*/
        $scope.newsContentCollect=function(aid){

            /*
            * 点击收藏的时候判断文章有没有收藏
            * */



            if($scope.is_collect){  /*已经收藏 取消收藏*/

                    //for(var i=0;i<collect.length;i++){
                    //
                    //    if(aid==collect[i].aid){
                    //        collect.splice(i,1);
                    //        $scope.is_collect=false;
                    //
                    //        /*重新写入localstorage*/
                    //
                    //        Storage.setItem('collect',collect);
                    //
                    //        break;
                    //    }
                    //}


                    $scope.is_collect=false;
                    collect.splice(($scope.is_collect-1),1);
                    Storage.setItem('collect',collect);




                }else{/*没有收藏*/


                    if(collect){ /*有数据的话先取出以前保存的数据，把当前数据和以前的拼接  然后在重新写入*/
                        $scope.is_collect=true;
                        Storage.setItem('collect',collect.concat($scope.item_old));

                    }else{   /*localstorage没有数据  直接写入*/
                        $scope.is_collect=true;
                        Storage.setItem('collect',$scope.item_old);
                    }

                }



        }



})