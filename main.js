// Comandos
// Delete all > Borra todas las lineas
// Delete <Numero de Linea > Borra linea
// Modify <Numero de linea> :<Nuevo texto>

let saludo='... ::::';
let entrada=document.getElementById('entrada')
let contenedor=document.getElementById('contenedor');
let alertas=document.getElementById('alertas')
let linea=document.getElementById("l 0");
let lineas=['.::..:.:::::.:::.:...'];

function addLine(value) {
  lineas.unshift(value);
}

function deleteLine(index){
  if (index < lineas.length) {
    lineas.splice(index, 1);
  } else {
    alertas.textContent = 'ERROR ::: Linea <' + index + '>  no encontrada'
  }
}

function modifyLine(index,value) {
  if (index < lineas.length) {
    lineas[index]=value;
  } else {
    alertas.textContent = 'ERROR ::: Linea <' + index + '>  no encontrada'
  }
}

function enviar(entradaValor) {
  if (entradaValor==null) {
    entradaValor=entrada.value;
  }
  console.log('entrada = '+entradaValor);
  
  let command=entradaValor.split(' ');
  if (entradaValor=="") {
    console.warn('::: Escribe algo ... Para continuar')
    alertas.textContent='ADVERTENCIA ::: Escribe algo ... Para continuar';
    EscribeLineas();
    
  }else if(command[0]=="Delete" &&command[1]=='all'){
    lineas=['.::..:.:::::.:::.:...'];
    alertas.textContent='OK ::: Lineas eliminadas correctamente';
    EscribeLineas();
    
   }else if(command[0]=="Delete" ){
     
     alertas.textContent='OK ::: Se ha eliminado la linea '+ command[1]+' = '+lineas[command[1]];
     deleteLine(command[1]);
     EscribeLineas();
     
   }else if(command[0]=='Modify'){
     alertas.textContent='OK ::: Se modificado la linea: '+ command[1];
     let valor = entradaValor.split(':');
      modifyLine(command[1],valor[1]);
      
      EscribeLineas();
      entrada.value='';
   }else if(command[0]=='Help'){
     alertas.textContent='OK ::: Ayuda';
     EscribeLineas();
     contenedor.innerHTML += "<p><br><h2>Comandos</h2> <b> Delete all </b> > Borra todas las lineas<br> <b> Delete -Numero de Linea - </b> > Borra linea<br> <b> Modify -Numero de linea- :-Nuevo texto- </b></p>";
     
     
   }else{
    addLine(entrada.value)
    EscribeLineas();
    
    alertas.textContent='OK :::  '+entrada.value;
    entrada.value="";
  }
  
  function EscribeLineas() {
    contenedor.innerHTML = '';
    for (var i = 0; i < lineas.length; i++) {
      contenedor.innerHTML += '<div id="lineaContenedor" ><i class="lineNumber">' +i+' ∆∆∆  </i>'+' <textarea id="l '+i+'" class="linea">'+lineas[i]+'</textarea></div>';
      linea=document.getElementById("l "+i);
      linea.style.height = linea.scrollHeight+"px";
    }
  }
  
  entrada.focus();
  console.log('btn ... click');
  console.log(entrada.value);
  
}

entrada.addEventListener("keyup", ({key}) => {
  if (key === "Enter") {
      enviar();
  }
})

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
