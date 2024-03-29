import React, { useState } from 'react';
import { fetchChatGPTResponse } from './api';

const App = () => {
    const [userInput, setUserInput] = useState('');
    const [response, setResponse] = useState('');

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = async () => {
        const chatResponse = await fetchChatGPTResponse(userInput);
        setResponse(chatResponse);
        console.log(">>"+process.env.REACT_APP_AI_API_KEY_1);
    };

    return (
        <div>
            <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Send</button>
            <p>Response: {response}</p>
        </div>
    );
};

export default App;
