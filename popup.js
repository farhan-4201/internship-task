document.addEventListener('DOMContentLoaded', () => {
    const sentimentCtx = document.getElementById('sentimentChart').getContext('2d');
    const hashtagsCtx = document.getElementById('hashtagsChart').getContext('2d');
    const profilesCtx = document.getElementById('profilesChart').getContext('2d');
    const geolocationCtx = document.getElementById('geolocationChart').getContext('2d');
  
    const sentimentChart = new Chart(sentimentCtx, {
      type: 'bar',
      data: {
        labels: ['Positive', 'Negative', 'Neutral'],
        datasets: [{
          label: 'Sentiment Analysis',
          data: [12, 19, 3],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 205, 86, 0.2)'
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 205, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  
    const hashtagsChart = new Chart(hashtagsCtx, {
      type: 'pie',
      data: {
        labels: ['#hashtag1', '#hashtag2', '#hashtag3'],
        datasets: [{
          label: 'Top Hashtags',
          data: [10, 20, 30],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.label}: ${context.raw}%`;
              }
            }
          }
        }
      }
    });
  
    const profilesChart = new Chart(profilesCtx, {
      type: 'radar',
      data: {
        labels: ['User1', 'User2', 'User3'],
        datasets: [{
          label: 'User Profiles',
          data: [65, 59, 90],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
      },
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        }
      }
    });
  
    const geolocationChart = new Chart(geolocationCtx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Geolocation Data',
          data: [
            { x: 10, y: 20 },
            { x: 20, y: 30 },
            { x: 30, y: 40 }
          ],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          pointRadius: 5
        }]
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          }
        }
      }
    });
  });
  