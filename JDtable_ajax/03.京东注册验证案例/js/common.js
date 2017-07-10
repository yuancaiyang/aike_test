/**
 * Created by Administrator on 2016/5/25.
 */



/*
	replace用法：
	replace(pattern, replacement)
	用replacement替换pattern
*/



var regTool ={
    /*去除两边空格*/
    clearEmptyBoth: function (str) {
        return str.replace(/^\s+/,'').replace(/\s+$/,'');
    },
    /*用户名验证*/
    userNameReg:/^[(^\u4e00-\u9fa5)\w_-]*$/,
    userNameLen:/^.{4,20}$/,
    pwdReg:/^[^(^\u4e00-\u9fa5)]*$/,
    pwdLen:/^.{6,20}$/,
    emailReg:/^\w+@\w+(\.\w+)+$/,
    mobileReg:/^[1-3]\d{10}$/,
    idCardReg:/^\d{17}(\d|X)$/
}
