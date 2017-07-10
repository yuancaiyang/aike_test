/*使用ionic必须得依赖注入 ionic */
var app=angular.module('myApp',['ionic','myAppController','myAppServices']);


app.config(function($stateProvider,$urlRouterProvider) {

    $stateProvider
        .state('tab', {
            url: '/tab',
            abstract: true,    /*抽象的    只要定义 abstract=true  我们的路由就不会解析这个地址*/
            templateUrl: 'template/tabs.html'           /*所有的页面要继承 tab  那么tab就给设置成  abstract=true*/
        })

        /*首页     href="#/tab/home"    */
        .state('tab.home', {   /*tab.home  表示 home这个路由要继承 tab*/
            url: '/home',
            views: {      /* 动态的指定我们的模板 加载到那个  视图里面*/
                'tab-home': {   /*  我们在tabs模板里面设置的 <ion-nav-view name="tab-home"></ion-nav-view>   name="tab-home" */
                    templateUrl: 'template/home/index.html',
                   // controller: 'HomeCtrl'
                }
            }

        })

        /*新闻模块*/

        .state('tab.news', {
            url: '/news',
            views: {      /* 动态的指定我们的模板 加载到那个  视图里面*/
                'tab-news': {
                    templateUrl: 'template/news/list.html',
                    controller: 'NewsListCtrl'
                }
            }

        })

        .state('tab.newscontent', {
            url: '/newscontent/:aid',
            views: {      /* 动态的指定我们的模板 加载到那个  视图里面*/
                'tab-news': {
                    templateUrl: 'template/news/content.html',
                    controller: 'NewsContentCtrl'
                }
            }

        })





        /*用户模块*/
        .state('tab.user', {
            url: '/user',
            views: {      /* 动态的指定我们的模板 加载到那个  视图里面*/
                'tab-user': {
                    templateUrl: 'template/user/index.html',
                 //   controller: 'UserCtrl'
                }
            }

        })

        .state('tab.help', {
            url: '/help',
            views: {      /* 动态的指定我们的模板 加载到那个  视图里面*/
                'tab-user': {
                    templateUrl: 'template/user/help.html',
                    //   controller: 'UserCtrl'
                }
            }

        })

    //找不到路由的时候 默认跳转到那个路由

    $urlRouterProvider.otherwise('/tab/home')




})