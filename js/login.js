$(function () {
  if (sessionStorage.getItem("CNtoEn")) {
    var languageStatus = sessionStorage.getItem("CNtoEn")
  } else {
    sessionStorage.setItem("CNtoEn", 1)
    history.go(0)
  }
  var winHeight = 0;
  // 兼容性判断
  if (window.innerHeight) {
    //获取屏幕宽度
    winHeight = window.innerHeight;
  } else if ((document.body) && (document.body.clientHeight)) {
    //获取屏幕宽度
    winHeight = document.body.clientHeight;
  }
  //给html赋值
  var html = document.getElementsByTagName('html')[0];
  if (document.body.offsetHeight < winHeight) {
    html.style.height = winHeight;
  }
  var savePassword = function () {
    //记录密码
    $('input[name = load_name]').on("change", function (event) {
      //监听checkbox的选中状态
      var isChecked = $(this).is(":checked")
      if (isChecked) {
        //被选中
        var username = $("input[type=username]").val()
        var password = $("input[type=password]").val()
        username = compileStr(username)
        password = compileStr(password)
        window.localStorage.setItem("userName", username)
        window.localStorage.setItem("passWord", password)
        $('input[name = load_name]').attr("checked", true)
      } else {
        //未被选中

        window.localStorage.removeItem("userName")
        window.localStorage.removeItem("passWord")
        $("input[type=username]").val("")
        $("input[type=password]").val("")
        $('input[name = load_name]').attr("checked", false)

      }

    })
  }
  login()
  function login() {
    //记录密码

    //登录时如果密码已经记录进行渲染
    if (localStorage.getItem("userName")) {
      var saveUsername = window.localStorage.getItem("userName")
      var savePassowrd = window.localStorage.getItem("passWord")
      saveUsername = uncompileStr(saveUsername)
      savePassowrd = uncompileStr(savePassowrd)
      $("input[type= username]").val(saveUsername)
      $("input[type=password]").val(savePassowrd)
      $('input[type = checkbox ]').attr("checked", true)
    } else {
      $("input[type= username]").val("")
      $("input[type=password]").val("")
      $('input[type = checkbox ]').attr("checked", false)
    }
    savePassword()
    /**
     * @edit 1有个人信息  2无个人信息
     * @identity 1 学生 2教师
     * @id  个人信息标识
     */

    //登录
    $("#login").on("click", function (event) {
      var username = $("input[type=username]").val()
      var password = $("input[type=password]").val()
      $.ajax({
        url: baseUrl + "sys/login/userlogin",
        type: "POST",
        data: {
          loginname: username,
          password: password
        },
        success: function (res) {
          // console.log("登录结果")
          // console.log(res)

          if (res.code == 0 && res.msg == "登陆成功") {

            var edit = res.user.sign
            var identity = res.user.type
            var id = res.user.id
            // alert(identity)
            // alert(edit)
            //如果登录成功更新保需要记录的账号密码
            var isCheckedL = $('input[name = load_name]').is(":checked")
            if (isCheckedL) {
              //被选中
              var username = $("input[type=username]").val()
              var password = $("input[type=password]").val()
              // console.log(username)
              // console.log(password)
              username = compileStr(username)
              password = compileStr(password)
              window.localStorage.setItem("userName", username)
              window.localStorage.setItem("passWord", password)
            }
            sessionStorage.setItem("islogin", 1)
            sessionStorage.setItem("loginType", identity)
            sessionStorage.setItem("loginUserId", id)
            layer.msg("登录成功", {
              icon: 1
            }, function () {
              if (edit == 1) {

                location.href = "../subPage/Homepage.html?id=" + id + "&type=" + identity + ""
              } else {

                if (identity == 1) {
                  location.href = "../subPage/studentEditorPage.html?id=" + id + "&type=" + identity + ""
                } else {
                  location.href = "../subPage/teacherEditPage.html?id=" + id + "&type=" + identity + ""
                }

              }
            },300)

          }
          if (res.code == 500) {


            layer.msg("登录失败", {
              icon: 5
            })
          }
          if (res.msg == "账号或密码错误!") {

            layer.msg("账号或密码错误!", {
              icon: 5
            }, function () {
              $("input[type=username]").val("")
              $("input[type=password]").val("")
            })
          }
        },
        err: function (err) {

          layer.msg("登录失败", {
            icon: 5
          })
        }
      })



    })
  }
  //对字符串进行加密
  function compileStr(code) {

    code = code.toString()
    c = String.fromCharCode(code.charCodeAt(0) + (code.length + 10001));
    for (var i = 1; i < code.length; i++) {
      c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
    }
    return escape(c);
  }




  //字符串进行解密 
  function uncompileStr(code) {
    code = unescape(code);
    var c = String.fromCharCode(code.charCodeAt(0) - (code.length + 10001));
    for (var i = 1; i < code.length; i++) {
      c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
    }
    return c;
  }

  loginLanguageObj = {
    "textCn": ["记住密码", "修改密码", "登录", "版权:© CopyRight 2017 -ICP备案证号：京ICP备17010163号 |", "中国物理研究院研究生院"],
    "textEn": ["Remember", "Change", "Login", "Copyright: © CopyRight 2017 - ICP Record No.: 京ICP备17010163号 |", "Graduate School of China Institute of Physics"],
  }
  if (sessionStorage.getItem("CNtoEn") == 1) {

    //中文
    $('span[name = loginText]').each(function (index, item) {
      $(item).text(loginLanguageObj["textCn"][index])

    })
    //用户名密码
    $('input[type = username]').attr("placeholder", "请输入账号")
    $('input[type = password]').attr("placeholder", "请输入密码")
  } else {
    //英文

    $('span[name = loginText]').each(function (index, item) {
      $(item).text(loginLanguageObj["textEn"][index])
    })
    $('input[type = username]').attr("placeholder", "Peking University mailbox/mobile phone number")
    $('input[type = password]').attr("placeholder", "Please enter your password")
  }


})