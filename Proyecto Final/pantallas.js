var pant= document.getElementById("pantallas");
var paper = pant.getContext("2d");
var buttonX,buttonY ,buttonW,buttonH;
var map="Fondo.png";
var cadena= "buttons/cadena.png";
var configTitle="buttons/Configuraciones Titulo.png";
var configNoPress="buttons/Configuraciones_Dorado.png";
var configPress="buttons/Configuraciones_Gris.png";
var play="buttons/Jugar_Dorado.png";
var playNopress="buttons/Jugar_Gris.png";
var musicTitle="buttons/Musica.png"
var offNoPress="buttons/Off_Cafe.png";
var offPress="buttons/Off_Dorado.png";
var onNoPress="buttons/On_Cafe.png";
var onPress="buttons/On_Dorado.png";
var optionTitle="buttons/Opciones Titulo.png";
var optionNoPress="buttons/Opciones_Gris.png";
var soundTitle="buttons/Sonidos.png";
var backPress="buttons/Volver_Dorado.png";
var backNoPress="buttons/Volver_Gris.png";
var points="buttons/puntuaciones.png";
var pauseTitle="buttons/Pausa.png";
var menup="buttons/MenuPrincipal_Dorado.png"
var continuar="buttons/Continuar_Dorado.png"
///////////pantalla inicio
var fondo={
    cargaOK:false
};
var chain={
    cargaOK:false
};
var playbutton={
    cargaOK:false
};
var options={
    cargaOK:false
};
var config={
    cargaOK:false
};
var imagepoints={
    cargaOK:false
}
var optiontitle={
    cargaOK:false
}
/////VARIABLES OPCIONES
var soundtitle;
var soundOff;
var soundOn;
var musictitle;
var musicOn;
var musicOff;
var backOption;
///VARIABLES PAUSA
var pausetitle;
var menuprincipal;
var opciones;
var continuar;
//Pantalla de incio
fondo.imagen= new Image();
fondo.imagen.src=map;
fondo.imagen.addEventListener("load", cargarfondo);
 
chain.imagen= new Image();
chain.imagen.src=cadena;
chain.imagen.addEventListener("load", cargarchain);

playbutton.imagen= new Image();
playbutton.imagen.src=play;
playbutton.imagen.addEventListener("load", cargarplay);

options.imagen= new Image();
options.imagen.src=optionNoPress;
options.imagen.addEventListener("load", cargaroptions);

config.imagen= new Image();
config.imagen.src=configPress;
config.imagen.addEventListener("load", cargarconfig); 


//termina inicio

//funciones de pantalla 
function cargarfondo(){
    fondo.cargaOK=true;
    drawpantallacarga();
}
function cargarchain(){
   chain.cargaOK=true;
   drawpantallacarga();
}
function cargarplay(){
    playbutton.cargaOK=true;
    drawpantallacarga();
 }
 function cargaroptions(){
    options.cargaOK=true;
    drawpantallacarga();
 }
 function cargarconfig(){
    config.cargaOK=true;
    drawpantallacarga();
 }
 function cargarpoints(){
     imagepoints.cargaOK=true;
     drawpantallapoints();
 }
///////termina funciones de pantalla

/////funciones de option
function cargaroptiontitle(){
    paper.drawImage(optiontitle.imagen,300,0)
}
function cargarsoundtitle(){
    paper.drawImage(soundtitle,500,200)
}
function cargaroffsound(){
    paper.drawImage(soundOff,500,0)
}
function cargaroffmusic(){
    paper.drawImage(musicOff,500,0)
}
function cargarOnsound(){
    paper.drawImage(soundOn,500,0)
}
function cargarOnmusic(){
    paper.drawImage(musicOn,500,0)
}
function cargarMusicTitle(){
    paper.drawImage(musictitle,500,400)
}
function cargarBack(){
    paper.drawImage(backOption,1050,600)
}
////Terminan funciones de opciones

//////funciones de pausa
function cargarpausetitle(){
    paper.drawImage(pausetitle,300,0)
};
function cargarmenubutton(){
    paper.drawImage(menuprincipal,300,100)
};
function cargaropciones(){
    paper.drawImage(opciones,300,200)
};
function cargarcontinue(){
    paper.drawImage(continuar,300,300)
};

/////carga de pantalla
 function drawpantallacarga(){
    if(fondo.cargaOK){
    paper.drawImage(fondo.imagen,0,0);
    }
    if(chain.cargaOK){
    paper.drawImage(chain.imagen,117,0);
    paper.drawImage(chain.imagen,340,0);
    paper.drawImage(chain.imagen,480,-150);
    paper.drawImage(chain.imagen,800,-150);
    paper.drawImage(chain.imagen,943,0);
    paper.drawImage(chain.imagen,1168,0);
    }
    if(playbutton&&options&&config){
        paper.drawImage(playbutton.imagen,480,255);  
        paper.drawImage(options.imagen,50,395);
        paper.drawImage(config.imagen,943,495);
      }
      buttonpause(480,255,350,150);
      buttonpoints(900,395,350,150); 
      buttonoption(110,395,350,150);
 } 
