// script.js
function calcularCusto() {
    var km = parseFloat(document.getElementById("km").value);
    var valorLitro = parseFloat(document.getElementById("valorLitro").value);
    
    if (isNaN(km) || isNaN(valorLitro)) {
        alert("Por favor, preencha todos os campos com valores numéricos.");
    } else {
        // Calcula o custo de óleo com base na quilometragem
        var custoTotal = (km / 1000) * valorLitro;
        document.getElementById("resultado").innerHTML = "Custo de óleo: R$ " + custoTotal.toFixed(2);
    }
}
