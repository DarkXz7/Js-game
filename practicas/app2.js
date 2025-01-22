



//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.


function calcular(){
    
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let imc = peso/altura;
    document.getElementById("imc").innerHTML ='Su imc es: '+ imc.toFixed(2);
}

