export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages, mode, notesContext } = req.body;
  
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'YOUR_OPENAI_API_KEY') {
    return res.status(500).json({ 
      error: { message: "OpenAI API key not configured." }
    });
  }

  let systemPrompt = 'You are a professional medical lab assistant. Only answer questions related to medical laboratory science, hematology, microbiology, biochemistry, or pathology. Refuse non-medical queries politely (e.g. "I can only answer medical and laboratory-related questions."). Explain clearly for students. Give structured answers (definition, principle, steps, clinical significance where applicable).';

  if (mode === 'notes') {
    systemPrompt = `You are a strict examination assistant. You MUST ONLY answer the user's question using the provided Notes Context below. If the answer cannot be found comprehensively in the notes, you MUST reply strictly with "I cannot find this in the notes. Please ask something covered in your provided material." Do not use any outside knowledge.\n\nNOTES CONTEXT:\n${notesContext || 'No notes provided.'}`;
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 1000
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI fetch error:', errorData);
      return res.status(response.status).json(errorData);
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('AI API Error:', error.message);
    return res.status(500).json({ error: { message: "Server error. Please try again later." } });
  }
}
