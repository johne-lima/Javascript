// Mostra o calendário do mês atual
const calendarioEl = document.getElementById("calendario");
const hoje = new Date();
const anoAtual = hoje.getFullYear();
const mesAtual = hoje.getMonth(); // 0 = Janeiro

function criarCalendario(ano, mes) {
  calendarioEl.innerHTML = ""; // limpa antes de recriar

  const primeiroDia = new Date(ano, mes, 1);
  const ultimoDia = new Date(ano, mes + 1, 0);
  const totalDias = ultimoDia.getDate();

  for (let i = 1; i <= totalDias; i++) {
    const div = document.createElement("div");
    div.classList.add("dia");
    div.dataset.dataCompleta = new Date(ano, mes, i).toISOString().split('T')[0];
    div.textContent = i;
    calendarioEl.appendChild(div);
  }
}

criarCalendario(anoAtual, mesAtual);

function aplicarDestaques() {
  const dataInicio = new Date(document.getElementById("dataInicio").value);
  const dataFim = new Date(document.getElementById("dataFim").value);
  const dias = document.querySelectorAll(".dia");

  // Limpa estilos antigos
  dias.forEach(dia => {
    dia.classList.remove("laranja", "azul");
  });

  if (isNaN(dataInicio) || isNaN(dataFim)) {
    alert("Por favor, selecione duas datas válidas.");
    return;
  }

  // Cálculo da diferença
  const msPorDia = 1000 * 60 * 60 * 24;
  const diffEmDias = Math.abs((dataFim - dataInicio) / msPorDia);
  document.getElementById("diferencaDias").textContent = `Diferença: ${diffEmDias} dia(s)`;

  const dataMin = new Date(Math.min(dataInicio, dataFim));
  const dataMax = new Date(Math.max(dataInicio, dataFim));

  dias.forEach(dia => {
    const dataTexto = dia.dataset.dataCompleta;
    const dataAtual = new Date(dataTexto);

    if (dataAtual.toDateString() === dataMin.toDateString() || dataAtual.toDateString() === dataMax.toDateString()) {
      dia.classList.add("laranja");
    } else if (dataAtual > dataMin && dataAtual < dataMax) {
      dia.classList.add("azul");
    }
  });
}
