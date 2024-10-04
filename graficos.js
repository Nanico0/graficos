const ctxPiza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPiza, {
    type: 'pie',
    data: {
        labels: ['Rock', 'Pop', 'Hip Hop', 'Eletrônica', 'Sertanejo', 'Funk', 'Outros'],
        dataets: [{
        label: 'Qual seu gênero musical favorito?',
            data: [45,30, 15, 10],
            backgroundColor: [
                '#F05454', '#30475E', 'DDDDDD', '#222831'
            ],
            borderColor: '#DDDDDD',
            borderWidth: 1
        }]
    },
    options: {
        responive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Qual seu gênero muical favorito?'
            }
        }
    }
});

//Gráfico de Barras
const ctxBarras = document.getElementById('graficoBarra').getContext('2d');
const graficosBarra = new Chart(ctxBarra, {
    type:'bar',
    data: {
        labels: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'],
        datasets: [{
            label: 'Usuarios ativos (em milhões)',
            data: [2800, 1500, 330, 810],
            backgroundColor: '#F05454',
            borderColor: '#30475E',
            borderWidth: 1
        }]
    },
    option: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Usuários Ativos nas Redes Sociais (milhões)'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});