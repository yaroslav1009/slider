document.getElementById("imaaaga").innerHTML = '<img width = "500px" src="img/'+ 1 +'.jpg" border="0" />';
let n = 2;
prev.style.zIndex = '-2';

function nextImg(){
    function getImage() { 
        if(n === 2){
            n = 3
            prev.style.zIndex = '1';
            return '<img width = "500px" src="img/'+ 2 +'.jpg" border="0" />'; 
        }
        if(n === 3){
            next.style.zIndex = '-2';
            return '<img width = "500px" src="img/'+ 3 +'.jpg" border="0" />'; 
        }
    }
    document.getElementById("imaaaga").innerHTML = getImage();
}
function prevImg(){
    function backImage() { 
        if(n === 3){
            n = 2;
            next.style.zIndex = '1';
            return '<img width = "500px" src="img/'+ 2 +'.jpg" border="0" />'; 
        }
        if(n === 2){
            n = 2
            prev.style.zIndex = '-2';
            return '<img width = "500px" src="img/'+ 1 +'.jpg" border="0" />'; 
        }
    }
    document.getElementById("imaaaga").innerHTML = backImage();
}

next.onclick = nextImg;
prev.onclick = prevImg;
