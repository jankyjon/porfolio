var img1 = document.getElementById("img1");


window.onscroll = function(){

  console.log("guess what? your scrolling");


  var fromTop = window.pageYOffset;


  console.log(fromTop);


  img1.innerHTML = fromTop + "px";

  img1.style.top = fromTop * 1.1 + "px";

  img1.style.border=fromTop/100 +"px solid blue";

//   submarine.style.transform= "rotate("+ fromTop * 0.01 + "deg)";



  if(fromTop > 5000) {
   img1.style.transform= "rotate(0 deg)";
    img1.style.backgroundColor="red";
    img1.innerHTML= "what a ride!";

  }
  else {

    img1.style.transform= "rotate("+ fromTop + "deg)";
  }

};
