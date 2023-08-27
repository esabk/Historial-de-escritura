function about(){
    alertas.textContent='OK ::: Acerca de';
    let version="1.4.8 - 08/2023";
    contenedor.innerHTML="";
    contenedor.innerHTML+='<div><input id="btn_enviar"onclick="EscribeLineas()" type="button" value="Ver lineas"><br><div id="About"><br><img height="48px" src="../android-icon-192x192.png" alt="" srcset=""><h2>Escribe by Alfabto AS</h2> v'+version+' <br><br>Creado por Eddy Santiago AB <br><br><p>Esta pequeña aplicación la empezé a desarrollar un domingo en la mañana por aburrimiento probando Spck Editor en el movil a ver que salia, desempolvando mis conocimientos en Javascript y css ... <br><br> Me gusto lo que iba saliendo y luego de irla mejorando; aqui está, publicada y a espera de nuevas mejoras. </p></div></div><hr><h2>Novedades</h2><p><b>MODO FORMULA: </b>Activalo empezando a escribir = , Ejemplo: "=12+1"</p><p><b>Usa valores de otras lineas: </b>escribe la palabra "line" seguido del indice de linea, Ejemplo:"line0"</p><h2>Mejoras</h2><p><b>Nueva interfaz de usuario: </b>Más limpia y legible.</p><p><b>Nuevo orden de lineas: </b>La ultima linea escrita se guarda despues de la anterior.</p><p>... Se realizarón mejoras y corrección de fallos menores.</p><hr>';
}
function help(){
    alertas.textContent='OK ::: Ayuda';
    contenedor.innerHTML="";
    contenedor.innerHTML += '<di><input id="btn_enviar"onclick="EscribeLineas()" type="button" value="Ver lineas"><p><br><h2>Comandos</h2><b>Modo fórmula</b> > Se activa empezando a escribir con = <br> <b> Delete all </b> > Borra todas las lineas<br> <b> Delete -Numero de Linea - </b> > Borra linea<br> <b> Modify -Numero de linea- :-Nuevo texto- </b></p><br></div>';
}