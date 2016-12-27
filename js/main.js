function parrotA(){
    var img=document.getElementById("img_parrot_a");
    var parrot_a = document.getElementById("parrot_a");
    
    if(parrot_a.checked)
		img.innerHTML = '<img src="images/parrot-s.gif">';
	else
		img.innerHTML = '<img src="images/parrot-n.gif">';
}


function evaluar() {
    var hora = document.getElementById("hora");
    var parrot_a = document.getElementById("parrot_a").checked;

    var varhora=hora.value;
    var varsalida = document.getElementById("salida");

   
    if(parrot_a){
      if(varhora>=7 && varhora<=20){
          varsalida.innerHTML="no";
      }
        else{
            varsalida.innerHTML="si";
        }
    }
    else{
        varsalida.innerHTML="no";
    }
}
