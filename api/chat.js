export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;

  // Validation
  if (!message || !message.trim()) {
    return res.status(400).json({ error: "Message is required" });
  }

  if (message.length > 500) {
    return res.status(400).json({ error: "Message too long (max 500 characters)" });
  }

  const trimmedMessage = message.trim();
  console.log("User:", trimmedMessage);

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    console.error("OPENROUTER_API_KEY is missing");
    return res.status(500).json({ error: "Server busy, try again" });
  }

  const systemPrompt = `You are a BMLT practical assistant. Always respond in this format:
1. Principle (1 line)
2. Procedure (3–4 steps)
3. Viva questions (2 points)
4. Precautions (2 points)
Keep answers short and exam-focused.`;

  const models = [
    'meta-llama/llama-3.1-8b-instruct:free',
    'openai/gpt-3.5-turbo'
  ];

  async function callOpenRouter(model) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          'HTTP-Referer': 'https://lab-master.vercel.app', // Optional for OpenRouter
          'X-Title': 'Lab Master'
        },
        signal: controller.signal,
        body: JSON.stringify({
          model: model,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: trimmedMessage }
          ],
          temperature: 0.7,
          max_tokens: 500
        })
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API error (${response.status}): ${errorText}`);
      }

      const data = await response.json();
      const content = data?.choices?.[0]?.message?.content?.trim();
      
      if (!content) {
        throw new Error("Empty response content");
      }

      return content;
    } catch (err) {
      clearTimeout(timeoutId);
      throw err;
    }
  }

  let finalContent = null;
  let lastError = null;

  // Try primary model, then fallback
  for (const model of models) {
    try {
      finalContent = await callOpenRouter(model);
      if (finalContent) break;
    } catch (err) {
      console.warn(`Failed to call ${model}:`, err.message);
      lastError = err;
    }
  }

  if (finalContent) {
    console.log("AI:", finalContent);
    return res.status(200).json({ content: finalContent });
  } else {
    console.error("All models failed:", lastError?.message);
    return res.status(500).json({ error: "AI is busy, try again" });
  }
}
