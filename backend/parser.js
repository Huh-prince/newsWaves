// server.js
const express = require('express');
const cors = require('cors');
const Mercury = require('@postlight/mercury-parser');

// cheerio

const app = express();
app.use(cors());

// app.get("/",(req,res)=>{
//     // console.log(err);
//     res.send("heyy")
    
// })

app.get('/api/parse', async (req, res) => {
  const { url } = req.query;
  if (!url) {
    return res.status(400).json({ error: 'Missing URL' });
  }

  try {
    const result = await Mercury.parse(url);
    res.json({
      title: result.title,
      content: result.content, 
      textContent: result.textContent, // plain text content
    });
  } catch (error) {
    console.error('Parsing failed:', error.message);
    res.status(500).json({ error: 'Failed to parse article' });
  }
});

const PORT = 2020;
app.listen(PORT, () => {
  console.log(`Article parser server running at http://localhost:${PORT}`);
});
