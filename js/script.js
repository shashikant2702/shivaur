// List of video file paths from your 'videos' folder
const videos = [
    "videos/video1.mp4", // Replace with the path to your first video
    "videos/video2.mp4", // Replace with the path to your second video
    "videos/video3.mp4", // Replace with the path to your third video
    "videos/video4.mp4", // Replace with the path to your fourth video
    "videos/video5.mp4"  // Replace with the path to your fifth video
];

// Variable to keep track of the current video being played
let currentVideoIndex = 0;

// Get the video player element by its ID
const videoPlayer = document.getElementById('videoPlayer');

// Function to play the next video in the list
function playNextVideo() {
    // Increment the video index
    currentVideoIndex++;

    // Check if the index exceeds the length of the video array
    if (currentVideoIndex >= videos.length) {
        currentVideoIndex = 0; // Reset to the first video if all videos have played
    }

    // Set the new video source and play the video
    videoPlayer.src = videos[currentVideoIndex];
    videoPlayer.play();
}

// Event listener for when the video ends, triggering the next video
videoPlayer.addEventListener('ended', playNextVideo);
