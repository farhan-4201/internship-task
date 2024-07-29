document.addEventListener('DOMContentLoaded', function () {
  // Fetch JSON data
  fetch(chrome.runtime.getURL('data.json'))
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          // Check if each key exists in the data before calling the respective functions
          if (data.sentiments) {
              createSentimentChart(data.sentiments);
          }
          if (data.hashtags) {
              createHashtagChart(data.hashtags);
          }
          if (data.profiles) {
              createProfileChart(data.profiles);
          }
          if (data.geolocations) {
              createGeoChart(data.geolocations);
          }
      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
});

// Function to create a sentiment chart
function createSentimentChart(sentiments) {
  var chart = new CanvasJS.Chart("sentimentChart", {
      animationEnabled: true,
      theme: "light2",
      title: {
          text: "Sentiment Analysis"
      },
      data: [{
          type: "column",
          dataPoints: sentiments.map(item => ({ label: item.label, y: item.value }))
      }]
  });
  chart.render();
}

// Function to create a hashtag chart
function createHashtagChart(hashtags) {
  var chart = new CanvasJS.Chart("hashtagChart", {
      animationEnabled: true,
      theme: "light2",
      title: {
          text: "Top Hashtags"
      },
      data: [{
          type: "pie",
          dataPoints: hashtags.map(item => ({ y: item.count, name: item.hashtag }))
      }]
  });
  chart.render();
}

// Function to create a user profile chart
function createProfileChart(profiles) {
  var chart = new CanvasJS.Chart("profileChart", {
      animationEnabled: true,
      theme: "light2",
      title: {
          text: "User Profiles"
      },
      data: [{
          type: "bar",
          dataPoints: profiles.map(item => ({ label: item.username, y: item.activity }))
      }]
  });
  chart.render();
}

// Function to create a geolocation chart
function createGeoChart(geolocations) {
  var chart = new CanvasJS.Chart("geoChart", {
      animationEnabled: true,
      theme: "light2",
      title: {
          text: "Geolocation Data"
      },
      data: [{
          type: "bubble",
          dataPoints: geolocations.map(item => ({ x: item.longitude, y: item.latitude, z: item.value }))
      }]
  });
  chart.render();
}