/////////termina pantalla de inicio

//////////pantalla opciones
function drawpantallaoption(){
    if(fondo.cargaOK){
    paper.drawImage(fondo.imagen,0,0);

    }
    optiontitle.imagen= new Image();
    optiontitle.imagen.src=optionTitle;
    optiontitle.imagen.addEventListener("load", cargaroptiontitle);

    soundtitle= new Image();
    soundtitle.src= soundTitle;
    soundtitle.addEventListener("load",cargarsoundtitle); 
/*     soundOn= new Image();
    soundOn.src=onNoPress;
    soundOn.addEventListener("load",cargarOnsound);
    soundOff= new Image();
    soundOff.src=offPress;
    soundOff.addEventListener("load",cargaroffsound); */

    musictitle= new Image();
    musictitle.src=musicTitle;
    musictitle.addEventListener("load",cargarMusicTitle); 

    musicOn= new Image();
    musicOn.src=onNoPress;
    musicOn.addEventListener("load",cargarOnmusic);
 /*    
    musicOff= new Image();
    musicOff.src=offPress;
    musicOff.addEventListener("load",cargaroffmusic); */

    backOption= new Image();
    backOption.src= backPress;
    backOption.addEventListener("load",cargarBack);

    buttonpointsback(1050,600,350,150);

}
////pantallapoints
function drawpantallapoints(){
    if(imagepoints.cargaOK){
    paper.drawImage(imagepoints.imagen,0,0);
    }
    buttonpointsback(1050,600,350,150);
}
/////// pantalla pause
function drawpantallapause(){
    if(fondo.cargaOK){
    paper.drawImage(fondo.imagen,0,0);
    }
    buttonpointsback(1050,600,350,150);
    pausetitle= new Image();
    pausetitle.src= pauseTitle;
    pausetitle.addEventListener("load",cargarpausetitle);

    menuprincipal= new Image();
    menuprincipal.src= menup;
    menuprincipal.addEventListener("load",cargarmenubutton);

    opciones= new Image();
    opciones.src= optionNoPress;
    opciones.addEventListener("load",cargaropciones);

    continuar= new Image();
    continuar.src= backPress;
    continuar.addEventListener("load",cargarcontinue);

}








function clear(){
    paper.clearRect(0, 0, pant.width, pant.height);
}

/////////botones
function buttonpause(buttonX,buttonY,buttonW,buttonH){
    paper.fillStyle = 'red'; 
    paper.fillRect(buttonX, buttonY, buttonW, buttonH); 
    pant.addEventListener('click', function(event) { 
      if ( 
        event.x > buttonX &&  
        event.x < buttonX + buttonW && 
        event.y > buttonY &&  
        event.y < buttonY + buttonH 
      ) { 
        clear();
        drawpantallapause();
      } 
    }); 
    }

function buttonoption(buttonX,buttonY,buttonW,buttonH){
        paper.fillStyle = 'red'; 
        paper.fillRect(buttonX, buttonY, buttonW, buttonH); 
        pant.addEventListener('click', function(event) { 
          if ( 
            event.x > buttonX &&  
            event.x < buttonX + buttonW && 
            event.y > buttonY &&  
            event.y < buttonY + buttonH 
          ) { 
            clear();
            drawpantallaoption();
          } 
        }); 
        }

function buttonpointsback(buttonX,buttonY,buttonW,buttonH){
    paper.fillStyle = 'red'; 
    paper.fillRect(buttonX, buttonY, buttonW, buttonH); 
    pant.addEventListener('click', function(event) { 
      if ( 
        event.x > buttonX &&  
        event.x < buttonX + buttonW && 
        event.y > buttonY &&  
        event.y < buttonY + buttonH 
      ) { 
        clear();
        drawpantallacarga();
      } 
    }); 
    }

function buttonpoints(buttonX,buttonY,buttonW,buttonH){
    paper.fillStyle = 'red'; 
    paper.fillRect(buttonX, buttonY, buttonW, buttonH); 
    pant.addEventListener('click', function(event) {   
      if ( 
        event.x > buttonX &&  
        event.x < buttonX + buttonW && 
        event.y > buttonY &&  
        event.y < buttonY + buttonH 
      ) { 
        imagepoints.imagen= new Image();
        imagepoints.imagen.src=points;
        imagepoints.imagen.addEventListener("load", cargarpoints);
      } 
    }); 
    }
