const express = require('express');
const cors = require('cors');
const axios = require('axios');


const app = express();
const PORT = 5000;
const FLASK_URL = 'http://localhost:5001/process';

app.use(cors());
app.use(express.json());

app.post('/api/prompt', async (req, res) => {
  try {
    // Forward request to Flask
    const flaskResponse = await axios.post(FLASK_URL, {
      prompts: req.body.prompts,
      style:req.body.style,
      theme:req.body.theme
    });

    // Return processed result to frontend
    res.json({
      message: 'Processing successful',
      result: flaskResponse.data.result
    });

  } catch (error) {
    // Handle different error scenarios
    const status = error.response?.status || 500;
    const message = error.response?.data?.message || 'Processing failed';

    res.status(status).json({
      message: `Flask API Error: ${message}`,
      details: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
