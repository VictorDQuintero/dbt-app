const express = require('express');
const app = express();
app.use(express.json());

app.post('/recommend_skill', (req, res) => {
    const { situation } = req.body;
    res.json({ skill: 'Try mindfulness techniques for stress.'});

});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));