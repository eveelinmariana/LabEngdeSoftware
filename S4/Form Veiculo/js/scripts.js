function calcularDados() {
    const { value: marca } = document.getElementById("marca");
    const { value: modelo } = document.getElementById("modelo");
    const { value: ano } = document.getElementById("ano");
    const { value: cor } = document.getElementById("cor");
    const { value: kilometragem } = document.getElementById("kilometragem");
    const { value: valorFipe } = document.getElementById("valor_fipe");

    const carro = {
        marca,
        modelo,
        ano: parseInt(ano),
        cor,
        kilometragem: parseInt(kilometragem),
        valorFipe: parseFloat(valorFipe),

        anosUtilizacao: () => {
            const anoAtual = new Date().getFullYear();
            return anoAtual - carro.ano;
        },

        valorMercado: () => {
            const { kilometragem, valorFipe } = carro;

            if (kilometragem <= 30000) {
                return valorFipe * 1.1;
            } else if (kilometragem <= 50000) {
                return valorFipe;
            } else {
                return valorFipe * 0.9;
            }
        }
    };

    const anosUtilizacao = carro.anosUtilizacao();
    const valorMercado = carro.valorMercado();

    document.getElementById("anos_utilizacao").textContent = `${anosUtilizacao} anos!`;
    document.getElementById("valor_mercado").textContent = valorMercado.toFixed(2);
}
