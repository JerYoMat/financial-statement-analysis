const chartData = {
  labels: ['EBIT/Total Assets', 'Net Sales/Total Assets', 'Book Value/Total Liabilities', 'Working Capital/Total Assets', 'Retained Earnings/Total Assets'],
  datasets: [
    {
      label: 'Company',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [1, 2, 3, 4, 5]
    },
    {
      label: 'Industry',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [6, 7, 8, 9, 10]
    }
  ]
};

const chartOptions= {
  tooltips: {
      callbacks: {
          label: function(tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label || '';
              if (label) {
                  label += ': ';
              }
              label += Math.round(tooltipItem.yLabel * 100) / 100;
              return label;
          }
      }
  },
  scale: {
    ticks: {
        beginAtZero: true,
        min: 0,
       
    }
}
}

export {chartData, chartOptions}