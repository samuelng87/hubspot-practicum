        // Start timer immediately
        (function() {
            let timeLeft = 20; // 20 seconds
            const timerElement = document.getElementById('timer-20c');
            
            const timer = setInterval(function() {
                let minutes = Math.floor(timeLeft / 60);
                let seconds = timeLeft % 60;
                
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                
                timerElement.textContent = `${minutes}:${seconds}`;
                
                timeLeft--;
                
                if (timeLeft < 0) {
                    clearInterval(timer);
                    timerElement.textContent = "LIVE NOW";
                }
            }, 1000);
        })();


document.addEventListener('DOMContentLoaded', function() {
  const video = document.querySelector('#myVideo');
  const playButton = document.querySelector('#playButton');
  const muteButton = document.querySelector('#muteButton');

  // Verify elements exist
  if (!video) {
    console.error('Error: Video element not found');
    return;
  }
  if (!playButton) {
    console.error('Error: Play button not found');
    return;
  }
  if (!muteButton) {
    console.error('Error: Mute button not found');
    return;
  }

  // Attach click event to play button for video playback
  playButton.addEventListener('click', function() {
    video.play()
      .then(() => {
        console.log('Video started playing with sound');
        muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
      })
      .catch(error => {
        console.error('Unmuted playback failed:', error.message);
        // Fallback: Mute and try again
        video.muted = true;
        video.play()
          .then(() => {
            console.log('Video started playing (muted fallback)');
            muteButton.textContent = 'Unmute';
          })
          .catch(err => console.error('Muted playback failed:', err.message));
      });
  });

  // Toggle mute/unmute on mute button click
  muteButton.addEventListener('click', function() {
    video.muted = !video.muted;
    muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
    console.log(video.muted ? 'Video muted' : 'Video unmuted');
  });

  // Simulate play button click for autoplay
  try {
    playButton.click();
    console.log('Play button click simulated');
  } catch (error) {
    console.error('Failed to simulate play button click:', error.message);
  }
});



