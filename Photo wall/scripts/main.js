// jQuery方法
// $(function(){
//   $("#imageList img").click(function(){
//       //操作
//       alert("fuck");
//   });
// });

// 得到所有“内容”图片，并设置监听事件
let imgs = document.getElementsByName("内容");
let back = document.getElementById("back");
let show = document.getElementById("displayImage");
let newImage;

for(let i = 0; i < imgs.length; i++){
  imgs[i].onclick = function(){
     let path = imgs[i].getAttribute("src");
     newImage = document.createElement("img");
     newImage.setAttribute("src", path);
    //  alert("path");
     popWin();
  }

  // 使用CSS放大则不需要这段代码
  // imgs[i].onmouseover = function(){
  //   imgs[i].width *= 1.1;
  //   imgs[i].height *= 1.1;
  // }

  // imgs[i].onmouseout = function(){
  //   imgs[i].width /= 1.1;
  //   imgs[i].height /= 1.1;
  // }
}

function popWin(){
  show.appendChild(newImage);
  back.style.display = "block";
  show.style.display = "block";
}

function hideWin(){
  back.style.display = "none";
  show.style.display = "none";

  //删除弹窗的图片
  show.removeChild(show.childNodes[0]);
}

back.onclick = function(){
  hideWin();
}