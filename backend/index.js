const express = require('express');
const cors = require('cors');
const flashcardRoutes = require('./routes/flashcardRoutes');
require('./config/db'); // Ensure the database connection is established

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/flashcards', flashcardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
