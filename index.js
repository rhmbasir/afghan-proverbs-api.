import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import proverb from './routes/proverbs.js';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


// Route
app.use('/proverbs', proverb);
app.use('/proverbs', proverb);

//Root rout
app.get('/', (req,res)=>{
    res.redirect('/proverbs');
});
app.listen(PORT, () => {
  console.log(`Afghan Proverbs API running at http://localhost:${PORT}`);
});
