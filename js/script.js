// Banco de dados simulado
const pacientes = [
  { id: 1, nome: "Ana Souza", idade: 34, sexo: "Feminino", patologia: "Infecção Bacteriana", neoplasia: "—" },
  { id: 2, nome: "Carlos Lima", idade: 45, sexo: "Masculino", patologia: "Neoplasia Benigna", neoplasia: "Adenoma" },
  { id: 3, nome: "Mariana Santos", idade: 29, sexo: "Feminino", patologia: "Virose", neoplasia: "—" },
  { id: 4, nome: "João Pereira", idade: 62, sexo: "Masculino", patologia: "Neoplasia Maligna", neoplasia: "Carcinoma" },
  { id: 5, nome: "Fernanda Alves", idade: 51, sexo: "Feminino", patologia: "Infecção Fúngica", neoplasia: "—" },
  { id: 6, nome: "Ricardo Gomes", idade: 37, sexo: "Masculino", patologia: "Infecção Bacteriana", neoplasia: "—" },
  { id: 7, nome: "Paula Fernandes", idade: 40, sexo: "Feminino", patologia: "Neoplasia Benigna", neoplasia: "Lipoma" },
  { id: 8, nome: "Eduardo Costa", idade: 28, sexo: "Masculino", patologia: "Virose", neoplasia: "—" },
  { id: 9, nome: "Beatriz Silva", idade: 55, sexo: "Feminino", patologia: "Neoplasia Maligna", neoplasia: "Linfoma" },
  { id: 10, nome: "Lucas Martins", idade: 33, sexo: "Masculino", patologia: "Infecção Fúngica", neoplasia: "—" },
  { id: 11, nome: "Juliana Rocha", idade: 47, sexo: "Feminino", patologia: "Virose", neoplasia: "—" },
  { id: 12, nome: "Pedro Almeida", idade: 60, sexo: "Masculino", patologia: "Infecção Bacteriana", neoplasia: "—" },
  { id: 13, nome: "Camila Castro", idade: 24, sexo: "Feminino", patologia: "Neoplasia Benigna", neoplasia: "Papiloma" },
  { id: 14, nome: "André Santos", idade: 52, sexo: "Masculino", patologia: "Neoplasia Maligna", neoplasia: "Sarcoma" },
  { id: 15, nome: "Tatiane Lopes", idade: 36, sexo: "Feminino", patologia: "Infecção Fúngica", neoplasia: "—" },
  { id: 16, nome: "Rafael Pinto", idade: 39, sexo: "Masculino", patologia: "Virose", neoplasia: "—" },
  { id: 17, nome: "Patrícia Souza", idade: 42, sexo: "Feminino", patologia: "Infecção Bacteriana", neoplasia: "—" },
  { id: 18, nome: "Thiago Oliveira", idade: 31, sexo: "Masculino", patologia: "Neoplasia Benigna", neoplasia: "Fibroma" },
  { id: 19, nome: "Roberta Lima", idade: 27, sexo: "Feminino", patologia: "Virose", neoplasia: "—" },
  { id: 20, nome: "Fábio Santos", idade: 63, sexo: "Masculino", patologia: "Neoplasia Maligna", neoplasia: "Melanoma" },
  { id: 21, nome: "Carolina Ramos", idade: 49, sexo: "Feminino", patologia: "Infecção Fúngica", neoplasia: "—" },
  { id: 22, nome: "Marcelo Cardoso", idade: 34, sexo: "Masculino", patologia: "Infecção Bacteriana", neoplasia: "—" },
  { id: 23, nome: "Vanessa Duarte", idade: 45, sexo: "Feminino", patologia: "Neoplasia Benigna", neoplasia: "Hemangioma" },
  { id: 24, nome: "Rodrigo Silva", idade: 30, sexo: "Masculino", patologia: "Virose", neoplasia: "—" },
  { id: 25, nome: "Simone Ferreira", idade: 58, sexo: "Feminino", patologia: "Neoplasia Maligna", neoplasia: "Leucemia" },
  { id: 26, nome: "Gustavo Lima", idade: 41, sexo: "Masculino", patologia: "Infecção Fúngica", neoplasia: "—" },
  { id: 27, nome: "Débora Costa", idade: 38, sexo: "Feminino", patologia: "Infecção Bacteriana", neoplasia: "—" },
  { id: 28, nome: "Felipe Rocha", idade: 26, sexo: "Masculino", patologia: "Virose", neoplasia: "—" },
  { id: 29, nome: "Isabela Martins", idade: 53, sexo: "Feminino", patologia: "Neoplasia Benigna", neoplasia: "Osteoma" },
  { id: 30, nome: "Murilo Andrade", idade: 46, sexo: "Masculino", patologia: "Neoplasia Maligna", neoplasia: "Glioblastoma" },
];

