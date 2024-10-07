// Gráficos de Pizza
const ctxPiza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPiza, {
    type: 'pie',
    data: {
        labels: ['Rock', 'Pop', 'Hip Hop', 'Eletrônica', 'Sertanejo', 'Funk', 'Outros'],
        dataets: [{
        label: 'Qual seu gênero musical favorito?',
            data: [28,11, 11, 6, 11, 11, 28],
            backgroundColor: [
                '#F05454', '#30475E', '#DDDDDD', '#222831' , '#7FFF00' , '#FF69B4', '#FFA500'
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
        labels: ['Diariamente', 'Algumas vezes por semana', 'raramente', 'mensalmente'],
        datasets: [{
            label: 'Com que frequência você ouve música?',
            data: [7800, 560, 1700, 0],
            backgroundColor: [
                '#F05454', '#30475E' , '#DDDDDD' , '#222831'
            ]0
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
                text: 'Com que frequência você ouve música?'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});