
function myFunction() {
  window.location.href = "https://mud-collar.glitch.me/mystery2";
}

function goMystery1() {
  window.location.href = "https://mud-collar.glitch.me/mystery1";
}

function goMystery3() {
  window.location.href = "https://mud-collar.glitch.me/mystery3";
}

function doNot() {
    var x = document.getElementById('dontclickthisbutton');
    
       
    
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById("video").src="https://www.youtube.com/embed/mOYZaiDZ7BM";
    } 
    else if(x.style.display === 'block'){
        x.style.display = 'none';
        document.getElementById("video").src="";
    }
    else {
        x.style.display = 'block';
        document.getElementById("video").src="https://www.youtube.com/embed/mOYZaiDZ7BM?autoplay=1";
    }
    
}