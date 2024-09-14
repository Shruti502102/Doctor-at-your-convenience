const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
require("dotenv").config(); // make sure you have this to use environment variables

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("public")); // Serve static files from "public" directory

// Endpoint to analyze patient entries
app.post("/api/analyze", async (req, res) => {
    const userInput = req.body.input;

    try {
        // Call the ChatGPT API
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: `Here are the patient's symptoms and history:\n${userInput}\n\nCan you provide potential treatments and prevention measures?`
                }
            ]
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const recommendations = response.data.choices[0].message.content; // Extract the response from ChatGPT
        res.json({ recommendations });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error communicating with the chatbot' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
