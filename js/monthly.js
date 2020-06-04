(function ($) {
	$.fn.extend({
		monthly: function (options) {
			// These are overridden by options declared in footer
			//这些被页脚中声明的选项覆盖
			var defaults = {
				weekStart: '日',
				mode: '',
				xmlUrl: '',
				target: '',
				eventList: true,
				maxWidth: false,
				startHidden: false,
				showTrigger: '',
				stylePast: false,
				disablePast: false
			}

			var options = $.extend(defaults, options),
				//this指向当前调用的日历对象
				that = this,
				uniqueId = $(this).attr('id'),
				d = new Date(),
				currentMonth = d.getMonth() + 1,
				currentYear = d.getFullYear(),
				currentDay = d.getDate(),
				monthNames = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
				dayNames = ['日', '一', '二', '三', '四', '五', '六'];
			// console.log("OPtions")
			// console.log(uniqueId)
			if (options.maxWidth != false) {
				$('#' + uniqueId).css('maxWidth', options.maxWidth);
			}

			//'+y+'-'+monthNames[m - 1]+'-'+day+'当前时间



			// 判断日历加载时是否显示
			if (options.startHidden == true) {
				$('#' + uniqueId).addClass('monthly-pop').css({
					'position': 'absolute',
					'display': 'none'
				});
				$(document).on('focus', '' + options.showTrigger + '', function (e) {

					$('#' + uniqueId).show();
					e.preventDefault();
				});
				$(document).on('click', '' + options.showTrigger + ', .monthly-pop', function (e) {
					e.stopPropagation();
					e.preventDefault();
				});
				$(document).on('click', function (e) {
					$('#' + uniqueId).hide();
				});
			}

			// Add Day Of Week Titles
			// 添加星期几标题
			if (options.weekStart == '日') {
				$('#' + uniqueId).append('<div class="monthly-day-title-wrap"><div>日</div><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div></div><div class="monthly-day-wrap"></div>');
			} else if (options.weekStart == '一') {
				$('#' + uniqueId).append('<div class="monthly-day-title-wrap"><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div><div>日</div></div><div class="monthly-day-wrap"></div>');
			} else {
				// console.log('Incorrect entry for weekStart variable.')
			}

			// Add Header & event list markup
			// 添加标题和事件列表标记 绘制底部按钮
			$('#' + uniqueId).prepend('<div class="monthly-header"><div class="monthly-header-title"></div><a href="#" class="monthly-prev"></a><a href="#" class="monthly-next"></a></div>').append('');

			// How many days are in this month?
			// 判断这个月有几天
			function daysInMonth(m, y) {
				return m === 2 ? y & 3 || !(y % 25) && y & 15 ? 28 : 29 : 30 + (m + (m >> 3) & 1);
			}

			// Massive function to build the month
			// 强大的功能，打造一个月
			function setMonthly(m, y) {
				$('#' + uniqueId).data('setMonth', m).data('setYear', y);
				// $('#' + uniqueId + ' .monthly-event-list').prepend('bro.');

				// Get number of days
				// 获取天数
				var dayQty = daysInMonth(m, y),
					// Get day of the week the first day is
					// 一周中的某一天第一天是
					mZeroed = m - 1,
					firstDay = new Date(y, mZeroed, 1, 0, 0, 0, 0).getDay();

				// Remove old days
				// 删除旧日期
				$('#' + uniqueId + ' .monthly-day, #' + uniqueId + ' .monthly-day-blank').remove();
				$('#' + uniqueId + ' .monthly-event-list').empty();
				// Print out the days
				// 打印出日期
				// 如果传入模式为event 此处进行遍历给每一个天添加带有event的类名
				// 同时在事件列表框中给每一天添加了一个默认参数
				if (options.mode == 'event') {

					for (var i = 0; i < dayQty; i++) {

						var day = i + 1; // Fix 0 indexed days 修复0个索引日
						var dayNamenum = new Date(y, mZeroed, day, 0, 0, 0, 0).getDay()

						// $('#' + uniqueId + ' .monthly-day-wrap').append('<a href="javascript:viod(0)" class="monthly-day monthly-day-event" data-number="' + day + '"><div class="monthly-day-number">' + day + '</div><div class="monthly-indicator-wrap"></div></a>');
						$('#' + uniqueId + ' .monthly-day-wrap').append('<div sytle="background: rgba(0, 0, 0, 0);filter:alpha(opacity=0);" class="monthly-day monthly-day-event" data-number="' + day + '"><div class="monthly-day-number">' + day + '</div><div class="monthly-indicator-wrap"></div></div>');

					}
				} else {
					for (var i = 0; i < dayQty; i++) {
						// Fix 0 indexed days  修复0个索引日
						var day = i + 1;

						// Check if it's a day in the past
						// 检查这是不是过去的一天
						if (((day < currentDay && m === currentMonth) || y < currentYear || (m < currentMonth && y == currentYear)) && options.stylePast == true) {
							$('#' + uniqueId + ' .monthly-day-wrap').append('<a href="#" class="monthly-day monthly-day-pick monthly-past-day" data-number="' + day + '"><div class="monthly-day-number">' + day + '</div><div class="monthly-indicator-wrap"></div></a>');
						} else {
							$('#' + uniqueId + ' .monthly-day-wrap').append('<a href="#" class="monthly-day monthly-day-pick" data-number="' + day + '"><div class="monthly-day-number">' + day + '</div><div class="monthly-indicator-wrap"></div></a>');
						}
					}
				}


				// Set Today
				// 今天设置
				var setMonth = $('#' + uniqueId).data('setMonth'),
					setYear = $('#' + uniqueId).data('setYear');
				if (setMonth == currentMonth && setYear == currentYear) {
					$('#' + uniqueId + ' *[data-number="' + currentDay + '"]').addClass('monthly-today');
				}




				// Account for empty days at start
				// 开始时的空天数帐户
				if (options.weekStart == '日' && firstDay != 7) {
					for (var i = 0; i < firstDay; i++) {
						$('#' + uniqueId + ' .monthly-day-wrap').prepend('<div class="monthly-day-blank"><div class="monthly-day-number"></div></div>');
					}
				} else if (options.weekStart == '一' && firstDay != 1) {
					for (var i = 0; i < (firstDay - 1); i++) {
						$('#' + uniqueId + ' .monthly-day-wrap').prepend('<div class="monthly-day-blank" ><div class="monthly-day-number"></div></div>');
					}
				}
				// Reset button
				// 重置按钮
				if (setMonth == currentMonth && setYear == currentYear) {
					$('#' + uniqueId + ' .monthly-header-title').html(y + '-' + monthNames[m - 1]);
				} else {
					$('#' + uniqueId + ' .monthly-header-title').html(y + '-' + monthNames[m - 1] + '<a href="#" class="monthly-reset" title="Back To This Month"></a> ');
				}
				//Account for empty days at end
				// 结束时的空天数帐户
				var numdays = $('#' + uniqueId + ' .monthly-day').length,
					numempty = $('#' + uniqueId + ' .monthly-day-blank').length,
					totaldays = numdays + numempty,
					roundup = Math.ceil(totaldays / 7) * 7,
					daysdiff = roundup - totaldays;
				if (totaldays % 7 != 0) {
					for (var i = 0; i < daysdiff; i++) {
						$('#' + uniqueId + ' .monthly-day-wrap').append('<div class="monthly-day-blank"><div class="monthly-day-number"></div></div>');
					}
				}

				// Events
				// 事件
				if (options.mode == 'event') {
					//Remove previous events
					//删除以前的事件
					//	Add Events
					//添加事件

					// 	$.get('' + options.xmlUrl + '',
					// 	$.get(baseUrl + "sys/learning/list", function (d) {
					// 		// console.log("-------activeList--------")
					// 		// console.log(activityList)
					// 		$(d).find('event').each(function () {
					// 			// Year [0]   Month [1]   Day [2]

					// 			var fullstartDate = $(this).find('startdate').text(),
					// 				startArr = fullstartDate.split("-"),
					// 				startYear = startArr[0],
					// 				startMonth = parseInt(startArr[1], 10),
					// 				startDay = parseInt(startArr[2], 10),
					// 				fullendDate = $(this).find('enddate').text(),
					// 				endArr = fullendDate.split("-"),
					// 				endYear = endArr[0],
					// 				endMonth = parseInt(endArr[1], 10),
					// 				endDay = parseInt(endArr[2], 10),
					// 				eventURL = $(this).find('url').text(),
					// 				eventTitle = $(this).find('name').text(),
					// 				eventColor = $(this).find('color').text(),
					// 				eventId = $(this).find('id').text(),
					// 				startTime = $(this).find('starttime').text(),
					// 				startSplit = startTime.split(":");
					// 			startPeriod = 'AM',
					// 				endTime = $(this).find('endtime').text(),
					// 				endSplit = endTime.split(":");
					// 			endPeriod = 'AM',
					// 				eventLink = '';
					// 			// console.log("zzzz")
					// 			// console.log(startArr)
					// 			/* Convert times to 12 hour & determine AM or PM */
					// 			// 将时间转换为12小时并确定上午或下午
					// 			if (parseInt(startSplit[0]) >= 12) {
					// 				var startTime = (startSplit[0] - 12) + ':' + startSplit[1] + '';
					// 				var startPeriod = 'PM'
					// 			}


					// 			if (parseInt(startTime) == 0) {
					// 				var startTime = '12:' + startSplit[1] + '';
					// 			}

					// 			if (parseInt(endSplit[0]) >= 12) {
					// 				var endTime = (endSplit[0] - 12) + ':' + endSplit[1] + '';
					// 				var endPeriod = 'PM'
					// 			}
					// 			if (parseInt(endTime) == 0) {
					// 				var endTime = '12:' + endSplit[1] + '';
					// 			}
					// 			if (eventURL) {
					// 				var eventLink = 'href="' + eventURL + '"';
					// 			}

					// 			// function to print out list for multi day events
					// 			// 用于打印多天事件列表的函数
					// 			function multidaylist() {
					// 				$('#' + uniqueId + ' .monthly-list-item[data-number="' + i + '"]').addClass('item-has-event').append('<a href="' + eventURL + '" class="listed-event"  data-eventid="' + eventId + '" style="background:' + eventColor + '" title="' + eventTitle + '">' + eventTitle + '<div><div class="monthly-list-time-start">' + startTime + ' ' + startPeriod + '</div><div class="monthly-list-time-end">' + endTime + ' ' + endPeriod + '</div></div></a>');
					// 			}


					// 			// If event is one day & within month
					// 			// 如果事件是一天 & 一个月
					// 			if (!fullendDate && startMonth == setMonth && startYear == setYear) {
					// 				// Add Indicators
					// 				// 添加指示器
					// 				$('#' + uniqueId + ' *[data-number="' + startDay + '"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator"  data-eventid="' + eventId + '" style="background:' + eventColor + '" title="' + eventTitle + '">' + eventTitle + '</div>');
					// 				// Print out event list for single day event
					// 				// 打印单日事件的事件列表
					// 				$('#' + uniqueId + ' .monthly-list-item[data-number="' + startDay + '"]').addClass('item-has-event').append('<a href="' + eventURL + '" class="listed-event"  data-eventid="' + eventId + '" style="background:' + eventColor + '" title="' + eventTitle + '">' + eventTitle + '<div><div class="monthly-list-time-start">' + startTime + ' ' + startPeriod + '</div><div class="monthly-list-time-end">' + endTime + ' ' + endPeriod + '</div></div></a>');


					// 				// If event is multi day & within month
					// 				// 如果事件是多天且在月内
					// 			} else if (startMonth == setMonth && startYear == setYear && endMonth == setMonth && endYear == setYear) {
					// 				for (var i = parseInt(startDay); i <= parseInt(endDay); i++) {
					// 					// If first day, add title 
					// 					// 如果是第一天，请添加标题
					// 					if (i == parseInt(startDay)) {
					// 						$('#' + uniqueId + ' *[data-number="' + i + '"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="' + eventId + '" style="background:' + eventColor + '" title="' + eventTitle + '">' + eventTitle + '</div>');
					// 					} else {
					// 						$('#' + uniqueId + ' *[data-number="' + i + '"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="' + eventId + '" style="background:' + eventColor + '" title="' + eventTitle + '"></div>');
					// 					}
					// 					multidaylist();
					// 				}

					// 				// If event is multi day, starts in prev month, and ends in current month
					// 				// 如果事件为多天，则从上个月开始，到本月结束
					// 			} else if ((endMonth == setMonth && endYear == setYear) && ((startMonth < setMonth && startYear == setYear) || (startYear < setYear))) {
					// 				for (var i = 0; i <= parseInt(endDay); i++) {
					// 					// If first day, add title 
					// 					// 如果是第一天，请添加标题
					// 					if (i == 1) {
					// 						$('#' + uniqueId + ' *[data-number="' + i + '"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="' + eventId + '" style="background:' + eventColor + '" title="' + eventTitle + '">' + eventTitle + '</div>');
					// 					} else {
					// 						$('#' + uniqueId + ' *[data-number="' + i + '"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="' + eventId + '" style="background:' + eventColor + '" title="' + eventTitle + '"></div>');
					// 					}
					// 					multidaylist();
					// 				}

					// 				// If event is multi day, starts in this month, but ends in next
					// 				// 如果事件是多天的，则在本月开始，但在下一天结束
					// 			} else if ((startMonth == setMonth && startYear == setYear) && ((endMonth > setMonth && endYear == setYear) || (endYear > setYear))) {
					// 				for (var i = parseInt(startDay); i <= dayQty; i++) {
					// 					// If first day, add title 
					// 					// 如果是第一天，请添加标题
					// 					if (i == parseInt(startDay)) {
					// 						$('#' + uniqueId + ' *[data-number="' + i + '"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="' + eventId + '" style="background:' + eventColor + '" title="' + eventTitle + '">' + eventTitle + '</div>');
					// 					} else {
					// 						$('#' + uniqueId + ' *[data-number="' + i + '"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="' + eventId + '" style="background:' + eventColor + '" title="' + eventTitle + '"></div>');
					// 					}
					// 					multidaylist();
					// 				}

					// 				// If event is multi day, starts in a prev month, ends in a future month
					// 				// 如果事件是多天的，则从上一个月开始，到下一个月结束
					// 			} else if (((startMonth < setMonth && startYear == setYear) || (startYear < setYear)) && ((endMonth > setMonth && endYear == setYear) || (endYear > setYear))) {
					// 				for (var i = 0; i <= dayQty; i++) {
					// 					// If first day, add title 
					// 					// 如果是第一天，请添加标题
					// 					if (i == 1) {
					// 						$('#' + uniqueId + ' *[data-number="' + i + '"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="' + eventId + '" style="background:' + eventColor + '" title="' + eventTitle + '">' + eventTitle + '</div>');
					// 					} else {
					// 						$('#' + uniqueId + ' *[data-number="' + i + '"] .monthly-indicator-wrap').append('<div class="monthly-event-indicator" data-eventid="' + eventId + '" style="background:' + eventColor + '" title="' + eventTitle + '"></div>');
					// 					}
					// 					multidaylist();
					// 				}



					// 			}

					// 		});
					// 	})

					// )

				}

			}

			// Set the calendar the first time
			// 第一次设置日历
			setMonthly(currentMonth, currentYear);

			// Function to go back to the month view
			// 返回月视图的函数
			function viewToggleButton() {
				if ($('#' + uniqueId + ' .monthly-event-list').is(":visible")) {
					$('#' + uniqueId + ' .monthly-cal').remove();
					$('#' + uniqueId + ' .monthly-event-list').prepend('<a href="#" class="monthly-cal" title="Back To Month View"><div></div></a>');
				}
			}

			// Advance months
			// 提前个月
			$(document.body).on('click', '#' + uniqueId + ' .monthly-next', function (e) {
				var setMonth = $('#' + uniqueId).data('setMonth'),
					setYear = $('#' + uniqueId).data('setYear');
				if (setMonth == 12) {
					var newMonth = 1,
						newYear = setYear + 1;
					setMonthly(newMonth, newYear);
				} else {
					var newMonth = setMonth + 1,
						newYear = setYear;
					setMonthly(newMonth, newYear);
				}
				//当点击下月按钮时自动触发更新数据函数
				viewToggleButton();
				e.preventDefault();
			});

			// Go back in months
			// 几个月后回来
			$(document.body).on('click', '#' + uniqueId + ' .monthly-prev', function (e) {
				var setMonth = $('#' + uniqueId).data('setMonth'),
					setYear = $('#' + uniqueId).data('setYear');
				if (setMonth == 1) {
					var newMonth = 12,
						newYear = setYear - 1;
					setMonthly(newMonth, newYear);
				} else {
					var newMonth = setMonth - 1,
						newYear = setYear;
					setMonthly(newMonth, newYear);
				}
				viewToggleButton();
				e.preventDefault();
			});


			//添加日历按钮事件
			$(".monthly-prev").click(function (e) {
				// console.log("prev")
				calendar_load()
			})
			$(".monthly-next").click(function () {
				// console.log("next")
				calendar_load()
			})


			// Reset Month
			// 重置月份
			$(document.body).on('click', '#' + uniqueId + ' .monthly-reset', function (e) {
				setMonthly(currentMonth, currentYear);
				viewToggleButton();
				e.preventDefault();
				e.stopPropagation();
			});

			// Back to month view
			// 返回月视图
			$(document.body).on('click', '#' + uniqueId + ' .monthly-cal', function (e) {
				$(this).remove();
				$('#' + uniqueId + ' .monthly-day-wrap, #' + uniqueId + ' .monthly-day-title-wrap').css({
					// 'filter':'blur(0px)',
					// 'webkitFilter':'blur(0px)'
				});
				$('#' + uniqueId + ' .monthly-event-list').css('transform', 'scale(0)').delay('800').hide();
				e.preventDefault();
			});

			// Click A Day   mouseover
			// 单击 鼠标悬停
			// $(document.body).on('mouseover', '#' + uniqueId + ' a.monthly-day', function (e) {
			// 	// If events, show events list
			// 	if (options.mode == 'event' && options.eventList == true) {
			// 		// var whichDay = $(this).data('number');
			// 		// $('#' + uniqueId + ' .monthly-day-wrap, #' + uniqueId + ' .monthly-day-title-wrap').css({
			// 		// 	'filter':'blur(10px)',
			// 		// 	'webkitFilter':'blur(10px)'
			// 		// });
			// 		// $('#' + uniqueId + ' .monthly-event-list').show();
			// 		// $('#' + uniqueId + ' .monthly-event-list').css('transform');
			// 		// $('#' + uniqueId + ' .monthly-event-list').css('transform', 'scale(1)');
			// 		// $('#' + uniqueId + ' .monthly-list-item[data-number="' + whichDay + '"]').show();

			// 		// var myElement = document.getElementById(uniqueId + 'day' + whichDay);
			// 		// var topPos = myElement.offsetTop;
			// 		//document.getElementByClassname('scrolling_div').scrollTop = topPos;
			// 		// $('#' + uniqueId + ' .monthly-event-list').scrollTop(topPos);
			// 		// viewToggleButton();
			// 		// If picker, pick date
			// 	} else if (options.mode == 'picker') {
			// 		var whichDay = $(this).data('number'),
			// 			setMonth = $('#' + uniqueId).data('setMonth'),
			// 			setYear = $('#' + uniqueId).data('setYear');

			// 		// Should days in the past be disabled?
			// 		if ($(this).hasClass('monthly-past-day') && options.disablePast == true) {
			// 			// If so, don't do anything.
			// 			e.preventDefault();
			// 		} else {
			// 			// Otherwise, select the date ...
			// 			$('' + options.target + '').val(setMonth + '/' + whichDay + '/' + setYear);
			// 			// ... and then hide the calendar if it started that way
			// 			if (options.startHidden == true) {
			// 				$('#' + uniqueId).hide();
			// 			}
			// 		}
			// 	}
			// 	e.preventDefault();
			// });

			// Clicking an event within the list
			// 单击列表中的事件
			$(document.body).on('click', '#' + uniqueId + ' .listed-event', function (e) {
				var href = $(this).attr('href');
				// If there isn't a link, don't go anywhere
				// 如果没有链接，不要去任何地方
				if (!href) {
					e.preventDefault();
				}
			});

		}
	});

})(jQuery);
var isMyCalenderLoad = false
//设置中英文切换静态资源变量默认中文
if (!sessionStorage.getItem("CNtoEn")) {
	sessionStorage.setItem("CNtoEn", "1")

}
var languageStatus = sessionStorage.getItem("CNtoEn")
var BrowserVersion = IEVersion()
//首次加载函数
calendar_load()

