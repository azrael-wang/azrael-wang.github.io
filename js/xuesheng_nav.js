$(function () {

  //***************ajax */
  // 人文信息
  xxfw_rwhj_list()

  //人文环境
  function xxfw_rwhj_list() {
    $.ajax({
      url: baseUrl + "sys/stubusin/list",
      type: "POST",
      data: {
        language: 1
      },
      success: function (res) {
        // console.log("RESSSS")
        // console.log(res)
        var data = res.page.list
        var str = ""
        if (data.length === 0) {
          var arr = [1, 2, 3]
          arr.forEach(function (item, index) {
            str += `
            <li data-id="rwhj_sub_c_${index + 1}" class="clearfix">
            <div class="img"></div>
            <span>住宿业务</span>
              </li>
            `
          })
        } else {
          data.forEach(function (item, index) {
            str += `
          <li data-id="rwhj_sub_c_${index + 1}" class="clearfix">
          <div class="img"></div>
          <span>住宿业务</span>
            </li>
          `
          })
        }



        $("#xxfw_rwhj").append($(str))
      }
    })
  }
})