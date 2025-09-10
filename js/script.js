// Banco de dados simulado
const pacientes = [
  {
    id: 1,
    nome: "Ana Souza",
    idade: 34,
    sexo: "Feminino",
    patologia: "Infecção Bacteriana",
    neoplasia: "—",
  },
  {
    id: 2,
    nome: "Carlos Lima",
    idade: 45,
    sexo: "Masculino",
    patologia: "Neoplasia Benigna",
    neoplasia: "Adenoma",
  },
  {
    id: 3,
    nome: "Mariana Santos",
    idade: 29,
    sexo: "Feminino",
    patologia: "Virose",
    neoplasia: "—",
  },
  {
    id: 4,
    nome: "João Pereira",
    idade: 62,
    sexo: "Masculino",
    patologia: "Neoplasia Maligna",
    neoplasia: "Carcinoma",
  },
  {
    id: 5,
    nome: "Fernanda Alves",
    idade: 51,
    sexo: "Feminino",
    patologia: "Infecção Fúngica",
    neoplasia: "—",
  },
  {
    id: 6,
    nome: "Ricardo Gomes",
    idade: 37,
    sexo: "Masculino",
    patologia: "Infecção Bacteriana",
    neoplasia: "—",
  },
  {
    id: 7,
    nome: "Paula Fernandes",
    idade: 40,
    sexo: "Feminino",
    patologia: "Neoplasia Benigna",
    neoplasia: "Lipoma",
  },
  {
    id: 8,
    nome: "Eduardo Costa",
    idade: 28,
    sexo: "Masculino",
    patologia: "Virose",
    neoplasia: "—",
  },
  {
    id: 9,
    nome: "Beatriz Silva",
    idade: 55,
    sexo: "Feminino",
    patologia: "Neoplasia Maligna",
    neoplasia: "Linfoma",
  },
  {
    id: 10,
    nome: "Lucas Martins",
    idade: 33,
    sexo: "Masculino",
    patologia: "Infecção Fúngica",
    neoplasia: "—",
  },
  {
    id: 11,
    nome: "Juliana Rocha",
    idade: 47,
    sexo: "Feminino",
    patologia: "Virose",
    neoplasia: "—",
  },
  {
    id: 12,
    nome: "Pedro Almeida",
    idade: 60,
    sexo: "Masculino",
    patologia: "Infecção Bacteriana",
    neoplasia: "—",
  },
  {
    id: 13,
    nome: "Camila Castro",
    idade: 24,
    sexo: "Feminino",
    patologia: "Neoplasia Benigna",
    neoplasia: "Papiloma",
  },
  {
    id: 14,
    nome: "André Santos",
    idade: 52,
    sexo: "Masculino",
    patologia: "Neoplasia Maligna",
    neoplasia: "Sarcoma",
  },
  {
    id: 15,
    nome: "Tatiane Lopes",
    idade: 36,
    sexo: "Feminino",
    patologia: "Infecção Fúngica",
    neoplasia: "—",
  },
  {
    id: 16,
    nome: "Rafael Pinto",
    idade: 39,
    sexo: "Masculino",
    patologia: "Virose",
    neoplasia: "—",
  },
  {
    id: 17,
    nome: "Patrícia Souza",
    idade: 42,
    sexo: "Feminino",
    patologia: "Infecção Bacteriana",
    neoplasia: "—",
  },
  {
    id: 18,
    nome: "Thiago Oliveira",
    idade: 31,
    sexo: "Masculino",
    patologia: "Neoplasia Benigna",
    neoplasia: "Fibroma",
  },
  {
    id: 19,
    nome: "Roberta Lima",
    idade: 27,
    sexo: "Feminino",
    patologia: "Virose",
    neoplasia: "—",
  },
  {
    id: 20,
    nome: "Fábio Santos",
    idade: 63,
    sexo: "Masculino",
    patologia: "Neoplasia Maligna",
    neoplasia: "Melanoma",
  },
  {
    id: 21,
    nome: "Carolina Ramos",
    idade: 49,
    sexo: "Feminino",
    patologia: "Infecção Fúngica",
    neoplasia: "—",
  },
  {
    id: 22,
    nome: "Marcelo Cardoso",
    idade: 34,
    sexo: "Masculino",
    patologia: "Infecção Bacteriana",
    neoplasia: "—",
  },
  {
    id: 23,
    nome: "Vanessa Duarte",
    idade: 45,
    sexo: "Feminino",
    patologia: "Neoplasia Benigna",
    neoplasia: "Hemangioma",
  },
  {
    id: 24,
    nome: "Rodrigo Silva",
    idade: 30,
    sexo: "Masculino",
    patologia: "Virose",
    neoplasia: "—",
  },
  {
    id: 25,
    nome: "Simone Ferreira",
    idade: 58,
    sexo: "Feminino",
    patologia: "Neoplasia Maligna",
    neoplasia: "Leucemia",
  },
  {
    id: 26,
    nome: "Gustavo Lima",
    idade: 41,
    sexo: "Masculino",
    patologia: "Infecção Fúngica",
    neoplasia: "—",
  },
  {
    id: 27,
    nome: "Débora Costa",
    idade: 38,
    sexo: "Feminino",
    patologia: "Infecção Bacteriana",
    neoplasia: "—",
  },
  {
    id: 28,
    nome: "Felipe Rocha",
    idade: 26,
    sexo: "Masculino",
    patologia: "Virose",
    neoplasia: "—",
  },
  {
    id: 29,
    nome: "Isabela Martins",
    idade: 53,
    sexo: "Feminino",
    patologia: "Neoplasia Benigna",
    neoplasia: "Osteoma",
  },
  {
    id: 30,
    nome: "Murilo Andrade",
    idade: 46,
    sexo: "Masculino",
    patologia: "Neoplasia Maligna",
    neoplasia: "Glioblastoma",
  },
];

