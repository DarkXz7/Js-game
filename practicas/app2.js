function promedio (){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let numero3 = parseFloat(document.getElementById("numero3").value);
    let promedioNumeros = (numero1 + numero2 + numero3) / 3;
    promedioNumeros = promedioNumeros.toFixed(0); // Round to two decimal places
    document.getElementById("promedio").innerText = promedioNumeros; // Set the inner text of the <p> element

    console.log(numero1, numero2, numero3); // Verify values
}