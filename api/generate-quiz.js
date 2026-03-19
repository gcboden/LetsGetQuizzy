export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Grab the API key from Vercel's environment variables (never exposed to the browser)
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'API key not configured' });
    }

    try {
        const { topic, questionCount, difficulty, questionType } = req.body;

        // Validate inputs
        if (!topic) {
            return res.status(400).json({ error: 'Topic is required' });
        }

        const prompt = `Generate a ${difficulty} difficulty quiz about: ${topic}

Requirements:
- Create ${questionCount} questions
- Question type: ${questionType}
- Make questions educational and engaging
- Ensure correct answers are accurate

Response format (JSON only, no markdown):
{
  "title": "Quiz title",
  "questions": [
    {
      "question": "Question text",
      "type": "multiple-choice",
      "answers": ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
      "correctIndex": 0,
      "timeLimit": 20
    }
  ]
}

For true/false questions, use answers: ["True", "False"]`;

        // Call Anthropic — API key stays here on the server, never in the browser
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-sonnet-4-5',
                max_tokens: 4096,
                messages: [{ role: 'user', content: prompt }]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Anthropic API error:', errorData);
            return res.status(response.status).json({ error: 'Failed to generate quiz' });
        }

        const data = await response.json();
        // Strip markdown code fences if Claude wrapped the JSON in them
        const rawText = data.content[0].text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const quizData = JSON.parse(rawText);

        // Send the generated quiz back to the browser
        return res.status(200).json(quizData);

    } catch (error) {
        console.error('Server error:', error);
        return res.status(500).json({ error: 'Something went wrong generating the quiz' });
    }
}
