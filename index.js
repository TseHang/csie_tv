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
];

$.preload(images, 1, function(last){
  
  if (last){
    console.log("All loaded");

    //Preloading Out
    $('body').removeClass("loading");
    var timeFlag = window.setInterval(animate , 9000); //animate Started
  }
});

//Preloading Out
var count = 1 ;

function animate() {
	count++;
	//console.log("111");
	if ( count > 13 )
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
		document.getElementById('content').children[0].innerHTML = "2016 送舊晚會 六月三日";
		document.getElementById('content').children[1].innerHTML = "等你來挑戰！！";
	}
	//小畢典
	if (count == 7){
		document.getElementById('content').children[0].innerHTML = "2016 資訊系畢業典禮 六月五日 @ 大格致廳";
		document.getElementById('content').children[1].innerHTML = "祝賀 學長姐鵬程萬里 一帆風順！";
	}
	//攝影部課
	if (count == 8){
		document.getElementById('content').children[0].innerHTML = "[系會部課] 攝影簡介 @4202 5/12 19:00";
		document.getElementById('content').children[1].innerHTML = "主講人：王康霖 < 從0到100，雙手不搖擺 >";
	}
	//會長選舉
	if (count == 9){
		document.getElementById('content').children[0].innerHTML = "19屆系學會 正、副會長選舉公告";
		document.getElementById('content').children[1].innerHTML = "5/2~5/15 參選登記！為系上付出，人人有責。";
	}
	//[大學部]公告 預研生
	if (count == 10){
		document.getElementById('content').children[0].innerHTML = "[大學部] 預研生申請公告 5/2~5/15";
		document.getElementById('content').children[1].innerHTML = "申請資格：大三 相關資訊請至系網查閱。";
	}
	//64級獎學金
	if (count == 11){
		document.getElementById('content').children[0].innerHTML = "104下學期 64級獎學金得獎公告";
		document.getElementById('content').children[1].innerHTML = "請於5/17中午12:10分 至4210領獎。";
	}
	//碩博士獎項
	if (count == 12){
		document.getElementById('content').children[0].innerHTML = "恭賀同學榮獲 2015碩博士最佳論文獎佳作";
		document.getElementById('content').children[1].innerHTML = "感謝指導教授用心良苦！";
	}
	//[大學部]公告 開設課程
	if (count == 13){
		document.getElementById('content').children[0].innerHTML = "[演講資訊] 巨量資料分析技術與應用 @4263";
		document.getElementById('content').children[1].innerHTML = "5/13（五）主講人：工研院 巨資中心 林軒毅";
	}
}