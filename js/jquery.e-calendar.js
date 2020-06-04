(function ($) {
    //声明日历方法
    var eCalendar = function (options, object) {
        // Initializing global variables
        var adDay = new Date().getDate();
        var adMonth = new Date().getMonth();
        var adYear = new Date().getFullYear();
        var dDay = adDay;
        var dMonth = adMonth;
        var dYear = adYear;
        var instance = object;
         //特殊事件定时器
         var c_event_grid_timer = null
         //给特殊事件上一个移入事件
         $('.c-event-grid').on("mouseenter",function(){
             
             if(c_event_grid_timer) {
                 $('.c-event-grid').css("cssText", "display:block;")
             } else {
                 $('.c-event-grid').css("cssText", "display:none;")
             }   
 
         }) 
        var settings = $.extend({}, $.fn.eCalendar.defaults, options);

        function lpad(value, length, pad) {
            if (typeof pad == 'undefined') {
                pad = '0';
            }
            var p;
            for (var i = 0; i < length; i++) {
                p += pad;
            }
            return (p + value).slice(-length);
        }

        var mouseOver = function () {
            $(this).addClass('c-nav-btn-over');
        };
        var mouseLeave = function () {
            $(this).removeClass('c-nav-btn-over');
        };
        var mouseOverEvent = function () {
            // $(this).addClass('c-event-over');
            // var d = $(this).attr('data-event-day');
            // $('.c-event-grid').css("cssText", "display:block;")
            // $('div.c-event-item[data-event-day="' + d + '"]').addClass('c-event-over');
                // 特殊事件事件
                // console.log(event)
                var PageX = event.pageX + 10
                var PageY = event.pageY + 5
                // console.log("PageX")
                // console.log(PageX)
                // console.log("PageY")
                // console.log(PageY)
              $(this).addClass('c-event-over');
                  // console.log("事件对象")
                  // console.log(event)
              var d = $(this).attr('data-event-day');
              
              $('.c-event-grid').css("cssText", "display:block;")
              $('div.c-event-item[data-event-day="' + d + '"]').addClass('c-event-over');
              $('.c-event-grid').slideDown()
              $('.c-event-grid').css({
                  left:PageX + "px",
                  top:PageY + "px",
              })
        };
        var mouseLeaveEvent = function () {
            $(this).removeClass('c-event-over')
            var d = $(this).attr('data-event-day');
            $('.c-event-grid').css("cssText", "display:none;")
            $('div.c-event-item[data-event-day="' + d + '"]').removeClass('c-event-over');
        };
        var mouseOverItem = function () {
            $(this).addClass('c-event-over');
            var d = $(this).attr('data-event-day');
            $('div.c-event[data-event-day="' + d + '"]').addClass('c-event-over');
        };
        var mouseLeaveItem = function () {
            $(this).removeClass('c-event-over')
            var d = $(this).attr('data-event-day');
            $('div.c-event[data-event-day="' + d + '"]').removeClass('c-event-over');
        };
        var nextMonth = function () {
            if (dMonth < 11) {
                dMonth++;
            } else {
                dMonth = 0;
                dYear++;
            }
            print();
        };
        var previousMonth = function () {
            if (dMonth > 0) {
                dMonth--;
            } else {
                dMonth = 11;
                dYear--;
            }
            print();
        };

        function loadEvents() {
            if (typeof settings.url != 'undefined' && settings.url != '') {
                $.ajax({
                    url: settings.url,
                    async: false,
                    success: function (result) {
                        settings.events = result;
                    }
                });
            }
        }

        function print() {
            loadEvents();
            var dWeekDayOfMonthStart = new Date(dYear, dMonth, 1).getDay();
            var dLastDayOfMonth = new Date(dYear, dMonth + 1, 0).getDate();
            var dLastDayOfPreviousMonth = new Date(dYear, dMonth + 1, 0).getDate() - dWeekDayOfMonthStart + 1;

            var cBody = $('<div/>').addClass('c-grid');
            var cEvents = $('<div/>').addClass('c-event-grid');
            var cEventsBody = $('<div/>').addClass('c-event-body');
            cEvents.append($('<div/>').addClass('c-event-title c-pad-top').html(settings.eventTitle));
            cEvents.append(cEventsBody);
            var cNext = $('<div/>').addClass('c-next c-grid-title c-pad-top');
            var cMonth = $('<div/>').addClass('c-month c-grid-title c-pad-top');
            var cPrevious = $('<div/>').addClass('c-previous c-grid-title c-pad-top ');
            cPrevious.html(settings.textArrows.previous);
            cMonth.html( dYear+ '-' +dMonth);
            cNext.html(settings.textArrows.next);

            cPrevious.on('mouseover', mouseOver).on('mouseleave', mouseLeave).on('click', previousMonth);
            cNext.on('mouseover', mouseOver).on('mouseleave', mouseLeave).on('click', nextMonth);

            cBody.append(cPrevious);
            cBody.append(cMonth);
            cBody.append(cNext);
            for (var i = 0; i < settings.weekDays.length; i++) {
                var cWeekDay = $('<div/>').addClass('c-week-day c-pad-top');
                cWeekDay.html(settings.weekDays[i]);
                cBody.append(cWeekDay);
            }
            var day = 1;
            var dayOfNextMonth = 1;
            for (var i = 0; i < 42; i++) {
                var cDay = $('<div/>');
                if (i < dWeekDayOfMonthStart) {
                    cDay.addClass('c-day-previous-month c-pad-top');
                    cDay.html(dLastDayOfPreviousMonth++);
                } else if (day <= dLastDayOfMonth) {
                    cDay.addClass('c-day c-pad-top');
                    if (day == dDay && adMonth == dMonth && adYear == dYear) {
                        cDay.addClass('c-today');
                    }
                    for (var j = 0; j < settings.events.length; j++) {
                        var d = settings.events[j].datetime;
                        if (d.getDate() == day && (d.getMonth() - 1) == dMonth && d.getFullYear() == dYear) {
                            cDay.addClass('c-event').attr('data-event-day', d.getDate());
                            cDay.on('mouseover', mouseOverEvent).on('mouseleave', mouseLeaveEvent);
                        }
                    }
                    cDay.html(day++);
                } else {
                    cDay.addClass('c-day-next-month c-pad-top');
                    cDay.html(dayOfNextMonth++);
                }
                cBody.append(cDay);
                cBody.append(cPrevious);
                cBody.append(cMonth);
                cBody.append(cNext);
            }
            var eventList = $('<div/>').addClass('c-event-list');
            for (var i = 0; i < settings.events.length; i++) {
                var d = settings.events[i].datetime;
                if ((d.getMonth() - 1) == dMonth && d.getFullYear() == dYear) {
                    var date = lpad(d.getDate(), 2) + '/' + lpad(d.getMonth(), 2) + ' ' + lpad(d.getHours(), 2) + ':' + lpad(d.getMinutes(), 2);
                    var item = $('<div/>').addClass('c-event-item');
                    var title = $('<div/>').addClass('title').html(date + '  ' + settings.events[i].title + '<br/>');
                    var description = $('<div/>').addClass('description').html(settings.events[i].description + '<br/>');
                    item.attr('data-event-day', d.getDate());
                    item.on('mouseover', mouseOverItem).on('mouseleave', mouseLeaveItem);
                    item.append(title).append(description);
                    eventList.append(item);
                }
            }
            $(instance).addClass('calendar');
            cEventsBody.append(eventList);
            $(instance).html(cBody).append(cEvents);
        }

        return print();
    }
    // 在jq原型中增加日历方法
    $.fn.eCalendar = function (oInit) {
        return this.each(function () {
            return eCalendar(oInit, $(this));
        });
    };

    // plugin defaults  日历事件参数 对象，在设置日历时我们需要定义的参数在events中定义
    $.fn.eCalendar.defaults = {
        weekDays: ['日', '一', '二', '三', '四', '五', '六'],
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        textArrows: { previous: '<img src="img/calendar_left.png" alt="">', next: '<img src="img/calendar_right.png" alt="">' },
        eventTitle: 'Eventos',
        url: '',
        events: [
            { title: '活动标题1', description: '具体活动安排1 2019', datetime: new Date(2019, 5, 13, 17) },
            { title: '活动标题2', description: '具体活动安排2 2019', datetime: new Date(2019, 6, 25, 16) },
            { title: '活动标题3', description: '具体活动安排3 2019', datetime: new Date(2019, 5, 23, 16) },
            { title: '活动标题4', description: '具体活动安排4 2019', datetime: new Date(2019, 6, 15, 16) },
            { title: '活动标题5', description: '具体活动安排5 2019', datetime: new Date(2019, 5, 10, 16) },
            { title: '活动标题6', description: '具体活动安排6 2019', datetime: new Date(2019, 6, 8, 16) },
            { title: '活动标题7', description: '具体活动安排7 2019', datetime: new Date(2019, 5, 28, 16) },
            { title: '活动标题8', description: '具体活动安排8 2019具体活动安排8 2019具体活动安排8 2019具体活动安排8 2019具体活动安排8 2019具体活动安排8 2019', datetime: new Date(2019, 6, 17, 16) }
        ]
    };

}(jQuery));