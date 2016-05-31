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
];

$.preload(images, 1, function(last){

	if ($(this)[0] == 'images/10.jpg'){
		console.log('start!!');
		console.log('開始動畫囉!!');

		//Preloading Out
    $('body').removeClass("loading");
    var timeFlag = window.setInterval(animate , 9000); //animate Started
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
	if ( count > 15 )
		count = 1 ;

	//'background-size':'cover',
	$('#container').css({
		'background-image':'url(\'images/'+count+'.jpg\')',
	})
	
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
	//系女排
	if (count == 1){
		document.getElementById('content').children[0].innerHTML = "資訊女排，熱血拿牌";
		document.getElementById('content').children[1].innerHTML = "2016 春季成功盃冠軍 用生命在打排球";
	}

	//系男籃
	if (count == 2){
		document.getElementById('content').children[0].innerHTML = "資訊男籃，陽光宅男";
		document.getElementById('content').children[1].innerHTML = "最帥，沒有之一";
	}
	//系棒
	if (count == 3){
		document.getElementById('content').children[0].innerHTML = "2015 南資盃 壘球團體賽 殿軍";
		document.getElementById('content').children[1].innerHTML = "[系棒] 練球時間：每週三、五 15:00~18:00 自強球場";
	}
	//系排
	if (count == 4){
		document.getElementById('content').children[0].innerHTML = "2016 成大工院盃 男子排球賽 季軍";
		document.getElementById('content').children[1].innerHTML = "[男排] 練球時間：每週二、五 18:00 光復球場";
	}
	//女籃
	if (count == 5){
		document.getElementById('content').children[0].innerHTML = "2016 資訊女籃 成大工院盃 亞軍";
		document.getElementById('content').children[1].innerHTML = "恭賀 兼具力與美的美女們奪得亞軍！";
	}
	//送舊
	if (count == 6){
		document.getElementById('content').children[0].innerHTML = "2016 送舊晚會 六月三日 @ 濃園滿漢餐廳";
		document.getElementById('content').children[1].innerHTML = "等你來挑戰！！";
	}
	//小畢典
	if (count == 7){
		document.getElementById('content').children[0].innerHTML = "2016 資訊系畢業典禮 六月五日 @ 大格致廳";
		document.getElementById('content').children[1].innerHTML = "祝賀 學長姐鵬程萬里 一帆風順！";
	}
	//選舉系列
	if (count == 8){
		document.getElementById('content').children[0].innerHTML = "[恭賀] 第19屆系學會正副會長 張哲/許雁婷";
		document.getElementById('content').children[1].innerHTML = "期許他們將來的一年可以攜手打造更美好的資訊系";
	}
	//會長選舉
	if (count == 9){
		document.getElementById('content').children[0].innerHTML = "[恭賀] 同仁榮任行政院科技會報 執行秘書";
		document.getElementById('content').children[1].innerHTML = "資訊系全體同仁恭賀～";
	}
	//
	if (count == 10){
		document.getElementById('content').children[0].innerHTML = "[賀] 本系男子排球隊勇獲105學年系際盃冠軍";
		document.getElementById('content').children[1].innerHTML = "ＯＰＯＰ 唯我獨尊！";
	}
	//
	if (count == 11){
		document.getElementById('content').children[0].innerHTML = "[賀] 本系男子排球隊勇獲105學年系際盃冠軍";
		document.getElementById('content').children[1].innerHTML = "超強的啦！！";
	}
	//
	if (count == 12){
		document.getElementById('content').children[0].innerHTML = "[賀] 本系女子排球隊勇獲105學年系際盃季軍";
		document.getElementById('content').children[1].innerHTML = "主任真幸福～";
	}
	//
	if (count == 13){
		document.getElementById('content').children[0].innerHTML = "[賀] 本系女子排球隊勇獲105學年系際盃季軍";
		document.getElementById('content').children[1].innerHTML = "ＯＭＧ！！！";
	}

	//
	if (count == 14){
		document.getElementById('content').children[0].innerHTML = "別從別人的嘴裡，去認識你自己";
		document.getElementById('content').children[1].innerHTML = "圖片來源：毛叢叢 紛絲專頁";
	}
	//
	if (count == 15){
		document.getElementById('content').children[0].innerHTML = "大家讀書加油！ 期末考加油！";
		document.getElementById('content').children[1].innerHTML = "圖片來源：毛叢叢紛絲專頁";
	}
}