let valor = 0;

function aumentarValor(evento) {
    valor = valor + 1;
    console.log(valor);
    document.getElementById("valor").textContent = valor;
}

function diminuirValor(evento) {
    valor = valor - 1;
    console.log(valor);
    document.getElementById("valor").textContent = valor;
}

function resetarValor(evento) {
    valor = 0;
    console.log(valor);
    document.getElementById("valor").textContent = valor;
}

// Quando clicar em aumentar, incrementa o valor 
document.getElementById("Aumentar").addEventListener("click", aumentarValor);
document.getElementById("Diminuir").addEventListener("click", diminuirValor);
document.getElementById("Resetar").addEventListener("click", resetarValor);

