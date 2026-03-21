const express = require('express');
const router = express.Router();
const db = require('../db');
const jwt = require('jsonwebtoken');

// Middleware
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};

router.post('/', auth, async (req, res) => {
  try {
    const { candidate_id } = req.body;
    const [voter] = await db.execute('SELECT * FROM voters WHERE id = ?', [req.user.id]);
    if (voter[0].has_voted) return res.status(400).json({ error: 'Already voted!' });
    await db.execute('INSERT INTO votes (voter_id, candidate_id) VALUES (?, ?)', [req.user.id, candidate_id]);
    await db.execute('UPDATE candidates SET votes = votes + 1 WHERE id = ?', [candidate_id]);
    await db.execute('UPDATE voters SET has_voted = true WHERE id = ?', [req.user.id]);
    res.json({ message: 'Vote cast successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
