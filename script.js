async function fetchRandomMeme() {
    try {
      const response = await fetch('https://meme-api.com/gimme/wholesomememes');
      const data = await response.json();
      document.getElementById('memeImage').src = data.url;
    } catch (error) {
      console.error('Error fetching random meme:', error);
    }
  }
  
  
  async function fetchRandomJoke() {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
      const data = await response.json();
      document.getElementById('jokeText').textContent = data.setup + ' ' + data.punchline;
    } catch (error) {
      console.error('Error fetching random joke:', error);
    }
  }
  // Function to post the meme or joke content on Twitter
    function postToTwitter(type) {
    const content = (type === 'meme') ? document.getElementById('memeImage').src : document.getElementById('jokeText').textContent;
    if (content) {
      const tweetText = encodeURIComponent(content);
      const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
      window.open(tweetUrl, '_blank');
    } else {
      console.error('Cannot post empty content.');
    }
  }
  