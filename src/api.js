import axios from 'axios';

// const REACT_APP_AI_API_KEY_1 = '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';
export const fetchChatGPTResponse = async (userInput) => {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/completions',
            {
                "model": "davinci-002",
                "prompt": "What is the capital of France? The capital of France is",
                "temperature": 0.3,
                "max_tokens": 10,
                "top_p": 1.0,
                "frequency_penalty": 0.0,
                "presence_penalty": 0.0,
                "stop": ["."],
            },
            {
                headers: {
                    'Authorization': `Bearer ${REACT_APP_AI_API_KEY_1}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error("Error fetching response from ChatGPT:", error);
        return "Sorry, I couldn't complete the request.";
    }
};