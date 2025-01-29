const express = require('express');
const app = express();
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'public' directory
app.use(express.static('public'));

// Route to render the form page
app.get('/', (req, res) => {
    res.render('form');
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    const formData = req.body;
    // Handle the form data here
    res.send('Form submitted successfully!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});