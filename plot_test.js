TESTER = document.getElementById('tester');

var layout = {
  title: 'Title of the Graph',
  xaxis: {
    title: 'x-axis title'
  },
  yaxis: {
    title: 'y-axis title'
  },
  margin: {t:40}
};

Plotly.newPlot( TESTER, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }],
    layout);

/* Current Plotly.js version */
console.log( Plotly.BUILD );