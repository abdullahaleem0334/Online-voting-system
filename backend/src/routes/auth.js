const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');

// Register
router.post('/register', async (req, res) => {
  try {
    const { voter_id, name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.execute(
      'INSERT INTO voters (voter_id, name, email, password) VALUES (?, ?, ?, ?)',
      [voter_id, name, email, hashedPassword]
    );
    res.json({ message: 'Registered successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const [rows] = await db.execute('SELECT * FROM voters WHERE email = ?', [email]);
    if (!rows.length) return res.status(404).json({ error: 'User not found' });
    const valid = await bcrypt.compare(password, rows[0].password);
    if (!valid) return res.status(401).json({ error: 'Invalid password' });
    const token = jwt.sign({ id: rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, user: { id: rows[0].id, name: rows[0].name } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
