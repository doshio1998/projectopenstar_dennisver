const API_KEY = 'AIzaSyATktrlv6BD283anjBZgNomMQMsRya0Xc';

// Sample comments for testing
const sampleComments = [
  "This video is amazing! Where can I buy this product?",
  "Love the content, keep it up!",
  "Not really my style but good video",
  "求链接！种草了！",
  "This is terrible, waste of time",
  "I need this in my life, link please!",
  "Great quality content as always"
];

async function analyzeComments(comments) {
  const prompt = `
    Analyze the following YouTube comments and provide:
    1. Sentiment Scoring: percentage of Positive, Negative, Neutral comments
    2. Topic Clustering: what are the main topics fans are discussing
    3. Purchase Intent: identify buying signals and their frequency
    4. Atmosphere Summary: one sentence capturing the overall vibe

    Comments:
    ${comments.join('\n')}

    Respond in JSON format like this:
    {
      "sentiment": { "positive": 0, "negative": 0, "neutral": 0 },
      "topics": ["topic1", "topic2"],
      "purchaseIntent": { "level": "high/medium/low", "signals": ["signal1"] },
      "atmosphereSummary": "one sentence summary"
    }
  `;

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });

  const data = await response.json();
  const text = data.candidates[0].content.parts[0].text;
  console.log('Raw Gemini response:', text);
}

analyzeComments(sampleComments).catch(console.error);