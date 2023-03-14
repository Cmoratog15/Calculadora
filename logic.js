//DECLARACION VARIABLES
var num1 = 0;
var num2 = 0;
var operacion;

//FUNCION REFRESCAR*
function refrescar(){
    document.getElementById("valor_numero").value = num1;
}
//FUNCION QUE COLOCA EL NUMERO PRESIONADO
function darNumero(numero){
    if(num1==0 && num1 !== '0.'){
        num1 = numero;
    }else{
        num1 += numero;
    }
    refrescar(); //LLAMO FUNCION REFRESCAR
}
//FUNCION QUE COLOCA LA COMA AL PRESIONAR [,]
function darComa(){
    if(num1 == 0) {
        num1 = '0.';
    } else if(num1.indexOf('.') == -1) {
        num1 += '.';
    }
    refrescar();
}
//FUNCION BORRADO PARCIAL [CE]-------------------X
function darCE(){
    num1 = 0; //Borro ultimo número pantalla

    refrescar();
}
//FUNCION BORRAR TODO [C]
function darC(){
    num1 = 0;
    num2 = 0;

    refrescar();
}

//FUNCION OPERACIONES
function operar(valor){
    if (num1 == 0){
        num1 = parseFloat(document.getElementById("valor_numero").value);
    }
    num2 = parseFloat(num1);
    num1 = 0;
    operacion = valor;
}

//Funcion cuando pulsas igual
// 1 - SUMA
// 2 - RESTA
// 3 - MULTIPLICACION
// 4 - DIVISION
function esIgual(){
    num1 = parseFloat(num1);
    switch(operacion){
        case 1:
            num1 += num2;
            break;
        case 2:
            num1 = num2 - num1;
            break;
        case 3:
            num1 *= num2;
            break;
        case 4:
            num1 = num2 / num1;
            break;
        case 5:
            if(num1 == ""){
                num1 = num2/100;
            }else{
                num1 = num2/100 * num1;
            }
    }
    refrescar();
            num2 = parseFloat(num1);
            num1 = 0;
}