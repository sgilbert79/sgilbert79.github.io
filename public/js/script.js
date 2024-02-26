// Replace 'YOUR_API_KEY' with your actual YouTube Data API key
// Replace 'YOUR_PLAYLIST_ID' with your actual YouTube playlist ID
/*var apiKey = 'AIzaSyAFHkHrvOH3lHCp2BBjTlqhrGmahFW2Qpc';
var playlistId = 'https://www.youtube.com/watch?v=zKlRAdrE31E&list=PLYSY68Y6lhAml2gm0APmootjImdNR3dkE&index=8';

// Function to make the API request
document.addEventListener('DOMContentLoaded', function() {
  fetch('/api/videos/random')
    .then(response => response.json())
    .then(data => {
      // Use data to populate your HTML with video content
      console.log(data);
    })
    .catch(error => console.error('Error fetching data:', error));
});

function fetchPlaylist() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=' + playlistId + '&key=' + apiKey, true);

  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      var data = JSON.parse(this.response);
      console.log(data); // You can work with your data here
      // TODO: Display the playlist items on the page
    } else {
      // We reached our target server, but it returned an error
      console.error('Server reached, but it returned an error');
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
    console.error('Connection error');
  };

  request.send();
}

// Call the function to fetch your playlist
fetchPlaylist();*/