// Função para renderizar a tabela
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

// Inicializar tabela
renderTabela(pacientes);

// Filtro de busca (ajustado para buscar só no início da palavra)
document.getElementById("busca").addEventListener("input", function() {
    const filtro = document.getElementById("filtro").value;
    const valor = this.value.toLowerCase();
  
    const filtrados = pacientes.filter(p => {
      if (filtro === "id") return p.id.toString().startsWith(valor);
      if (filtro === "nome") return p.nome.toLowerCase().startsWith(valor);
      if (filtro === "patologia") {
        return (
          p.patologia.toLowerCase().startsWith(valor) ||
          p.neoplasia.toLowerCase().startsWith(valor)
        );
      }
    });
  
    renderTabela(filtrados);
  });

  let grafico; // variável global para atualizar o gráfico

  
  function atualizarGrafico(lista) {
    let infeccoes = 0;
    let neoplasias = 0;
  
    lista.forEach(p => {
      if (p.patologia.toLowerCase().includes("neoplasia")) {
        neoplasias++;
      } else {
        infeccoes++;
      }
    });
  
    const ctx = document.getElementById("graficoPizza");
  
    // Se já existe, destruímos antes de criar
    if (grafico) grafico.destroy();
  
    grafico = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Infecções", "Neoplasias"],
        datasets: [{
          data: [infeccoes, neoplasias],
          backgroundColor: ["#0d6efd", "#dc3545"]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "bottom" },
          tooltip: {
            callbacks: {
              label: function(context) {
                let total = infeccoes + neoplasias;
                let valor = context.raw;
                let perc = ((valor / total) * 100).toFixed(1) + "%";
                return `${context.label}: ${valor} (${perc})`;
              }
            }
          }
        }
      }
    });
  }
  
  // Inicializa tabela e gráfico completos
  renderTabela(pacientes);
  atualizarGrafico(pacientes);
  
  // Filtro de busca
  document.getElementById("busca").addEventListener("input", function() {
    const filtro = document.getElementById("filtro").value;
    const valor = this.value.toLowerCase();
  
    const filtrados = pacientes.filter(p => {
      if (filtro === "id") return p.id.toString().startsWith(valor);
      if (filtro === "nome") return p.nome.toLowerCase().startsWith(valor);
      if (filtro === "patologia") {
        return (
          p.patologia.toLowerCase().startsWith(valor) ||
          p.neoplasia.toLowerCase().startsWith(valor)
        );
      }
    });
  
    renderTabela(filtrados);
    atualizarGrafico(filtrados); // gráfico atualizado conforme filtro
  });
  
