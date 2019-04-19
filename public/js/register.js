$(function() {
    $("#btn").click (() => {
        var username = $("#user").val();
        var pwd = $("#pwd").val();
        if(username&&pwd){
            $.ajax({
                url:'/register',
                type:'post',
                data:{
                    username:username,
                    pwd:pwd
                },
                success:(data)=>{
                    console.log(data)
                    if(data==0){
                        alert("用户已注册！")
                    }else if(data==1){
                        alert("未知错误,请重新注册！")
                    }else if(data==2){
                        alert("用户注册成功")
                        $(location).attr('href', './login.html');
                    }
                }
            })
        }else{
            alert("账号密码不能为空")
        }
  });
});
