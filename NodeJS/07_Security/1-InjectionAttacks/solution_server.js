// secure-server.js
const express = require('express');
const sqlite3 = require('sqlite3');
const bcrypt = require('bcrypt');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const db = new sqlite3.Database(':memory:');

db.serialize(async () => {
  db.run(`CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT UNIQUE,
    password TEXT,
    email TEXT,
    is_admin BOOLEAN DEFAULT 0,
    credit_card TEXT,
    api_key TEXT
  )`);

  db.run(`CREATE TABLE blog_posts (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    title TEXT,
    content TEXT,
    is_private BOOLEAN DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id)
  )`);  

  const adminHash = await bcrypt.hash('admin123', 10);
  const aliceHash = await bcrypt.hash('alice123', 10);
  
  db.run(`INSERT INTO users (username, password, email, is_admin, credit_card, api_key) VALUES 
    (?, ?, 'admin@blog.com', 1, '4532-xxxx-xxxx-9876', 'sk_live_admin_123456'),
    (?, ?, 'alice@blog.com', 0, '4532-xxxx-xxxx-5678', 'sk_live_user_123456')`,
    ['admin', adminHash, 'alice', aliceHash]);
    
    db.run(`INSERT INTO blog_posts (user_id, title, content) VALUES 
      (1, 'Welcome to our blog!', 'This is our first post. Feel free to test comment!')`);
});

app.use(express.static(path.join(__dirname)));


app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  
  if (!username || !password || 
      typeof username !== 'string' || 
      typeof password !== 'string') {
    return res.status(400).json({ error: 'Invalid input' });
  }
  // Use parametrized Query
  try {
    const query = `
      SELECT id, username, is_admin, email, password
      FROM users 
      WHERE username = ?
    `;

    db.get(query, [username], async (err, user) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      if (!user) return res.status(401).json({ error: 'Invalid credentials' });
      
      // Verify Passwords
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      
      // Don;t send password to the client
      delete user.password;
      res.json(user);
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});


app.post('/api/posts', (req, res) => {
  const post = {
    id: Math.round(Math.random()*1000),
    title: req.body.title,
    content: req.body.content,
    isPrivate: false
  }
  
  console.log(req.body);
  
  const id = Math.round(Math.random()*1000);
  // Parametrized Query
  const query = `INSERT INTO blog_posts (id, title, content) VALUES (${id}, ?, ?)`;

  console.log("Executing query:", query);

  const query2 = `SELECT * FROM blog_posts`;
  // db.exec allows running multiple query
  // db.run runs a single query
  db.run(query, [req.body.title, req.body.content], (err, results) => {
    console.log(results);
    if (err) return res.status(500).json({ error: err.message });

    db.all(query2, (err, posts) => {
      if (err) { return res.status(500).json({ error: err.message });}
      res.json(posts[posts.length -1] || []);
    });
  });
});


app.get('/api/posts/search', (req, res) => {
  const { keyword } = req.query;
  
  if (!keyword || typeof keyword !== 'string') {
    return res.status(400).json({ error: 'Invalid input' });
  }
  // Parametrized
  const query = `
    SELECT id, title, content 
    FROM blog_posts 
    WHERE title LIKE ? OR content LIKE ?
  `;
  
  const searchPattern = `%${keyword}%`;
  db.all(query, [searchPattern, searchPattern], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(results || []);
  });
});

app.get('/api/users/profile', (req, res) => {
  const { username } = req.query;
  
  if (!username || typeof username !== 'string') {
    return res.status(400).json({ error: 'Invalid input' });
  }
  
  const query = `
    SELECT username, email
    FROM users 
    WHERE username = ?
  `;
  
  db.get(query, [username], (err, user) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  });
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});