// Variáveis globais para armazenar as instâncias dos gráficos
let graficoGeral, graficoPatologias, graficoFaixaEtaria, graficoGenero;

// Função genérica para criar ou atualizar um gráfico
function criarOuAtualizarGrafico(ctx, chartInstance, chartConfig) {
  if (chartInstance) {
    chartInstance.destroy();
  }
  return new Chart(ctx, chartConfig);
}

// 1. FUNÇÃO PARA ATUALIZAR OS CARDS DE RESUMO
function atualizarCards(lista) {
  const totalPacientes = lista.length;
  const mediaIdade = totalPacientes > 0 ? (lista.reduce((acc, p) => acc + p.idade, 0) / totalPacientes).toFixed(1) : 0;
  const totalNeoplasias = lista.filter(p => p.patologia.toLowerCase().includes("neoplasia")).length;
  const totalInfeccoes = totalPacientes - totalNeoplasias;

  document.getElementById("total-pacientes").innerText = totalPacientes;
  document.getElementById("media-idade").innerText = mediaIdade;
  document.getElementById("total-neoplasias").innerText = totalNeoplasias;
  document.getElementById("total-infeccoes").innerText = totalInfeccoes;
}

// 2. FUNÇÃO PARA ATUALIZAR O GRÁFICO GERAL (Infecção vs Neoplasia)
function atualizarGraficoGeral(lista) {
  const neoplasias = lista.filter(p => p.patologia.toLowerCase().includes("neoplasia")).length;
  const infeccoes = lista.length - neoplasias;
  const ctx = document.getElementById("graficoGeral").getContext('2d');
  
  const config = {
    type: "pie",
    data: {
      labels: ["Infecções", "Neoplasias"],
      datasets: [{ data: [infeccoes, neoplasias], backgroundColor: ["#198754", "#dc3545"] }],
    },
    options: { 
        responsive: true,
        maintainAspectRatio: false // <-- Re-adicionado
    }
  };
  graficoGeral = criarOuAtualizarGrafico(ctx, graficoGeral, config);
}

// 3. FUNÇÃO PARA ATUALIZAR O GRÁFICO DE PATOLOGIAS
function atualizarGraficoPatologias(lista) {
    const contagem = lista.reduce((acc, p) => {
        acc[p.patologia] = (acc[p.patologia] || 0) + 1;
        return acc;
    }, {});
    const ctx = document.getElementById('graficoPatologias').getContext('2d');

    const config = {
        type: 'bar',
        data: {
            labels: Object.keys(contagem),
            datasets: [{
                label: 'Nº de Pacientes',
                data: Object.values(contagem),
                backgroundColor: ['#0d6efd', '#6c757d', '#198754', '#dc3545', '#ffc107', '#0dcaf0']
            }]
        },
        options: { 
            responsive: true,
            maintainAspectRatio: false, // <-- Re-adicionado
            indexAxis: 'y'
        }
    };
    graficoPatologias = criarOuAtualizarGrafico(ctx, graficoPatologias, config);
}

// 4. FUNÇÃO PARA ATUALIZAR O GRÁFICO POR FAIXA ETÁRIA
function atualizarGraficoFaixaEtaria(lista) {
    const faixas = { '20-29': 0, '30-39': 0, '40-49': 0, '50-59': 0, '60+': 0 };
    lista.forEach(p => {
        if (p.idade <= 29) faixas['20-29']++;
        else if (p.idade <= 39) faixas['30-39']++;
        else if (p.idade <= 49) faixas['40-49']++;
        else if (p.idade <= 59) faixas['50-59']++;
        else faixas['60+']++;
    });
    const ctx = document.getElementById('graficoFaixaEtaria').getContext('2d');

    const config = {
        type: 'bar',
        data: {
            labels: Object.keys(faixas),
            datasets: [{ label: 'Nº de Pacientes', data: Object.values(faixas), backgroundColor: '#6c757d' }]
        },
        options: { 
            responsive: true,
            maintainAspectRatio: false // <-- Re-adicionado
        }
    };
    graficoFaixaEtaria = criarOuAtualizarGrafico(ctx, graficoFaixaEtaria, config);
}

// 5. FUNÇÃO PARA ATUALIZAR O GRÁFICO POR GÊNERO
function atualizarGraficoGenero(lista) {
    const contagem = lista.reduce((acc, p) => {
        acc[p.sexo] = (acc[p.sexo] || 0) + 1;
        return acc;
    }, {});
    const ctx = document.getElementById('graficoGenero').getContext('2d');

    const config = {
        type: 'doughnut',
        data: {
            labels: Object.keys(contagem),
            datasets: [{ data: Object.values(contagem), backgroundColor: ['#0d6efd', '#ffc107'] }]
        },
        options: { 
            responsive: true,
            maintainAspectRatio: false // <-- Re-adicionado
        }
    };
    graficoGenero = criarOuAtualizarGrafico(ctx, graficoGenero, config);
}

