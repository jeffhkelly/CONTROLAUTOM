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
    var vidaUtilPneuDianteiro = parseFloat(document.getElementById("vidaUtilPneuDianteiro").value);
    var valorPneuDianteiro = parseFloat(document.getElementById("valorPneuDianteiro").value);
    
    var vidaUtilPneuTraseiro = parseFloat(document.getElementById("vidaUtilPneuTraseiro").value);
    var valorPneuTraseiro = parseFloat(document.getElementById("valorPneuTraseiro").value);
   
    var gastosPessoais = parseFloat(document.getElementById("gastosPessoais").value);

    // Cálculo do gasto com combustível
    var gastoCombustivel = (km / consumoKmPorLitro) * valorLitro;

     // Cálculo do gasto com oleo
    var gastooleo = (km / consumoKmPorLitrooleo) * valorLitrooleo;

       // Cálculo do gasto médio de pneu dianteiro
    var gastoMedioPneuDianteiro = valorPneuDianteiro / vidaUtilPneuDianteiro;

    // Cálculo do gasto médio de pneu traseiro
    var gastoMedioPneuTraseiro = valorPneuTraseiro / vidaUtilPneuTraseiro;
    
    // Cálculo do gasto total diário
    var gastoTotalDiario = gastoCombustivel + gastooleo + gastoMedioPneuTraseiro  + gastoMedioPneuDianteiro + gastosPessoais

    var resultado = document.getElementById("resultado");
      resultado.innerHTML = "Gasto Total Diário: R$" + gastoTotalDiario.toFixed(2);
    // Atualize o elemento "resultado" com o resultado dos cálculos
}
