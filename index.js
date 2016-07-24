/*
照片格式:1024x768
內容只能放到 高度從上面往下數80%（因為要留20％的空間放bar)
*/

//Loading
$('body').addClass("loading");

//Preloading
var images = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg',
  'images/5.jpg',
  'images/6.jpg',
  'images/7.jpg',
  'images/8.jpg',
  'images/9.jpg',
  'images/10.jpg',
  'images/11.jpg',
  'images/12.jpg',
  'images/13.jpg',
  'images/14.jpg',
  'images/15.jpg',
  'images/16.jpg',
  'images/17.jpg',
  'images/18.gif',
  'images/19.jpg'
];

$.preload(images, 1, function(last){

	if ($(this)[0] == 'images/10.jpg'){
		console.log('start!!');
		console.log('開始動畫囉!!');

		//Preloading Out
    $('body').removeClass("loading");
    var timeFlag = window.setInterval(animate , 1000); //animate Started
	}
  
  if (last){
    console.log("All loaded");
  }
});

//Preloading Out
var count = 1 ;

function animate() {
	count++;
	//console.log("111");
	if ( count > 19 )
		count = 1 ;

	if (count == 18){
		//'background-size':'cover',
		$('#container').css({
			'background-image':'url(\'images/'+count+'.gif\')',
		})
	}
	else{
		//'background-size':'cover',
		$('#container').css({
			'background-image':'url(\'images/'+count+'.jpg\')',
		})
	}
	
	//因為選舉 蓋到系會 會不清楚 所以調大小
	
	var fade_direction = count%4 ;
	switch (fade_direction) {
		case 0 :
			$('#content').animo({animation: "fadeInDown", duration: 0.5});
			break;
		case 1 :
			$('#content').animo({animation: "fadeInRight", duration: 0.5});
			break;
		case 2 :
			$('#content').animo({animation: "fadeInLeft", duration: 0.5});
			break;
		case 3 :
			$('#content').animo({animation: "fadeInUp", duration: 0.5});
			break;

	}
	if (count == 1){
		document.getElementById('content').children[0].innerHTML = "恭賀! 本系 盧文祥副教授！";
		document.getElementById('content').children[1].innerHTML = "榮獲本校104學年度全校輔導傑出導師獎！！";
	}
	//系女排
	if (count == 2){
		document.getElementById('content').children[0].innerHTML = "資訊女排，熱血拿牌";
		document.getElementById('content').children[1].innerHTML = "2016 春季成功盃冠軍 用生命在打排球";
	}
	//系男籃
	if (count == 3){
		document.getElementById('content').children[0].innerHTML = "資訊男籃，陽光宅男";
		document.getElementById('content').children[1].innerHTML = "最帥，沒有之一";
	}
	//系棒
	if (count == 4){
		document.getElementById('content').children[0].innerHTML = "2015 南資盃 壘球團體賽 殿軍";
		document.getElementById('content').children[1].innerHTML = "[系棒] 練球時間：每週三、五 15:00~18:00 自強球場";
	}
	//女籃
	if (count == 5){
		document.getElementById('content').children[0].innerHTML = "2016 資訊女籃 成大工院盃 亞軍";
		document.getElementById('content').children[1].innerHTML = "恭賀 兼具力與美的美女們奪得亞軍！";
	}
	if (count == 6){
		document.getElementById('content').children[0].innerHTML = "[賀] 本系男子排球隊勇獲105學年系際盃冠軍";
		document.getElementById('content').children[1].innerHTML = "[男排] 練球時間：每週二、五 18:00 光復球場";
	}
	//
	if (count == 7){
		document.getElementById('content').children[0].innerHTML = "[賀] 本系女子排球隊勇獲105學年系際盃季軍";
		document.getElementById('content').children[1].innerHTML = "主任真幸福～";
	}
	//送舊
	if (count == 8){
		document.getElementById('content').children[0].innerHTML = "2016 送舊晚會 圓滿成功";
		document.getElementById('content').children[1].innerHTML = "讓我們恭賀學長姐們順利畢業！！";
	}
	//小畢典
	if (count == 9){
		document.getElementById('content').children[0].innerHTML = "2016 送舊晚會 歌王";
		document.getElementById('content').children[1].innerHTML = "神啊，救救我吧！";
	}
	//選舉系列
	if (count == 10){
		document.getElementById('content').children[0].innerHTML = "2016 送舊晚會";
		document.getElementById('content').children[1].innerHTML = "感謝辛苦工人們～";
	}
	//會長選舉
	if (count == 11){
		document.getElementById('content').children[0].innerHTML = "2016 資訊系畢業典禮 ";
		document.getElementById('content').children[1].innerHTML = "";
	}
	//
	if (count == 12){
		document.getElementById('content').children[0].innerHTML = "2016 資訊系畢業典禮 謝師禮";
		document.getElementById('content').children[1].innerHTML = "";
	}
	//
	if (count == 13){
		document.getElementById('content').children[0].innerHTML = "2016 資訊系畢業典禮 撥穗";
		document.getElementById('content').children[1].innerHTML = "";
	}
	//
	if (count == 14){
		document.getElementById('content').children[0].innerHTML = "2016 資訊系畢業典禮 ";
		document.getElementById('content').children[1].innerHTML = "";
	}
	//
	if (count == 15){
		document.getElementById('content').children[0].innerHTML = "2016 資訊系畢業典禮 丟帽儀式";
		document.getElementById('content').children[1].innerHTML = "畢業，只是下一個旅程的開始";
	}
	//
	if (count == 16){
		document.getElementById('content').children[0].innerHTML = "別從別人的嘴裡，去認識你自己";
		document.getElementById('content').children[1].innerHTML = "圖片來源：毛叢叢 紛絲專頁";
	}
	//
	if (count == 17){
		document.getElementById('content').children[0].innerHTML = "大家讀書加油！ 考試加油！";
		document.getElementById('content').children[1].innerHTML = "圖片來源：毛叢叢紛絲專頁";
	}
	if (count == 18){
		document.getElementById('content').children[0].innerHTML = "努力！我行的！";
		document.getElementById('content').children[1].innerHTML = "GO!GO!";
	}
	if (count == 19){
		document.getElementById('content').children[0].innerHTML = "恭賀！ 本系 陳培殷老師！";
		document.getElementById('content').children[1].innerHTML = "指導研究團隊榮獲「第十六屆旺宏金矽獎半導體設計與應用大賽」應用組－銅獎!";
	}
}