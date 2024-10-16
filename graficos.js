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

// Gráficos de Pizza
const ctxPiza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPiza, {
    type: 'pie',
    data: {
        labels: ['Diariamente', 'Algumas vezes por semana', 'raramente', 'mensalmente'],
        dataets: [{
        label: 'Com que frequência você ouve música?',
            data: [78,17, 6],
            backgroundColor: [
                '#F05454', '#30475E', '#DDDDDD'
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
                text: 'Com que frequência você ouve música?'
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
            label: 'Qual é a sua banda ou artita favorito?',
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

// Gráficos de Pizza
const ctxPiza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPiza, {
    type: 'pie',
    data: {
        labels: ['Sim', 'Não'],
        dataets: [{
        label: 'Você toca algum intrumento musical?',
            data: [17,83],
            backgroundColor: [
                '#F05454', '#30475E'
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
                text: 'Você toca algum instrumento musical?'
            }
        }
    }
});

// Gráficos de Pizza
const ctxPiza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPiza, {
    type: 'pie',
    data: {
        labels: ['Sim', 'Não', 'Raramente'],
        dataets: [{
        label: 'Você costuma ir a shows ou festivais ?',
            data: [5,6; 55,6; 38,9],
            backgroundColor: [
                '#F05454', '#30475E', '#DDDDDD'
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
                text: 'Você costuma ir a shows ou festivais?'
            }
        }
    }
});

// Gráficos de Pizza
const ctxPiza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPiza, {
    type: 'pie',
    data: {
        labels: ['Sozinho', 'Em grupo'],
        dataets: [{
        label: 'Você prefere ouvir músicas sozinho ou em grupo?',
            data: [89; 11],
            backgroundColor: [
                '#F05454', '#30475E'
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
                text: 'Você prefere ouvir músicas sozinho ou em grupo?'
            }
        }
    }
});

// Gráficos de Pizza
const ctxPiza = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctxPiza, {
    type: 'pie',
    data: {
        labels: ['Sim', 'não'],
        dataets: [{
        label: 'Você ja produziu alguma música?',
            data: [5, 95],
            backgroundColor: [
                '#F05454', '#30475E'
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
                text: 'Você ja produziu alguma música?'
            }
        }
    }
});