/*
    需求：表单验证！
        第一步：页面加载完后，获取所有需要验证的表单项。
        第二步：
                用户名：
                设置密码：
                确认密码：
                邮箱验证：
                手机验证：
                身份证号：
                阅读协议：
                注册：
 */
window.onload = function(){
    var userName = document.getElementById("userName");  //用户名文本框节点对象
    var pwd = document.getElementById("pwd");            //设置密码密码框节点对象
    var pwdOk = document.getElementById("pwdOk");       //确认密码密码框节点对象
    var email = document.getElementById("email");       //邮箱文本框节点对象
    var mobile = document.getElementById("mobile");     //手机文本框节点对象
    var idCard = document.getElementById("idCard");    //身份证号文本框节点对象
    var agree = document.getElementById("agree");      //同意协议选择框节点对象

    /*
        用户名检测
            当获取焦点时：
                若为空，则显示提示信息
            当失去焦点时：
                若为空，则隐藏显示信息
                若长度不符合4-20，则发出警告（文本框爆红，并显示提示警告信息）
                若用户名不符合规范（支持中文、字母、数字、- 、_的组合）
            当文本输入时

     */
    userName.onfocus = userName.onblur =  userName.onkeyup = function(e){
        var event = window.event||e;
        console.log(checkUserName(this,event.type));
    }

    /*
        用户名检测工具
        参数
            input 文本框节点对象
            type  事件类型
    */
    function checkUserName(input,type){
        var v = regTool.clearEmptyBoth(input.value);  //去掉两边的空格,得到文本框的值
        var tip = input.parentNode.nextElementSibling.firstElementChild; //span提示信息节点对象
        var divBox = input.parentNode;  //文本框外层div节点对象
        var status = divBox.lastElementChild;
        if(type=="focus"){
            if(v.length==0){  //如果为空
                divBox.className = "input";
                tip.className = "tip empty";
                tip.innerHTML = "支持汉字、字母、数字、_、-组合,字符4-20";
                status.className = "status error";
                return false;
            }
        }
        if(type=="blur"){
            if(v.length==0){
                divBox.className = "input";
                tip.className = "tip";
                status.className = "status error";
                return false;
            }
        }
        if(regTool.userNameReg.test(v)){  //如果格式正确
            if(regTool.userNameLen.test(v)){  //如果长度正确
                divBox.className = "input";
                tip.className = "tip";
                status.className = "status";
                return true;
            }
            else{
                divBox.className = "input error";
                tip.className = "tip error"
                tip.innerHTML = "字符长度4-20";
                status.className = "status error";
                return false;
            }
        }
        else{ //否则不正确
            divBox.className = "input error";
            tip.className = "tip error"
            tip.innerHTML = "格式错误，仅支持汉字、字母、数字、_、-组合";
            status.className = "status error";
            return false;
        }
    }

    /*
        设置密码验证
            当获取焦点时
                若密码框为空，则显示提示信息
            当失去焦点时
                若密码框不符合规则，则显示警告信息
     */
    pwd.onfocus =  pwd.onblur = function(e){
        var event = window.event||e;
        console.log(checkPwd(this,event.type));
    };

    /*
        密码验证
         参数
         input 文本框节点对象
         type  事件类型
     */
    function checkPwd(input,type){
        var v = regTool.clearEmptyBoth(input.value);  //去掉两边的空格,得到文本框的值
        var tip = input.parentNode.nextElementSibling.firstElementChild; //span提示信息节点对象
        var divBox = input.parentNode;  //文本框外层div节点对象
        var status = divBox.lastElementChild;
        if(type=="focus"){
            if(v.length==0){
                divBox.className = "input";
                tip.className = "tip empty";
                tip.innerHTML = "建议使用字母、数字和符号两种以上的组合";
                status.className = "status error";
                return false;
            }
        }
        if(type=="blur"){
            if(v.length==0){
                divBox.className = "input";
                tip.className = "tip";
                status.className = "status error";
                return false;
            }else{
                return check();
            }
        }
        function check(){
            if(regTool.pwdReg.test(v)){  //如果格式正确
                if(regTool.pwdLen.test(v)){  //如果长度正确
                    divBox.className = "input";
                    tip.className = "tip";
                    status.className = "status";
                    return true;
                }
                else{
                    divBox.className = "input error";
                    tip.className = "tip error"
                    tip.innerHTML = "字符长度6-20";
                    status.className = "status error";
                    return false;
                }
            }
            else{ //否则不正确
                divBox.className = "input error";
                tip.className = "tip error"
                tip.innerHTML = "格式错误，仅支持字母、数字和特殊组合";
                status.className = "status error";
                return false;
            }
        }
        return check();
    }

    /*
        确认密码 验证
         获取焦点时：
            若密码框为空，则显示提示信息
          失去焦点时：
            若密码框为空，则隐藏提示信息
            否则，提示两次密码不一致

     */
    pwdOk.onfocus = pwdOk.onblur = function (e) {
        var event = window.event||e;
        console.log(checkPwdOk(this,event.type))
    }
    /*
     确认密码验证
     参数
     input 文本框节点对象
     type  事件类型
     */
    function checkPwdOk(input,type){
        var v = regTool.clearEmptyBoth(input.value);  //去掉两边的空格,得到文本框的值
        var tip = input.parentNode.nextElementSibling.firstElementChild; //span提示信息节点对象
        var divBox = input.parentNode;  //文本框外层div节点对象
        var status = divBox.lastElementChild;
        if(type=="focus"){
            if(v.length==0){
                divBox.className = "input";
                tip.className = "tip empty";
                tip.innerHTML = "请再次输入密码";
                status.className = "status error";
                return false;
            }
        }
        if(type=="blur"){
            if(v.length==0){
                divBox.className = "input";
                tip.className = "tip";
                status.className = "status error";
                return false;
            }else{
                return check();
            }
        }
        function check(){
            var p1 = pwd.value;
            if(v==p1){  //如果格式正确
                divBox.className = "input";
                tip.className = "tip";
                status.className = "status";
                return true;
            }
            else{ //否则不正确
                divBox.className = "input error";
                tip.className = "tip error"
                tip.innerHTML = "两次密码输入不一致";
                status.className = "status error";
                return false;
            }
        }
        return check();
    }

    /*
        邮箱验证
         获取焦点时：
         若邮箱为空，则显示提示信息
         失去焦点时：
         若邮箱为空，则隐藏提示信息
         否则，提示格式错误
     */
    email.onfocus = email.onblur =  function (e) {
        var event = window.event||e;
        console.log(checkEmail(this,event.type))
    }

    /*
     邮箱验证
     参数
     input 文本框节点对象
     type  事件类型
     */
    function checkEmail(input,type){
        var v = regTool.clearEmptyBoth(input.value);  //去掉两边的空格,得到文本框的值
        var tip = input.parentNode.nextElementSibling.firstElementChild; //span提示信息节点对象
        var divBox = input.parentNode;  //文本框外层div节点对象
        var status = divBox.lastElementChild;
        if(type=="focus"){
            if(v.length==0){
                divBox.className = "input";
                tip.className = "tip empty";
                tip.innerHTML = "完成验证后，你可以用该邮箱登录和找回密码";
                status.className = "status error";
                return false;
            }
        }
        if(type=="blur"){
            if(v.length==0){
                divBox.className = "input";
                tip.className = "tip";
                status.className = "status error";
                return false;
            }else{
                return check();
            }
        }
        function check(){
            if(regTool.emailReg.test(v)){  //如果格式正确
                divBox.className = "input";
                tip.className = "tip";
                status.className = "status";
                return true;
            }
            else{ //否则不正确
                divBox.className = "input error";
                tip.className = "tip error"
                tip.innerHTML = "格式错误";
                status.className = "status error";
                return false;
            }
        }
        return check();
    }

    /*
     手机验证
     获取焦点时：
     若手机为空，则显示提示信息
     失去焦点时：
     若手机为空，则隐藏提示信息
     否则，提示格式错误
     */
    mobile.onfocus = mobile.onblur = function (e) {
        var event = window.event||e;
        console.log(checkMobile(this,event.type))
    }

    /*
     手机验证
     参数
     input 文本框节点对象
     type  事件类型
     */
    function checkMobile(input,type){
        var v = regTool.clearEmptyBoth(input.value);  //去掉两边的空格,得到文本框的值
        var tip = input.parentNode.nextElementSibling.firstElementChild; //span提示信息节点对象
        var divBox = input.parentNode;  //文本框外层div节点对象
        var status = divBox.lastElementChild;
        if(type=="focus"){
            if(v.length==0){
                divBox.className = "input";
                tip.className = "tip empty";
                tip.innerHTML = "完成验证后，你可以用手机登录和找回密码";
                status.className = "status error";
                return false;
            }
        }
        if(type=="blur"){
            if(v.length==0){
                divBox.className = "input";
                tip.className = "tip";
                status.className = "status error";
                return false;
            }else{
                return check();
            }
        }
        function check(){
            if(regTool.mobileReg.test(v)){  //如果格式正确
                divBox.className = "input";
                tip.className = "tip";
                status.className = "status";
                return true;
            }
            else{ //否则不正确
                divBox.className = "input error";
                tip.className = "tip error"
                tip.innerHTML = "格式错误";
                status.className = "status error";
                return false;
            }
        }
        return check();
    }

    /*
     身份证号验证
     获取焦点时：
     若身份证号为空，则显示提示信息
     失去焦点时：
     若身份证号为空，则隐藏提示信息
     否则，提示格式错误
     */
    idCard.onfocus = idCard.onblur = function (e) {
        var event = window.event||e;
        console.log(checkIdCard(this,event.type))
    }

    /*
     身份证号验证
     参数
     input 文本框节点对象
     type  事件类型
     */
    function checkIdCard(input,type){
        var v = regTool.clearEmptyBoth(input.value);  //去掉两边的空格,得到文本框的值
        var tip = input.parentNode.nextElementSibling.firstElementChild; //span提示信息节点对象
        var divBox = input.parentNode;  //文本框外层div节点对象
        var status = divBox.lastElementChild;
        if(type=="focus"){
            if(v.length==0){
                divBox.className = "input";
                tip.className = "tip empty";
                tip.innerHTML = "京东商城实名制";
                status.className = "status error";
                return false;
            }
        }
        if(type=="blur"){
            if(v.length==0){
                divBox.className = "input";
                tip.className = "tip";
                status.className = "status error";
                return false;
            }else{
                return check();
            }
        }
        function check(){
            if(regTool.idCardReg.test(v)){  //如果格式正确
                divBox.className = "input";
                tip.className = "tip";
                status.className = "status";
                return true;
            }
            else{ //否则不正确
                divBox.className = "input error";
                tip.className = "tip error"
                tip.innerHTML = "格式错误";
                status.className = "status error";
                return false;
            }
        }
        return check();
    }

    /*注册*/
    var register = document.getElementById("register");  //注册按钮节点对象
    var agree = document.getElementById("agree");  //是否同意注册协议节点对象
    register.onclick = function(){
        var tip = agree.parentNode.nextElementSibling.firstElementChild; //span提示信息节点对象
        if(agree.checked){
            tip.className = "tip";
            if(
                checkUserName(userName)&&
                checkPwd(pwd)&&
                checkPwdOk(pwdOk)&&
                checkEmail(email)&&
                checkMobile(mobile)&&
                checkIdCard(idCard)
            ){
                alert("注册成功")
            }
        }else{
            tip.className = "tip error"
            tip.innerHTML = "请同意注册协议";
        }
    }





} //window.onloadEnd