// 获取活动列表数据

function calendar_load() {
	$.ajax({
		type: "POST",
		url: baseUrl + "sys/learning/list",
		data: {
			language: sessionStorage.getItem("CNtoEn"),
			currpage: 1,
			pageSize: 100,
		},
		success: function (res) {
			// console.log("日历信息")
			// console.log(res);
			if(res.code == 0){
				var activityList = res.page.list;

				//在拿到请求后调用日历插件
				if (!isMyCalenderLoad) {
					$('#mycalendar').monthly({
						mode: 'event',
	
					});
					isMyCalenderLoad = true
				}
	
				//处理数据函数
				calendar_data(activityList)
	
			}
		},
		error: function (res) {
			// console.log("res")
			// console.log(res)
		}
	})


}

//日历设置事件函数
function calendar_data(studyData) {
	//请求通知公告的接口
	$.ajax({
		url: baseUrl + 'sys/notice/list',
		type: 'POST',
		dataType: 'json',
		data: {
			language: sessionStorage.getItem("CNtoEn"),
			'current': 1,
			'pageSize': 100,
		},
		success: function (res) {
			if (res.code == 0) {
				// console.log("NoticeList")
				// console.log(res)
				if (res.page.list.length > 0) {
					var data = res.page.list
					data.forEach(function(item,index){
							item.NoticeList = true 
					})
					// console.log("通知公告data")
					// console.log(data)
					var concatStudy = studyData.concat(data)
					// console.log("合并后的数组")
					// console.log(concatStudy)

					//存储日历数据
					var calendarObj = {}
					// console.log("studyData")
					// console.log(studyData)
					concatStudy.forEach(function (item, index) {

							if(item.date != null){
								var key = item.date.replace(/\s[\x00-\xff]*/g, '')
							}
						if (!calendarObj[key]) {
							calendarObj[key] = []
						}
						calendarObj[key].push({
							"content": item.content,
							"title": item.title == undefined ? item.name : item.title,
							"type":item.type,
							"id": item.id,
							"standby": item.standby,
							"standby1":item.standby1,
							"NoticeList":item.NoticeList == true ? item.NoticeList : false ,
						})

					})

					//渲染日历函数
					calenderRender(calendarObj)








				}else {
					studyData.forEach(function (item, index) {
						var key = item.date.replace(/\s[\x00-\xff]*/g, '')
						if (!calendarObj[key]) {
							calendarObj[key] = []
						}
						calendarObj[key].push({
							"content": item.content,
							"type":item.type,
							"standby1":item.standby1,
							"title": item.title,
							"id": item.id,
							"standby": item.standby,
							"NoticeList":item.NoticeList == true ? item.NoticeList : false ,
						})
	
					})
	
					//渲染日历函数
					calenderRender(calendarObj)

				}
			}else{
				studyData.forEach(function (item, index) {
					var key = item.date.replace(/\s[\x00-\xff]*/g, '')
					if (!calendarObj[key]) {
						calendarObj[key] = []
					}
					calendarObj[key].push({
						"content": item.content,
						"title": item.title,
						"type":item.type,
						"standby1":item.standby1,
						"id": item.id,
						"standby": item.standby,
						"NoticeList":item.NoticeList == true ? item.NoticeList : false ,
					})

				})

				//渲染日历函数
				calenderRender(calendarObj)




			}
		},
		err: function (err) {
			// console.log("通知公告请求信息错误")
			// console.log(err)
		}
	})



}
var DayLeave = false

