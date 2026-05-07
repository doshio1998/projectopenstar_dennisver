const API_KEY = '12886b9aa5msh966b0c879f240f9p13b26fjsn3f4c54dc7abf';

// Step 1: Fetch channel videos
async function getChannelVideos(channelId) {
  const response = await fetch('https://youtube138.p.rapidapi.com/channel/videos/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-rapidapi-host': 'youtube138.p.rapidapi.com',
      'x-rapidapi-key': API_KEY
    },
    body: JSON.stringify({
      id: channelId,
      filter: 'videos_latest',
      cursor: '',
      hl: 'en',
      gl: 'US'
    })
  });
  const data = await response.json();
  return data;
}

// Step 2: Fetch comments for a specific video
async function getVideoComments(videoId) {
  const response = await fetch(`https://youtube138.p.rapidapi.com/video/comments/?id=${videoId}&hl=en&gl=US`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-rapidapi-host': 'youtube138.p.rapidapi.com',
      'x-rapidapi-key': API_KEY
    }
  });
  const data = await response.json();
  return data;
}

// Main function
async function main() {
  console.log('Fetching channel videos...');
  const videosData = await getChannelVideos('UCJ5v_MCY6GNUBTO8-D3XoAg');
  
  // Get the first video ID
  const firstVideoId = videosData.contents[0].video.videoId;
  console.log('First video ID:', firstVideoId);
  
  console.log('Fetching comments...');
  const commentsData = await getVideoComments(firstVideoId);
  console.log(JSON.stringify(commentsData, null, 2));
}

main().catch(console.error);