let entradaFormulaResultado=document.getElementById("entradaFormulaResultado");
let modoFormula=false;


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
    

    //Se activa el modo formula y muestra el resultado de lo escrito
    if (entradaValor[0]=="=") {
        entrada.style.color="lawngreen";
        alertas.textContent="OK: Modo formula activo";
        alertas.className="a-ok";
        modoFormula=true;

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
        document.getElementById("escribirLineaContenedor").style.background="var(--soft-principal-color)";
        document.getElementById("escribirLineaContenedor").style.padding="1rem 20px 0.5rem 20px";
    

        //Resuleve la operación escrita en entrada
        try {
            let numero = eval(entradaValorFormula);
            let formateado = new Intl.NumberFormat('es-CO', {style:"decimal",maximumFractionDigits:0,maximumFractionDigits:2}).format(numero);
            entradaFormulaResultado.textContent="=   "+formateado;
        } catch (error) {
            entradaFormulaResultado.textContent=("Expresión incorrecta")
        }
        

    }else{
        entradaFormulaResultado.style.height="0px"
        entrada.style.color="white";
        document.getElementById("escribirLineaContenedor").style.background="var(--principal-color)"
        document.getElementById("escribirLineaContenedor").style.padding="0px 0px";
        modoFormula=false;
    }
    
    
    let id=e.target.getAttribute("id");
  })

  //Autocompletar LINE o line


entrada.addEventListener("keyup", ({key}) => {
      //Escribe la linea al presionar enter (O aceptar en moviles).
    if (key === "Enter") {
        enviar();
    }if (modoFormula) {
        if (key==="l") { entrada.value+="ine";} 
        if (key==="L") { entrada.value+="INE";}
    }
    
  })
  



