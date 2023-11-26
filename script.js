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
function calcularCusto() {
    var km = parseFloat(document.getElementById("km").value);
    var valorLitro = parseFloat(document.getElementById("valorLitro").value);
    var consumoKmPorLitro = parseFloat(document.getElementById("consumoKmPorLitro").value);
    var valorRegularizacaoAnual = parseFloat(document.getElementById("valorRegularizacaoAnual").value);
    var vidaUtilPneuDianteiro = parseFloat(document.getElementById("vidaUtilPneuDianteiro").value);
    var vidaUtilPneuTraseiro = parseFloat(document.getElementById("vidaUtilPneuTraseiro").value);
    var gastosPessoais = parseFloat(document.getElementById("gastosPessoais").value);

    // Realize os cálculos desejados aqui

    var resultado = document.getElementById("resultado");
    // Atualize o elemento "resultado" com o resultado dos cálculos
}