// 6. FUNÇÃO PARA RENDERIZAR A TABELA
function renderTabela(lista) {
  const tabela = document.getElementById("tabela-body");
  tabela.innerHTML = "";
  lista.forEach((p) => {
    tabela.innerHTML += `
          <tr>
            <td>${p.id}</td>
            <td>${p.nome}</td>
            <td>${p.idade}</td>
            <td>${p.sexo}</td>
            <td>${p.patologia}</td>
            <td>${p.neoplasia}</td>
          </tr>
        `;
  });
}

// FUNÇÃO CENTRAL PARA ATUALIZAR TODO O DASHBOARD
function atualizarDashboard(lista) {
    atualizarCards(lista);
    atualizarGraficoGeral(lista);
    atualizarGraficoPatologias(lista);
    atualizarGraficoFaixaEtaria(lista);
    atualizarGraficoGenero(lista);
    renderTabela(lista);
}

// NOVA FUNÇÃO PARA CALCULAR E ATUALIZAR AS ESTATÍSTICAS
function atualizarEstatisticasIdade(lista) {
    if (lista.length === 0) {
        // Zera os valores se a lista estiver vazia
        document.getElementById("stat-media").innerText = 0;
        document.getElementById("stat-mediana").innerText = 0;
        document.getElementById("stat-moda").innerText = "N/A";
        document.getElementById("stat-variancia").innerText = "0.00";
        document.getElementById("stat-desvio-padrao").innerText = "0.00";
        return;
    }

    const idades = lista.map(p => p.idade);
    
    // Média (já calculada nos cards, mas recalculamos aqui para precisão)
    const media = idades.reduce((acc, idade) => acc + idade, 0) / idades.length;

    // Mediana
    const idadesOrdenadas = [...idades].sort((a, b) => a - b);
    const meio = Math.floor(idadesOrdenadas.length / 2);
    const mediana = idadesOrdenadas.length % 2 !== 0 
        ? idadesOrdenadas[meio] 
        : (idadesOrdenadas[meio - 1] + idadesOrdenadas[meio]) / 2;

    // Moda
    const contagem = idades.reduce((acc, idade) => {
        acc[idade] = (acc[idade] || 0) + 1;
        return acc;
    }, {});
    let moda = "N/A";
    let maxContagem = 0;
    for (const idade in contagem) {
        if (contagem[idade] > maxContagem) {
            moda = idade;
            maxContagem = contagem[idade];
        }
    }

    // Variância
    const variancia = idades.reduce((acc, idade) => acc + Math.pow(idade - media, 2), 0) / idades.length;

    // Desvio Padrão
    const desvioPadrao = Math.sqrt(variancia);

    // Atualiza o HTML
    document.getElementById("stat-media").innerText = media.toFixed(1);
    document.getElementById("stat-mediana").innerText = mediana;
    document.getElementById("stat-moda").innerText = moda;
    document.getElementById("stat-variancia").innerText = variancia.toFixed(2);
    document.getElementById("stat-desvio-padrao").innerText = desvioPadrao.toFixed(2);
}


// FUNÇÃO CENTRAL PARA ATUALIZAR TODO O DASHBOARD
function atualizarDashboard(lista) {
    atualizarCards(lista);
    atualizarEstatisticasIdade(lista); // <--- CHAMADA DA NOVA FUNÇÃO
    atualizarGraficoGeral(lista);
    atualizarGraficoPatologias(lista);
    atualizarGraficoFaixaEtaria(lista);
    atualizarGraficoGenero(lista);
    renderTabela(lista);
}

// LÓGICA DO FILTRO DE BUSCA
document.getElementById("busca").addEventListener("input", function () {
  const filtro = document.getElementById("filtro").value;
  const valor = this.value.toLowerCase();

  const filtrados = pacientes.filter((p) => {
    const valorCampo = p[filtro] ? p[filtro].toString().toLowerCase() : '';
    if (filtro === "patologia") {
        return p.patologia.toLowerCase().startsWith(valor) || p.neoplasia.toLowerCase().startsWith(valor);
    }
    return valorCampo.startsWith(valor);
  });

  atualizarDashboard(filtrados);
});

// INICIALIZAÇÃO DA PÁGINA
// Garante que o DOM está carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    atualizarDashboard(pacientes);
});