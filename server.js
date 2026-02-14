
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// 1. IMPORT MODELS ONCE (Capitalized to match your routes)
const Complaint = require('./models/complaint');
const Admin = require('./models/admin');

// --- MIDDLEWARE ---
app.use(cors({
    origin: '*', // This allows all pages to talk to the server
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());
app.use(express.static('public'));

// --- DATABASE CONNECTION ---
const mongoURI = "mongodb+srv://admin1:admin@cluster0.gcqfgxj.mongodb.net/ComplaintBoxDB?retryWrites=true&w=majority";

mongoose.connect(mongoURI)
  .then(() => {
      console.log("🚀 Success! ComplaintBoxDB is now active.");
      createAdmin(); // Runs the seed function once connected
  })
  .catch(err => console.log("❌ Connection failed:", err));

// --- SEED FUNCTION (Setup Initial Admin) ---
async function createAdmin() {
    try {
        const found = await Admin.findOne({ username: "admin1" });
        if (!found) {
            await Admin.create({ username: "admin1", password: "password123" });
            console.log("⭐ Admin account 'admin1' created for testing!");
        }
    } catch (err) {
        console.log("Admin seeding error:", err);
    }
}

// --- ROUTES ---

// Submit Complaint
app.post('/api/register', async (req, res) => {
    try {
        const newComplaint = new Complaint({
            title: req.body.title,
            description: req.body.description,
            refId: req.body.refId
        });
        await newComplaint.save();
        res.status(201).json({ success: true });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.post('/api/admin/login', async (req, res) => {
    const { username, password } = req.body;
    console.log("Login Attempt:", username, password); // DEBUG LINE 1

    try {
        const adminUser = await Admin.findOne({ username, password });
        console.log("User Found in DB:", adminUser); // DEBUG LINE 2

        if (adminUser) {
            res.json({ success: true });
        } else {
            res.status(401).json({ success: false });
        }
    } catch (err) {
        console.error('Admin login error:', err);
        res.status(500).json({ error: "Server error" });
    }
});

// Check Status
app.get('/api/status/:refId', async (req, res) => {
    try {
        const complaintData = await Complaint.findOne({ refId: req.params.refId });
        if (!complaintData) return res.status(404).json({ message: "Not found" });
        res.json(complaintData);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});


// Admin Dashboard - Get All
app.get('/api/admin/all', async (req, res) => {
    try {
        const all = await Complaint.find().sort({ createdAt: -1 });
        res.json(all);
    } catch (err) {
        res.status(500).json({ error: "Fetch failed" });
    }
});

// --- START SERVER ---
app.listen(5000, () => console.log(`📡 Server listening on port 5000`));