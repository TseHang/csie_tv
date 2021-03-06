/*
照片格式:1024x768
內容只能放到 高度從上面往下數80%（因為要留20％的空間放bar)
*/

//Loading
(function(){

  // 計算總共要讀取幾個
  var count = inputs.length;
  var tmpCounter = 0;
  var timeFlag; // 控制換圖片的時間
  var timeInterval = 1800;//10000;
  var vidoePlaying = false;

  var images =[];
  var OBJ_video = {
    "csie":document.getElementById("video_csie")
    // "tree":document.getElementById("video_tree")
  };

  // Loading
  $('body').addClass("loading");

  // push img to preloading
  inputs.forEach(function(value){
    if(value.type === undefined)
      images.push(value.name);
  })

  $.preload(images, 1, function(last) {
    if ($(this)[0] === inputs[Math.round(count/2 - 1)].name) {
      //Preloading Out
      $('body').removeClass("loading");
      timeFlag = window.setTimeout(next, timeInterval); //animate Started
    }

    if (last) {
      console.log("Images All loaded");

      // 載入影片、增加ended事件
      $.each(OBJ_video, function(index, video) {
        video.load();
        video.addEventListener("ended", function() {
          $('#container').css("display", "block");
          this.style.zIndex = -1 ;
          if (vidoePlaying == true) {
            vidoePlaying = false;
            next();
          }
        });
        console.log(video.id + " load over!");
      });
    }
  });

  // 測試看看 loading over 沒

  // video.addEventListener("canplaythrough", function() {
  //   console.log("video loading over");
  // });


  function next() {
    // 判斷到底需不需要從頭讀
    tmpCounter++;
    tmpCounter = (tmpCounter == count) ? 0 : tmpCounter;

    // type: undefined --> Image
    if (inputs[tmpCounter].type === undefined) {
      changeImage(tmpCounter);
      changeFooter(tmpCounter);

      //9秒後換下一個
      timeFlag = window.setTimeout(next, timeInterval);

    } else if (inputs[tmpCounter].type === 'video') {
      changeVideo( tmpCounter , inputs[tmpCounter].source);
    }

    // 換動畫
    fade_direction = tmpCounter % 4;
    switch (fade_direction) {
      case 0:
        $('#content').animo({ animation: "fadeInDown", duration: 0.5 });
        break;
      case 1:
        $('#content').animo({ animation: "fadeInRight", duration: 0.5 });
        break;
      case 2:
        $('#content').animo({ animation: "fadeInLeft", duration: 0.5 });
        break;
      case 3:
        $('#content').animo({ animation: "fadeInUp", duration: 0.5 });
        break;
    }
  }

  function changeImage(counter) {
    $('#container').css({
      'background-image': 'url(' + inputs[counter].name + ')',
    })
  }

  function changeVideo(counter,video) {

    $('#container').css("display", "none");
    video.style.zIndex = 1 ;
    video.currentTime = 0 ;
    video.play();  // Chrome 的 play 包含 load
    vidoePlaying = true;
  }

  function changeFooter(counter) {
    document.getElementById('content').children[0].innerHTML = inputs[counter].title;
    document.getElementById('content').children[1].innerHTML = inputs[counter].subTitle;
  }
}())
