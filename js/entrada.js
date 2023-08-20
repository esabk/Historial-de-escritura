let entradaFormulaResultado=document.getElementById("entradaFormulaResultado");


//Busca en las lineas la linea solicitada y obtiene su resultado.
function valorLinea(index) {
    let valor;
    try {
        let entradaValorFormula=lineas[index].replace("=","")
        valor=eval(entradaValorFormula);
    } catch (error) {
        alertas.textContent="ERROR: Linea no encontrada o no es una operación aritmetica.";
        alertas.className="a-error";
    }
    
    return valor;
  }

//Modifica el texto de la linea conforme se escribe.
entrada.addEventListener("keyup", e => {
    let entradaValor=entrada.value;
    let valoresInternos;

    //Se activa el modo formula y muestra el resultado de lo escrito
    if (entradaValor[0]=="=") {
        entrada.style.color="lawngreen";
        alertas.textContent="OK: Modo formula activo";
        alertas.className="a-ok";

        //Toma el resulatdo de la linea escrita, palabra clave line
        let buscarLine=entrada.value.lastIndexOf("line");
        if (buscarLine > 0) {
            let lineaindex=buscarLine+4;
            let valor = valorLinea(entrada.value[lineaindex]);
            
            if (typeof valor =="number") {
                let lineaReplace="line"+entrada.value[lineaindex];
                entrada.value=entrada.value.replace(lineaReplace,valor);  
                
            }
        }
        //Toma el contenido la linea , palabra clave LINE
        buscarLine=entrada.value.lastIndexOf("LINE");
        if (buscarLine > 0) {
            let lineaindex=buscarLine+4;
            let index = entrada.value[lineaindex];
            let valor = lineas[index].replace("=","");  //Obtiene la linea en lineas
            let lineaReplace="LINE"+entrada.value[lineaindex];
            entrada.value=entrada.value.replace(lineaReplace,valor);  
            
        }
        
        
        
        //Quita el = para poder evaluar y muestra el resultado
        
        entradaValor=entrada.value;
        let entradaValorFormula=entradaValor.replace("=","")
        entradaFormulaResultado.style.height="20px";


        //Resuleve la operación escrita en entrada
        try {
            entradaFormulaResultado.textContent="=> "+eval(entradaValorFormula);
        } catch (error) {
            entradaFormulaResultado.textContent=("Expresión incorrecta")
        }

        

    }else{
        entradaFormulaResultado.style.height="0px"
        entrada.style.color="white";
    }
    
    
    let id=e.target.getAttribute("id");
  })



