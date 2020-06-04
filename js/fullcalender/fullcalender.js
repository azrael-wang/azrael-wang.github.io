
        //fc-today 这个类名控制显示当前是哪天
        document.addEventListener('DOMContentLoaded', function () {

            onLoad()

            function onLoad() {
                var url = "sys/learning/list"
                $.ajax({
                    url: baseUrl + "sys/learning/list",
                    type: "POST",
                    data: {
                        language: sessionStorage.getItem("CNtoEn"),
                        page: 1,
                        limit: 100,
                    },
                    success: function (res) {
                        if (res.code == 0) {
                            // console.log("events")
                            // console.log(res.page.list)
                            // console.log(calendar.events)
                            var data = res.page.list
                            if (data.length != 0) {
                                var eventsData = []
                                var currDate = handleTime()

                                data.forEach(function (item, index) {
                                    var startTime = ""
                                    var endTime = ""
                                    if(item.date){
                                         startTime = item.date.split(" ")[0]
                                    }
                                    if(item.endTime){
                                         endTime = item.endTime.split(" ")[0]
                                    }
                                    eventsData.push({
                                        title: item.name,
                                        start:startTime ,
                                        end: endTime,
                                        constraint: item.content,
                                        url: './fullcalenderInfo.html?id=' + item.id
                                    })
                                })

                                initCalender(eventsData)

                            }
                        }
                        // console.log(res)
                        // console.log(eventsData)
                        // console.log("当前日期")
                        // // console.log(currDate)
                    },


                })
            }




            function initCalender(eventsData, currDate) {

                var calendarEl = document.getElementById('calendar');

                var calendar = new FullCalendar.Calendar(calendarEl, {
                    plugins: ['interaction', 'dayGrid', 'timeGrid', 'list'],
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
                    },
                    defaultDate: currDate,
                    navLinks: true, // can click day/week names to navigate views
                    businessHours: true, // display business hours
                    editable: true,
                    events: eventsData,
                });

                calendar.render();


            }


        });



        //处理时间函数
        // handleTime()

        function handleTime() {
            var currDate = new Date().toLocaleDateString().replace(/\//g, "-")
            var arr = currDate.split("-")
            arr.forEach(function (item, index) {

                if (item < 10) {
                    arr[index] = "0" + item
                } else {
                    arr[index] = item
                }

            })
            var str = arr.join("-")
            return str
        }

        var languageStatus = sessionStorage.getItem("CNtoEn")
    
  
        var newsMoreLanguage = {
          titleCn:["日历",],
          titleEn:["Calender",],
          titleBreadCn:['当前位置：<a href="../index.html">首页</a">&bull;<a href="../subPage/fullcalender.html">日历</a>'],
          titleBreadEn:['Current location:<a href="../index.html">Home</a>&bull;<a href="../subPage/fullcalender.html">Calender</a>'],
        
        }
        if(languageStatus == 1){
          //中文
          languageChange("h2[name = newsInfoTitle]","titleCn",newsMoreLanguage)
          languageChange("pan[name = newsInfoBread]","titleBreadCn",newsMoreLanguage)
        }else {
          //英文
          languageChange("h2[name = newsInfoTitle]","titleEn",newsMoreLanguage)
          languageChange("span[name = newsInfoBread]","titleBreadEn",newsMoreLanguage)
        }  


   
        // 日历渲染格式
        // [
        // {
        //     title: 'Business Lunch',
        //     start: '2019-07-06',
        //     end: '2019-07-20',
        //     constraint: 'businessHours',
        //     url: './fullcalenderInfo.html'
        // },
        // {
        //   title: 'Meeting',
        //   start: '2019-06-13T11:00:00',
        //   constraint: 'availableForMeeting', // defined below
        //   color: '#257e4a'
        // },
        // {
        //   title: 'Conference',
        //   start: '2019-06-18',
        //   end: '2019-06-20'
        // },
        // {
        //   title: 'Party',
        //   start: '2019-06-29T20:00:00'
        // },

        // areas where "Meeting" must be dropped
        // {
        //   groupId: 'availableForMeeting',
        //   start: '2019-06-11T10:00:00',
        //   end: '2019-06-11T16:00:00',
        //   rendering: 'background'
        // },
        // {
        //   groupId: 'availableForMeeting',
        //   start: '2019-06-13T10:00:00',
        //   end: '2019-06-13T16:00:00',
        //   rendering: 'background'
        // },

        // red areas where no events can be dropped
        // {
        //   start: '2019-08-24',
        //   end: '2019-08-28',
        //   overlap: false,
        //   rendering: 'background',
        //   color: '#ff9f89'
        // },
        // {
        //   start: '2019-06-06',
        //   end: '2019-06-08',
        //   overlap: false,
        //   rendering: 'background',
        //   color: '#ff9f89'
        // },
        // {
        //   title: 'Business Lunch',
        //   start: '2019-07-06',
        //   end: '2019-07-20',
        //   overlap: false,
        //   rendering: 'background',
        //   color: '#16F5E',
        //   url:'./fullcalenderInfo.html'

        // }
        // ]
    