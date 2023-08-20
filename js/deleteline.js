//Alerta
alertas.textContent="OK: Scripts cargados correctamente..."


//Da funcionalidad al boton de eliminar de cada linea.
function deleteLineInLine(index){
    deleteLine(index);
    enviar();
    alertas.textContent='OK: Linea < '+index+' > eliminada';
    alertas.className="a-ok";
}