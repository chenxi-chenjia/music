$(function(){
	// 基础函数以及变量的定义
	$("#music").css("height",$(window).height())
	function edittime(num){
			var v= Math.floor(num%60);
			v=(v<10)?("0"+v):v;
			var m=Math.floor(num/60);
			return m+":"+v;
		}
	var audio=$("audio").get(0);
	var dot=$("#music .footer .schedule .currentdot");
	var t=$("#music .footer .schedule .current");
	var tw=t.width();
	var tx=t.offset().left;
	var r=dot.width()/2;
	var rx=dot.position().left;
	var tat;
	var now=0;
	var cutway=$("#music .footer .control .left");
	var way=$("#music .footer .control .now").attr("type");
	var waynow=0;
	var imgnow=0;
	var musict;
	// 音乐波放列表
	var ml=[
		{
			name:"演员",
			src:"演员.mp3",
			autor:"薛之谦",
			background:["1","2","3","4","5","6"],
			lrc:"[00:00.31] 演员 - 薛之谦[00:08.61] 词曲：薛之谦[00:21.12] 简单点说话的方式简单点[00:30.20] 递进的情绪请省略[00:33.64] 你又不是个演员[00:36.38] 别设计那些情节[00:41.93] 没意见我只想看看你怎么圆[00:51.54] 你难过的太表面 像没天赋的演员[00:57.15] 观众一眼能看见[01:02.22] 该配合你演出的我演视而不见[01:07.68] 在逼一个最爱你的人即兴表演[01:12.90] 什么时候我们开始收起了底线[01:18.02] 顺应时代的改变看那些拙劣的表演[01:23.42] 可你曾经那么爱我干嘛演出细节[01:28.63] 我该变成什么样子才能延缓厌倦[01:33.87] 原来当爱放下防备后的这些那些[01:39.37] 才是考验[01:44.60] 没意见你想怎样我都随便[01:54.53] 你演技也有限[01:57.58] 又不用说感言[02:00.15] 分开就平淡些[02:05.16] 该配合你演出的我演视而不见[02:10.53] 别逼一个最爱你的人即兴表演[02:15.81] 什么时候我们开始没有了底线[02:21.00] 顺着别人的谎言被动就不显得可怜[02:26.42] 可你曾经那么爱我干嘛演出细节[02:31.52] 我该变成什么样子才能配合出演[02:36.72] 原来当爱放下防备后的这些那些[02:41.86] 都有个期限[02:47.56] 其实台下的观众就我一个[02:53.04] 其实我也看出你有点不舍[02:58.34] 场景也习惯我们来回拉扯[03:02.93] 还计较着什么[03:08.71] 其实说分不开的也不见得[03:14.03] 其实感情最怕的就是拖着[03:19.21] 越演到重场戏越哭不出了[03:24.07] 是否还值得[03:29.07] 该配合你演出的我尽力在表演[03:34.39] 像情感节目里的嘉宾任人挑选[03:39.68] 如果还能看出我有爱你的那面[03:44.82] 请剪掉那些情节让我看上去体面[03:50.04] 可你曾经那么爱我干嘛演出细节[03:55.31] 不在意的样子是我最后的表演[04:01.05] 是因为爱你我才选择表演这种成全"
		},
		{
			name:"海阔天空",
			src:"海阔天空.mp3",
			autor:"Beyoung",
			background:["1","2","3","4"],
			lrc:"[00:02.12]黄家驹--海阔天空[00:18.56]今天我寒夜里看雪飘过[00:25.06]怀着冷却了的心窝飘远方[00:30.88]风雨里追赶 雾里分不清影踪[00:37.06]天空海阔你与我 可会变[00:43.31]多少次迎着冷眼与嘲笑[00:49.88]从没有放弃过心中的理想[00:55.88]一刹那恍惚 若有所失的感觉[01:02.00]不知不觉已变淡 心里爱[01:08.75]原谅我这一生不羁放纵爱自由[01:15.75]也会怕有一天会跌倒[01:21.94]背弃了理想谁人都可以[01:28.25]哪会怕有一天只你共我[01:34.80][01:42.75]今天我寒夜里看雪飘过[01:49.25]怀着冷却了的心窝飘远方[01:55.07]风雨里追赶 雾里分不清影踪[02:01.32]天空海阔你与我 可会变[02:07.44]原谅我这一生不羁放纵爱自由[02:15.01]也会怕有一天会跌倒[02:20.31][02:21.19]背弃了理想谁人都可以[02:27.44]哪会怕有一天只你共我[02:32.99][03:08.38]仍然自由自我 永远高唱我歌[03:15.07]走遍千里[03:18.68][03:19.70]原谅我这一生不羁放纵爱自由[03:25.81][03:26.70]也会怕有一天会跌倒[03:31.62][03:32.94]背弃了理想谁人都可以[03:38.37][03:39.13]哪会怕有一天只你共我[03:42.93][03:45.57]背弃了理想谁人都可以[03:51.76]哪会怕有一天只你共我[03:56.01]原谅我这一生不羁放纵爱自由[04:04.20]也会怕有一天会跌倒[04:09.00][04:10.45]背弃了理想谁人都可以[04:16.64]哪会怕有一天只你共我"
		},
		{
			name:"客官不可以",
			src:"客官不可以.mp3",
			autor:"徐良，小凌",
			background:["1","2","3","4"],
			lrc:"[00:01.13] 歌曲:客官 不可以[00:04.15] 歌手:徐良L&小凌[00:12.35] 献给静儿,愿你天天开心...[02:21.84] [00:19.22] 小凌：[02:22.37] [00:20.71] 客官 不可以[02:23.82] [00:22.52] 你靠的越来越近[02:26.32] [00:25.06] 你眼睛在看哪里[02:28.89] [00:27.72] 还假装那么冷静[02:31.49] [00:30.03]中文歌词库 www.CnLyric.com[02:32.02] [00:30.89] 客官 不可以[02:33.90] [00:32.67] 都怪我生的美丽[02:36.41] [00:35.14] 气质又那么多情[02:38.96] [00:37.71] 小心我真的生气[02:41.22] [00:39.85][02:01.02] [00:40.57] 徐良L:[02:02.64] [00:41.78] waiter 你是不是弄错了[02:05.12] [00:44.27] 好像我没有点这个煲[02:07.65] [00:46.81] 又矮又胖又找不到腰[02:10.20] [00:49.29] 虽说有点可爱味道[02:12.69] [00:51.84] 小姐你是谁家的城堡[02:15.22] [00:54.35] 请你靠边坐坐好不好[02:17.77] [00:56.90] 挡到电视真的看不到[02:20.30] [00:59.42] 你说的话莫名其妙[02:22.21] [01:01.08][01:01.37] 小凌：[03:02.42] [02:42.14] [01:01.69] 你现在哪里[03:04.25] [02:44.05] [01:02.98] 我每天都在想你[03:06.76] [02:46.53] [01:05.44] 想念你身旁空气[03:09.27] [02:49.14] [01:08.01] 想念你坏坏眼睛[03:12.32] [02:52.12] [01:11.05] 你现在哪里[03:14.29] [02:54.11] [01:13.14] 我每天都在回忆[03:16.83] [02:56.62] [01:15.52] 回忆搞笑的相遇[03:19.38] [02:59.18] [01:18.11] 回忆悲伤的结局[03:22.07] [03:01.66] [01:20.41][01:21.50] 小凌：[01:22.23] 客官 客官 客官 不可以[01:24.71] 客官 客官 客官 你在哪里[01:27.17] 客官 客官 客官 我想你[01:29.86][01:31.52] 徐良：[01:32.25] 小姐 小姐 小姐 不可以[01:34.76] 小姐 小姐 小姐 别伤心[01:37.31] 小姐 小姐 小姐 对不起[01:40.46]"
		},
		{
			name:"年轮",
			src:"年轮.mp3",
			autor:"江碧晨",
			background:["1","2","3","4","5"],
			lrc:"[00:00.00] 年轮[00:02.00] 电视剧《花千骨》插曲[00:04.00] 词曲：汪苏泷[00:08.00] 演唱：张碧晨[00:10.00] 歌词编辑：果果[00:12.00] QQ:765708831 [00:14.00] 中文歌词库 www.cnLyric.com[00:18.36] 圆圈勾勒成指纹[00:21.44] 印在我的嘴唇[00:24.64] 回忆苦涩的吻痕[00:27.83] 是树根[00:31.23] 春去秋来的茂盛[00:34.43] 却遮住了黄昏[00:37.83] 寒夜剩我一个人[00:40.86] 等清晨[00:44.08] 世间最毒的仇恨[00:47.39] 是有缘却无分[00:50.63] 可惜你从未心疼[00:53.85] 我的笨[00:57.12] 荒草丛生的青春[01:00.32] 倒也过的安稳[01:03.47] 代替你陪着我的[01:06.74] 是年轮[01:09.35] 数着一圈圈年轮[01:12.66] 我认真[01:14.23] 将心事都封存[01:17.37] 密密麻麻是我的自尊[01:22.31] 修改一次次离分[01:25.67] 我承认[01:27.22] 曾幻想过永恒[01:30.27] 可惜从没人陪我演这剧本[01:45.86] 圆圈勾勒成指纹[01:48.91] 印在我的嘴唇[01:52.29] 回忆苦涩的吻痕[01:55.38] 是树根[01:58.77] 春去秋来的茂盛[02:02.04] 却遮住了黄昏[02:05.41] 寒夜剩我一个人[02:08.43] 等清晨[02:11.75] 世间最毒的仇恨[02:14.96] 是有缘却无分[02:18.32] 可惜你从未心疼[02:21.32] 我的笨[02:24.72] 荒草丛生的青春[02:27.95] 倒也过的安稳[02:31.11] 代替你陪着我的[02:34.41] 是年轮[02:36.78] 数着一圈圈年轮[02:40.41] 我认真[02:41.83] 将心事都封存[02:44.90] 密密麻麻是我的自尊[02:49.81] 修改一次次离分[02:53.19] 我承认[02:54.80] 曾幻想过永恒[02:57.83] 可惜从没人陪我演这剧本[03:26.79] 一圈圈年轮[03:29.04] 我认真[03:30.40] 将心事都封存[03:33.56] 密密麻麻是我的自尊[03:38.33] 修改一次次离分[03:41.80] 我承认[03:43.50] 曾幻想过永恒[03:46.51] 可惜从没人陪我演这剧本[03:53.31] 可惜从没人陪我演这剧本"
		},
		{
			name:"七里香",
			src:"七里香.mp3",
			autor:"周杰伦",
			background:["1","2","3","4","5","6"],
			lrc:"[00:08.28]作词：方文山　作曲：周杰伦[00:21.33]制作：MP3.5nd.com[00:27.43]窗外的麻雀 在电线杆上多嘴[00:34.33]你说这一句 很有夏天的感觉[00:40.98]手中的铅笔 在纸上来来回回[00:47.30]我用几行字形容你是我的谁[00:54.03]秋刀鱼的滋味 猫跟你都想了解[01:01.10]初恋的香味就这样被我们寻回[01:07.40]那温暖的阳光 象刚摘的鲜艳草莓[01:14.14]你说你舍不得吃掉这一种感觉[02:14.66][03:35.01][02:41.25][01:47.47][01:20.45]雨下整夜 我的爱溢出就象雨水[03:41.68][02:47.85][01:27.24]院子落叶 跟我的思念厚厚一叠[03:48.30][02:54.55][01:33.92]几句是非 也无法将我的热情冷却[03:55.90][03:02.15][01:41.51]你出现在我诗的每一页[03:07.79][04:02.36]整夜 我的爱溢出就象雨水[04:08.52][01:54.12]窗台蝴蝶 象诗里纷飞的美丽章节[04:15.47][02:00.84]我接着写 把永远爱你写进诗的结尾[04:22.77][02:08.35]你是我唯一想要的了解[04:29.28][03:08.51]那饱满的稻穗 幸福了这个季节[03:15.85]而你的脸颊象田里熟透的蕃茄[03:21.87]你突然对我说 七里香的名字很美[03:28.56]我此刻却只想亲吻你倔强的嘴"
		},
		{
			name:"天后",
			src:"天后.mp3",
			autor:"陈势安",
			background:["1","2","3","4","5","6"],
			lrc:"[00:02.00] 陈势安 - 天后[00:09.00] 词：彭学斌 曲：彭学斌[00:14.00]中文歌词库 www.CnLyric.com[00:23.87] 终于找到借口趁着醉意上心头[00:30.17] 表达我所有感受[00:34.33] 寂寞渐浓沉默留在舞池角落[00:40.98] 你说的太少或太多[00:44.28] 都会让人更惶恐[00:48.06] 谁任由谁放纵谁会先让出自由[00:54.20] 最后一定总是我[00:58.18] 双脚悬空在你冷酷热情间游走[01:04.75] 被侵占所有才要笑着接受[01:10.14] 我嫉妒你的爱气势如虹[01:15.98] 像个人气高居不下的天后[01:22.08] 你要的不是我而是一种虚荣[01:27.95] 有人疼才显得多么出众[01:34.04] 我陷入盲目狂恋的宽容[01:39.99] 成全了你万众宠爱的天后[01:45.93] 若爱只剩诱惑只剩彼此忍受[01:52.01] 别再互相折磨[01:56.94] 因为我们都有错[02:01.46][02:14.64] 推开苍白的手推开苍白的厮守[02:21.16] 管你有多么失措[02:24.61] 别再叫我心软是最致命的脆弱[02:31.84] 我明明都懂却仍拼死效忠[02:37.17] 我嫉妒你的爱气势如虹[02:43.02] 像个人气高居不下的天后[02:49.00] 你要的不是我而是一种虚荣[02:54.99] 有人疼才显得多么出众[03:00.89] 我陷入盲目狂恋的宽容[03:06.98] 成全了你万众宠爱的天后[03:13.01] 若爱只剩诱惑只剩彼此忍受[03:19.00] 别再互相折磨[03:24.01] 因为我们都有错[03:28.77][03:48.93] 如果有一天爱不再迷惑[03:54.98] 足够去看清所有是非对错[04:00.92] 直到那个时候你在我的心中[04:06.84] 将不再被歌颂把你当作天后[04:19.61] 不会再是我[04:23.80]"
		},
		{
			name:"下一秒",
			src:"下一秒.mp3",
			autor:"江碧晨",
			background:["1","2","3","4","5"],
			lrc:"[00:00.01]下一秒 - 张碧晨[00:02.75][00:06.60]作词：汪苏泷[00:10.37]作曲：汪苏泷[00:12.17][00:13.11]好想能看到[00:16.15]你嘴角微笑[00:19.12]最好在下一秒[00:25.37]好想能听到[00:28.55]你轻声歌唱[00:31.57]最好在下一秒[00:36.79]纯白棒球帽[00:41.09]墨绿色衣角[00:43.78]时间静止的美好[00:48.85][00:50.01]默契发生在每个下一秒[00:56.07]爱上同一种口味的蛋糕[01:02.20]不约而同哼唱一段曲调[01:08.38]喜欢这样看你傻傻的笑[01:14.70]好想能这样[01:17.67]就白头到老[01:20.70]最好从下一秒[01:30.09][01:39.56]好想能看到[01:42.26]你嘴角微笑[01:45.30]最好在下一秒[01:51.36]好想能听到[01:54.44]你轻声歌唱[01:57.55]最好在下一秒[02:03.95]纯白棒球帽[02:06.77]墨绿色衣角[02:09.85]时间静止的美好[02:15.53][02:16.32]默契发生在每个下一秒[02:22.21]爱上同一种口味的蛋糕[02:28.33]不约而同哼唱一段曲调[02:34.57]喜欢这样看你傻傻的笑[02:40.64]好想能这样[02:43.61]就白头到老[02:46.79]最好从下一秒[02:52.98]最好从下一秒[02:58.74]歌词编辑：文超[03:00.63]QQ：835572916[03:05.36]我爱歌词网www.5ilrc.com[03:08.36][03:10.31]"
		}
	];
////////////////////////////////////////////////////////////
	// 背景图片改变
	function mbgchange(){
		$("#music .imgload").empty();
		$.each(ml[now].background,function(i,v){
			var img=$("<img>");
			img.attr("src","img/"+ml[now].autor+v+".jpg").appendTo("#music .imgload");
			if(i===0){
				img.addClass("show");
			}
		})
	}
	function mgmove(){
		var imgnext=imgnow+1;
		if(imgnext>=ml[now].background.length){
			imgnext=0;
		};
		$(".imgload").find(".show").removeClass("show").end().find("img").eq(imgnext).addClass("show");
		imgnow=imgnext;
	}
	var migst=setInterval(mgmove,10000)
	audio.oncanplay = function(){
		tat=audio.duration;
		$("#music .footer .duration").text(edittime(tat));
		range(ml,now);
		$("#music>img").eq(0).css("opacity",1).attr("src","img/"+ml[now].autor+"1.jpg");
		$("#music .footer .mlist .top span").text(ml.length);
		$("#music .content h2").text(ml[now].name);
		$("#music .content h4").text(ml[now].autor);
		lrcjl();
		mbgchange();
	}
	// 播放暂停事件
	audio.onplay = function(){
		$("#music .footer .play").css("display","none");
		$("#music .footer .pause").css("display","block");
	}
	audio.onpause = function(){
		$("#music .footer .pause").css("display","none");
		$("#music .footer .play").css("display","block");
	}
	// 播放暂停
	function play () {
		$("#music .footer .control .center").on("touchend",".bf",function(){
			if(audio.paused){
				audio.play();
			}else{
				audio.pause();
			}
			return false;
		})
	}
	play ();
	// 播放点的移动
	$("#music .footer .currentTime").text(edittime(audio.currentTime));
	$(audio).on("timeupdate",function(){
		var x=audio.currentTime/audio.duration*tw;
		dot.css("transform","translate("+x+"px)");
		$('#music .footer .schedule .cuttenttop').css("width",x+"px");
		$("#music .footer .currentTime").text(edittime(audio.currentTime));
		lrcstyle();
	})
	// 播放条的点动
	$("#music .footer .schedule .current").on("touchstart",function(e){
		var mx=e.originalEvent.changedTouches[0].pageX-tx;
		audio.currentTime=mx/tw*tat;
		// 拖动事件
		$(this).on("touchmove",function(e){
			var mx=e.originalEvent.changedTouches[0].pageX-tx;
			audio.currentTime=mx/tw*tat;
			return false;
		})
		return false;
	})
/////////////////////////////////////////////////////////////////
	// 切歌
	$("#music .footer .control").on("touchend",".left",function(){
		var waynext=waynow+1;
		if(waynext>$(".icon",this).size()-1){
			waynext=0;
		}
		way=$(".icon",this).eq(waynext).attr("type");
		$(".icon",this).eq(waynext).addClass('now').end().eq(waynow).removeClass('now');
		waynow=waynext;
	})
	function cutmusic(way){
		var ways=way==undefined?"add":way;
		switch(ways){
			case "add":
			now++;
			break;
			case "reduc":
			now--;
			break;
			case "random":
			now=Math.floor(Math.random()*(ml.length));
			break;
			case "single":
			now=now;
			break;
		}
		if(now>ml.length-1){
			now=0
		}else if(now<0){
			now=ml.length-1;
		}
		$(audio).attr("src","music/"+ml[now].src);
	}
	audio.onended = function(){
		cutmusic(way);
		range(ml,now);
		audio.play();
	}
	$("#music .footer .control .center").on("touchend",".next",function(){
		cutmusic(way);
		range(ml,now);
		audio.play();
	})
	$("#music .footer .control .center").on("touchend",".before",function(){
		var ways=way=="add"?"reduc":way;
		cutmusic(ways);
		range(ml,now);
		audio.play();
	})
	// 渲染
	function range(arr,now){
		$('#music .mlist .list').empty();
		var arr=arr===undefined?ml:arr;
		var now=now===undefined?0:now;
		$.each(arr,function(i,v){
			$("<li>").appendTo('#music .mlist .list').html("<div class='serial'><div class='num'>"+(i+1)+"</div><div class='img'></div></div><div class='information'><div class='information-left'><h2>"+v.name+"</h2><h6>"+v.autor+"</h6></div><div class='delete'><div class='icon'>&#xe62c;</div></delete></div>")
			$("#music .mlist .list li")
		})
		$('#music .mlist .list').find('li').eq(now).addClass('now').find(".img").css("background-image","url('img/"+arr[now].autor+"1.jpg')")
	}
	// 播放列表
	$("#music .footer .control").on("touchend",".right",function(){
		$("#music .footer").find(".mlist").slideToggle();
		return false;
	})
	$("#music .footer .mlist .list").on("touchend","li",function(){
		now=$(this).index();
		range(ml,now);
		$(audio).attr("src","music/"+ml[now].src);
		return false;
	})
	// 删除
	$("#music .footer .mlist .list").on("touchend",".delete",function(){
		if(ml.length>1){
			var parent=$(this).closest('li');
			var index = parent.index();
			ml.splice(index,1);
			if(index<now){
				now=now-1;
			}else if(index==now){
				if(now>ml.length-1){
					now=0;
				}
				$(audio).attr("src","music/"+ml[now].src);
			}
			range(ml,now);
			$("#music .footer .mlist .top span").text(ml.length);
			return false;
		}
	})
	// 歌词
	var flarr=[]; //p标签中文字个数
	function lrcjl (){
		var lrcObj=ml[now].lrc;
		var larr=lrcf(lrcObj);
		$(".lyrics").empty();
		flarr=[];
		$.each(larr,function(i,v){
			var p=$("<p>");
			var farr=v.l.split("");
			$.each(farr,function(n,m){
				$("<span>").text(m).appendTo(p);
			})
			flarr.push(farr.length);
			p.css("transform","translateY(150px)").attr("id",v.t).appendTo(".lyrics");
		})
	}
	//字符串处理
	function lrcf(str){
		var arr=str.split("[");
		var narr=[];
		var larr=[];
		var lnarr=[];
		arr.forEach(function(v,i){
			var v=v.trim();
			if(v){
				if(v[v.length-1]!=="]"){
					narr.push(v);
				}else if(v[v.length-1]==="]"){
					arr[i+1]=v+arr[i+1];
				}
			}
			arr.slice(arr.length,1);
		})
		narr.forEach(function(v,i){
			var a=v.split("]");
			for(var n=0;n<a.length-1;n++){
				var tm=parseInt(a[n].split(":")[0]*60+Math.floor(a[n].split(":")[1]));
				var l={
					t:tm,
					l:a[a.length-1]
				};
				larr.push(l);
			}
		})
		for(var i=0;i<larr.length;i++){
			var tem;
			for(var j=i+1;j<larr.length;j++){
				if(larr[j].t<larr[i].t){
					tem=larr[j];
					larr[j]=larr[i];
					larr[i]=tem;
				}
			}
		}
		larr.forEach(function(v,i){
			var tem;
			larr.forEach(function(m,n){
				if(v.t===m.t&&i!==n){
					tem=n;
				}
			})
			if(tem){
				larr.splice(tem,1);
			}
		})
		return larr;
	}
	function lrcstyle(){
		var lrcObj=ml[now].lrc;
		var arr=lrcf(lrcObj);
		var id=Math.floor(audio.currentTime);
		var tem;
		var ntem;
		$.each(arr,function(i,v){
			if(v.t<id){
				tem=parseInt(v.t);
				if(arr[i+1]){
					ntem=parseInt(arr[i+1].t);
				}else{
					ntem=parseInt(edittime(audio.duration));
				}
			}
		})
		$(".lyrics").find(".now").removeClass("now");
		$(".lyrics").find("#"+tem).addClass("now");
		var nw=$(".lyrics").find(".now");
		var index=parseInt(nw.index());
		var tm=parseInt(ntem-tem);
		var ts=parseInt(id-tem);
		if(arr[index]){
			var fi=Math.ceil(ts/tm*parseInt(flarr[index]));
			nw.find("span").slice(0,fi).addClass("nfont");
		}
		if(parseInt(arr[index])>11){
			moveH=(150-index*24.8*2);
		}else{
			moveH=(150-index*24.8);
		}
		$(".lyrics").find("p").css("transform","translateY("+moveH+"px)")
	}	
})