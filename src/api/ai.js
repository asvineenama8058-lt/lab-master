/**
 * Service to handle AI responses using the local Express backend.
 */

export const fetchAIResponse = async (userQuery, history = [], options = {}) => {
  try {
    const messages = [
      ...history.map(msg => ({
        role: msg.role === "user" ? "user" : "assistant",
        content: msg.content
      })),
      { role: "user", content: userQuery }
    ];

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        messages: messages,
        mode: options.mode,
        notesContext: options.notesContext
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || "Failed to fetch from backend");
    }

    const data = await response.json();
    return data.choices[0].message.content;

  } catch (error) {
    console.error("AI API Error:", error);
    throw new Error(error.message || "Sorry, I'm having trouble connecting to my AI brain right now. Please try again later.");
  }
};
