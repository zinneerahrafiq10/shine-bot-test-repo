const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


app.post('/api/click', (req, res) => {
  res.json({ message: 'Button clicked!' });
});

app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
