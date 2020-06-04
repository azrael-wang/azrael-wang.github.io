$(function () {
  
  if (sessionStorage.getItem("CNtoEn")) {
    var languageStatus = sessionStorage.getItem("CNtoEn")
  } else {
    sessionStorage.setItem("CNtoEn", 1)
    history.go(0)
  }

  //认证旧账号密码是否正确
  $('input[name=Modifyusername]').blur(function () {
    var username = $("input[name=Modifyusername]").val()
    if(username == ""){
      layer.msg("账号不能为空",{icon:5})
    }
    return 
  })
  $('input[name=Modifyoldpassword]').blur(function () {
    var username = $("input[name=Modifyusername]").val()
    var oldpassword = $("input[name=Modifyoldpassword]").val()
    if (oldpassword == "") {
      if (languageStatus == 1) {
        
        layer.msg("密码不能为空",{icon:5})
      } else {
        
        layer.msg("Account password cannot be empty",{icon:5})
      }

      return
    }
    
    $.ajax({
      url: baseUrl + "sys/login/userlogin",
      type: "POST",
      data: {
        loginname: username,
        password: oldpassword
      },
      success: function (res) {
        // console.log("登陆结果")
        // console.log(res.msg)
        if (res.code == 0 && res.msg == "登陆成功") {

          sessionStorage.setItem("loginUserId", res.user.id)
        }

        if (res.msg == "账号或密码错误!" && res.code == 0) {
          if (languageStatus == 1) {
            
            layer.msg("旧账号密码错误请重新输入",{icon:5})
          } else {
            
            layer.msg("Old account password error",{icon:5})
          }

          $("input[name=Modifyusername]").val("")
          $("input[name=Modifyoldpassword]").val("")

        }
      }
    })
  })
  //校验新密码格式是否符合规范
  $('input[name=Modifypassword]').blur(function () {
    var Modifypassword = $("input[name=Modifypassword]").val()
    checkPassword(Modifypassword)
  })
  //判断新密码输入是否一致
  $('input[name=Modifyconfirm]').blur(function () {
    var Modifypassword = $("input[name=Modifypassword]").val()
    var Modifyconfirm = $("input[name=Modifyconfirm]").val()
    if (Modifypassword !== Modifyconfirm) {
      layer.msg("二次密码输入不一致请重新输入",{icon:5})
      $("input[name=Modifypassword]").val("")
      $("input[name=Modifyconfirm]").val("")
    }

  })
  //提交修改信息
  $("#submit").on("click", function (event) {

    var id = sessionStorage.getItem("loginUserId")
    var username = $("input[name=Modifyusername]").val()
    var newpassword = $("input[name=Modifyconfirm]").val()
    if (newpassword == "" || username == "") {
      if (languageStatus == 1) {
        layer.msg("账号或新密码不能为空",{icon:5})
        
      } else {
        
        layer.msg("Account or new password cannot be empty",{icon:5})
      }

      return
    }

    $.ajax({
      url: baseUrl + "sys/login/updatePwd",
      type: "POST",
      data: {
        loginname: id,
        password: newpassword
      },
      success: function (res) {
        // console.log("登陆结果")
        // console.log(res)

        if (res.msg === "修改成功") {
          layer.msg("修改成功",{icon:1},function(){
            location.href = "../subPage/login.html"
          },300)
          
        }
        if (res.msg == "账号或密码错误!") {
          if (languageStatus == 1) {
            
            layer.msg("请求失败请联系管理员",{icon:5})
          } else {
            
            layer.msg("If the request fails, please contact the administrator.",{icon:5})
          }

          $("input[name=Modifyusername]").val("")
          $("input[name=Modifyoldpassword]").val("")
        }
      }
    })
  })
  var loginModifyLanguageObj = {
    "passwordCn": ["旧密码", "新密码", "确认新密码"],
    "passwordEn": ["Old password", "New password", "Confirm the new password"],
  }
  if (languageStatus == 1) {
    //中文  
    $("#loginModify_back").text("返回登录")
    $('input[type = username]').attr("placeholder", "用户账号")
    $('input[type = password]').each(function (index, item) {
      $(item).attr("placeholder", loginModifyLanguageObj["passwordCn"][index])
    })
    $("#submit").text("提交")
  } else {
    //英文
    $("#loginModify_back").text("Back Login")
    $('input[type = username]').attr("placeholder", "User account")
    $('input[type = password]').each(function (index, item) {
      $(item).attr("placeholder", loginModifyLanguageObj["passwordEn"][index])
    })
    $("#submit").text("Submit")
  }


  function checkPassword(pwd) {
    var reg =/^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/;
    if(pwd.match(reg)==null){
      layer.msg("密码格式不正确<p>至少6位且包含数字和英文</p>");
      $("input[name=Modifypassword]").val("")
      $("input[name=Modifyconfirm]").val("")
      return true
  }else{
      
      return false 
  }
  }
})