import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '../proverbs.json');

// Utility functions
const loadProverbs = () => {
  try {
    const data = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error loading proverbs:', err);
    return [];
  }
};

const saveProverbs = (data) => {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Error saving proverbs:', err);
  }
};

// Route: GET / - List all proverbs
router.get('/', (req, res) => {
  const proverbs = loadProverbs();
  res.render('proverbs', { proverbs });
});

// Route: GET /:id - View a single proverb
router.get('/:id', (req, res) => {
  const proverbs = loadProverbs();
  const id = parseInt(req.params.id);
  const proverb = proverbs.find(p => p.id === id);

  if (!proverb) {
    return res.status(404).send('Proverb not found');
  }

  res.render('proverb', { proverb });
});

// Route: POST / - Add a new proverb
router.post('/', (req, res) => {
  const proverbs = loadProverbs();
  const newProverb = {
    id: Date.now(),
    ...req.body,
  };

  proverbs.push(newProverb);
  saveProverbs(proverbs);

  res.status(201).json(newProverb);
});

// Route: PUT /:id - Update existing proverb
router.put('/:id', (req, res) => {
  const proverbs = loadProverbs();
  const id = parseInt(req.params.id);
  const index = proverbs.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Proverb not found' });
  }

  proverbs[index] = { ...proverbs[index], ...req.body };
  saveProverbs(proverbs);

  res.json(proverbs[index]);
});

// Route: DELETE /:id - Delete a proverb
router.delete('/:id', (req, res) => {
  const proverbs = loadProverbs();
  const id = parseInt(req.params.id);
  const updated = proverbs.filter(p => p.id !== id);

  if (updated.length === proverbs.length) {
    return res.status(404).json({ message: 'Proverb not found' });
  }

  saveProverbs(updated);
  res.json({ message: 'Proverb deleted successfully' });
});

export default router;