const API_KEY = 'AIzaSyAeKG4T8JUTPnv8NU1zIic3Z-zAfFsrrdM'; 

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
  console.log('--- 正在连接 Gemini 2.0 Flash ---');

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

  // 使用 v1beta 路径，并确保模型名称正确
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ 
          parts: [{ text: prompt }] 
        }],
        generationConfig: {
          // 注意这里必须是驼峰命名法 (CamelCase)
          responseMimeType: "application/json"
        }
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(`❌ API 报错 (${response.status}):`);
      console.error(JSON.stringify(data, null, 2));
      return;
    }

    // 解析结果
    if (data.candidates && data.candidates[0].content) {
      const rawText = data.candidates[0].content.parts[0].text;
      
      // 有时候模型还是会返回带有 ```json 的字符串，我们需要清理一下
      const cleanJsonString = rawText.replace(/```json|```/g, "").trim();
      const result = JSON.parse(cleanJsonString);
      
      console.log('✅ 分析成功！结果如下：');
      console.log(JSON.stringify(result, null, 2));
    } else {
      console.log('⚠️ 未获得有效内容，响应详情:', JSON.stringify(data, null, 2));
    }

  } catch (error) {
    console.error('💥 脚本解析或执行错误:');
    console.error(error.message);
  }
}

analyzeComments(sampleComments);