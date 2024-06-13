window.addEventListener("scroll", function(event){
    var scroll = this.scrollY;
    
    document.getElementById("parallax-bg1").style.top = scroll/1.75+"px";
    document.getElementById("parallax-bg2").style.top = scroll/2.5+"px";
    document.getElementById("parallax-bg3").style.top = scroll/4.75+"px";
  })