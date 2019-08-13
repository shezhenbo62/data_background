function sendSMSCode() {
    $(".phonecode-a").removeAttr("onclick");
    var mobile = $("#username").val();
    if (!mobile) {
        $("#mobile-err span").html("请输入正确的手机号！");
        $("#mobile-err").show();
        $(".phonecode-a").attr("onclick", "sendSMSCode();");
        return;
    };
    $.post("http://192.168.2.50:8000/code/", {"mobile":mobile}, function(data){
            // if (data.mobile){
            //     pass
            // }else{
            //     var duration = 60;
            //     var intervaild = setInterval(function(){
            //         $(".phonecode-a").html(duration + "秒后再次获取");
            //         if (duration === 1){
            //             clearInterval(intervaild);
            //             $(".phonecode-a").html("获取验证码");
            //             $(".phonecode-a").attr("onclick", "sendSMSCode();");
            //         }
            //         duration = duration - 1;
            //     }, 1000, 60)
            // }
            var duration = 60;
            alert('bbbbbbbbbb')
            var intervaild = setInterval(function(){
                $(".phonecode-a").html(duration + "秒后再次获取");
                if (duration === 1){
                    clearInterval(intervaild);
                    $(".phonecode-a").html("获取验证码");
                    $(".phonecode-a").attr("onclick", "sendSMSCode();");
                }
                duration = duration - 1;
            }, 1000, 60)
    }),success(function(){
        alert('请求成功后')
    }).complete(function(){
        alert('请求完成后')
    }).error(function(xhr,status,info){
        alert(status);
        alert(info);
    })
}

$(function(){
    $("#username").focus(function(){
        $("#mobile-err").hide();
    });
    $("#phonecode").focus(function(){
        $("#phone-code-err").hide();
    });
    $("#fm-login-submit").click(function(e){
        e.preventDefault();
        mobile = $("#username").val();
        phoneCode = $("#phonecode").val();
        if (!mobile){
            $("#mobile-err span").html("请输入正确的手机号！");
            $("#mobile-err").show();
            return;
        }
        if (!phoneCode){
            $("#phone-code-err span").html("请输入短信验证码！");
            $("#phone-code-err").show();
            return;
        }
    })
})