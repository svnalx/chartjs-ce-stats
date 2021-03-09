var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Teachers/Education', 'Veterans', 'First Responders', 'Community Giveback', 'Financial Literacy'],
        datasets: [{
          data: [1226.7, 51.5, 59, 762, 92.5],
          backgroundColor: [
            '#ff0000', '#00ff00', '#0000ff', '#ff0000', '#00ff00'
          ]
        }]
    },

    // Configuration options go here
    options: {}
});