//渲染日历函数
function calenderRender(data) {
	// console.log("日历整体数据")
	// console.log(data)

	//获取当前显示日期
	var showYear = $(".monthly-header-title").text().split("-")[0]
	var showMonth = $(".monthly-header-title").text().split("-")[1]
	showMonth = showMonth < 10 ? "0" + showMonth : showMonth
	showMonth = showMonth.trim()
	var showYM = showYear + "-" + showMonth

	//获取展示框
	var showList = $(".monthly-event-list .monthly-event-list-title")
	var showBox = $(".monthly-event-list")
	for (key in data) {

		// 判断日期是否是当前显示日期
		var currYM = key.slice(0, 7)

		//判断哪天有事件设置样式
		var currDay = Number(key.split("-")[2])

		if (showYM == currYM) {

			$(".monthly-day-event").eq(currDay - 1).css({
				"background": "url(./img/action_date.jpg)"
			})

			//为有事件的日期增加显示详情效果
			$(".monthly-day-event").eq(currDay - 1).mouseenter(function (event) {
					// // console.log(event)
					// 在使用绝对定位时，pageY pageX 在IE会出现异常，现象是本应该相对于页面定位，但他却变成对外容器的定位了
					// // console.log(event.pageY)
					// // console.log(event.pageX)
					DayLeave = false
					clearTimeout(window.timer)
					//遍历当天的事件给提示框添加数据
					var showListContent = ""
					//提示框内容清空
					$(showList).empty()
					// 获取到当前日期 用这个日期数据中匹配数据
					// 获取当天的年份
					var currY = $(".monthly-header-title").text().split("-")[0]
					// 获取当前的月份
					var currM = $(".monthly-header-title").text().split("-")[1].trim()
					currM = currM < 10 ? "0" + currM : currM
					// 获取事件是哪天
					var currD = $(this).text()
					currD = currD < 10 ? "0" + currD : currD
					// 获取当前事件的日期和数据中的日期匹配渲染数据
					var currKey = currY + "-" + currM + "-" + currD
					if (sessionStorage.getItem("CNtoEn") == 1) {
						$('h2[name = mainEvent]').text("事件概况")
					} else {
						$('h2[name = mainEvent]').text("Overview of events")
					}
					data[currKey].forEach(function (item, index) {
						// console.log("日历数据")
						// console.log(item)
						var content = ""
						if (item.standby != null) {
							// content = item.standby.replace(/&amp;nbsp;/g, "&nbsp;")
							content = item.standby.replace(/&amp;nbsp;/g, "&#10;")
							// content = content.substr(0, 50)
							// content += "..."
						}

						showListContent = '<div class="monthly-event-list-item" sytle="background: rgba(0, 0, 0, 0);filter:alpha(opacity=0);">'
						if(item.NoticeList) {
							showListContent += '<a href="./subPage/tzgg_info.html?id=' + item.id + '">'
						} else {
							if(item.type == 268){
								showListContent += '<a href="./subPage/sxhyInfo.html?id=' + item.standby1 + '">'
							}else {
								showListContent += '<a href="./subPage/xsjz_info.html?id=' + item.id + '">'
							}
							
						}	
						
						showListContent += '<h2>' + item.title + '</h2>'
						showListContent += '<span>' + content + '</span>'
						showListContent += '</a></div>'
						$(showList).append($(showListContent))
					})
					//显示提示框
					//做兼容性处理  在ie里面page不好用，
					if(BrowserVersion != -1 && BrowserVersion > 9){
						$(showBox).css({
							"top": event.clientY + 15,
							"left": event.clientX + 15,
							display: "block",
							"box-shadow": "-30px 0 30px rgba(0,0,0,.07)"
						})
					} else {
						$(showBox).css({
							"top": event.pageY + 15,
							"left": event.pageX + 15,
							display: "block",
							"box-shadow": "-30px 0 30px rgba(0,0,0,.07)"
						})
					}
				

					//给提示框添加当天的事件内容
				}) //设置鼠标离开Day时的逻辑
				.mouseleave(function () {
					clearTimeout(window.timer)
					//设置定时器判断在500毫秒内是否移动到了显示框中，如果鼠标在显示框内不隐藏
						 window.timer = setTimeout(function () {
						if (!DayLeave) {
							$(showBox).css({
								display: "none"
							})
						}
					}, 500)

				})

			//当鼠标移入显示框时设置守卫变量为true
			$(showBox).mouseenter(function () {
				DayLeave = true
			}).mouseleave(function () {
				//当鼠标离开时还原守卫初始值

				DayLeave = false
				$(showBox).hide()

			})

		}



	}
}