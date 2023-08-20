// Code by Eddy Santiago AB
// By Alfabto AS

// Comandos
// Delete all > Borra todas las lineas
// Delete <Numero de Linea > Borra linea
// Modify <Numero de linea> :<Nuevo texto>

let saludo='Escribe |';
let entrada=document.getElementById('entrada')
let contenedor=document.getElementById('contenedor');
let alertas=document.getElementById('alertas')
let linea=document.getElementById("l 0");
let lineas=[];
let principalUi = document.getElementById("principalUi");


//Agrega el texto de entrada a las lineas (Nueva linea).
function addLine(value) {
  lineas.push(value);
}

// Muestra las lineas almacenadas en la variable lineas.
function EscribeLineas() {
  contenedor.innerHTML = '';
  for (let i = lineas.length-1; i >= 0 ; i--) {
    console.log(i);
    contenedor.innerHTML += '<div id="lineaContenedor" ><b class="lineNumber">line ' +i+'  </b>'+'<textarea id="l '+i+'" class="linea">'+lineas[i].replace("=","")+'</textarea><input id="btn_enviar"onclick="deleteLineInLine('+i+')" type="button" value="X"></div>';
    linea=document.getElementById("l "+i);
    linea.style.height = linea.scrollHeight+"px";
  }
}

//Borra una linea especifica
function deleteLine(index){
  if (index < lineas.length) {
    lineas.splice(index, 1);
  } else {
    alertas.textContent = 'ERROR ::: Linea <' + index + '>  no encontrada';
    alertas.className="a-error";
  }
}

//Modifica una linea especifica 
function modifyLine(index,value) {
  if (index < lineas.length) {
    lineas[index]=value;
  } else {
    alertas.textContent = 'ERROR ::: Linea <' + index + '>  no encontrada'
    alertas.className="a-error";
  }
}

//
function enviar(entradaValor) {
  if (entradaValor==null) {
    entradaValor=entrada.value;
  }
  console.log('entrada = ' + entradaValor);
  
  let command=entradaValor.split(' ');
  if (entradaValor=="") {
    console.warn('::: Escribe algo ... Para continuar')
    alertas.textContent='ADVERTENCIA ::: Escribe algo ... Para continuar';
    alertas.className="a-advertencia";
    EscribeLineas();
    
  }else if(command[0]=="Delete" &&command[1]=='all'){
    lineas=[];
    alertas.textContent='OK ::: Lineas eliminadas correctamente';
    alertas.className="a-ok";
    EscribeLineas();
    
   }else if(command[0]=="Delete" ){
     
     alertas.textContent='OK ::: Se ha eliminado la linea '+ command[1]+' = '+lineas[command[1]];
     alertas.className="a-ok";
     deleteLine(command[1]);
     EscribeLineas();
     
   }else if(command[0]=='Modify'){
     alertas.textContent='OK ::: Se modificado la linea: '+ command[1];
     alertas.className="a-ok";
     let valor = entradaValor.split(':');
      modifyLine(command[1],valor[1]);
      
      EscribeLineas();
      entrada.value='';  
  }else{
    addLine(entrada.value)
    EscribeLineas();
    
    alertas.textContent='OK :::  '+entrada.value;
    alertas.className="a-ok";
    entrada.value="";
  }
  
  entrada.focus();
}


//Modifica el texto de la linea conforme se escribe.
contenedor.addEventListener("keyup", e => {
  linea.style.height="auto";
  linea.style.height = e.target.scrollHeight +'px';
  let id=e.target.getAttribute("id");
  linea=document.getElementById(id);

  id=id.split(" ");
  index=id[1];
  modifyLine(index,linea.value);
  console.log(index+" Linea actualizada: "+ linea.value);
})
