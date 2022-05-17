var lienzo = document.getElementById("lienzo");
var dibujo = lienzo.getContext("2d");
var lienzo2 = document.getElementById("lienzo2");
var dibujo2 = lienzo2.getContext("2d");
var imagen= document.getElementById('imagen');
var imagen1= document.getElementById('imagen1');
var img = new Image();

function graficar(){
	


img.src = '../imagenes/fondo.png';
img.onload = function (){
    
    var od_250 = document.getElementById("250").value;
    var od_500 = document.getElementById("500").value;
    var od_1000 = document.getElementById("1000").value;
    var od_2000 = document.getElementById("2000").value;
    var od_3000 = document.getElementById("3000").value;
    var od_4000 = document.getElementById("4000").value;
    var od_6000 = document.getElementById("6000").value;
    var od_8000 = document.getElementById("8000").value;
    
    dibujo.drawImage(img,0,0,400,300);
    dibujo.beginPath();
    dibujo.strokeStyle = "#f20909";
    dibujo.lineWidth = 2;
    dibujo.moveTo(39,(od_250*2)+55);
	dibujo.arc(40,(od_250*2)+55,2.5,0,Math.PI*2,true);
	DibujarLineaCirculo(102,od_500,dibujo);
	DibujarLineaCirculo(165,od_1000,dibujo);
	DibujarLineaCirculo(228,od_2000,dibujo);
	DibujarLineaCirculo(268,od_3000,dibujo);
	DibujarLineaCirculo(308,od_4000,dibujo);
	DibujarLineaCirculo(348,od_6000,dibujo);
	DibujarLineaCirculo(388,od_8000,dibujo);
    dibujo.stroke();
	
	//imagen.value=lienzo.toDataURL('image/png');
	//document.forms['formCanvas'];
//}
	

//img2.onload = function (){
    
    var oi_250 = document.getElementById("250_i").value;
    var oi_500 = document.getElementById("500_i").value;
    var oi_1000 = document.getElementById("1000_i").value;
    var oi_2000 = document.getElementById("2000_i").value;
    var oi_3000 = document.getElementById("3000_i").value;
    var oi_4000 = document.getElementById("4000_i").value;
    var oi_6000 = document.getElementById("6000_i").value;
    var oi_8000 = document.getElementById("8000_i").value;
    
    dibujo2.drawImage(img,0,0,400,300);
    dibujo2.beginPath();
    dibujo2.strokeStyle = "#102aba";
    dibujo2.lineWidth = 2;
    dibujo2.moveTo(39,(oi_250*2)+55);
	dibujo2.arc(40,(oi_250*2)+55,2.5,0,Math.PI*2,true);
    DibujarLineaCirculo(102,oi_500,dibujo2);
	DibujarLineaCirculo(165,oi_1000,dibujo2);
	DibujarLineaCirculo(228,oi_2000,dibujo2);
	DibujarLineaCirculo(268,oi_3000,dibujo2);
	DibujarLineaCirculo(308,oi_4000,dibujo2);
	DibujarLineaCirculo(348,oi_6000,dibujo2);
	DibujarLineaCirculo(388,oi_8000,dibujo2);
    dibujo2.stroke();
}
}
//}
function DibujarLineaCirculo(val1,val2,val3){
	val3.lineTo(val1,(val2*2)+55);
	val3.arc(val1,(val2*2)+55,2.5,0,Math.PI*2,true);
	//dibujo.fill();
}

function GuardarTrazado(){
imagen.value=document.getElementById("lienzo").toDataURL('image/png');
imagen1.value=document.getElementById("lienzo2").toDataURL('image/png');
document.forms['formCanvas'];
}
  
  //document.forms['formCanvas'].submit();


