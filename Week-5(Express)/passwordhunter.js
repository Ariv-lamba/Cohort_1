const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());

const users = [
    {
        username: "sonu",
        password: "12345"
    }
];
app.get("/", (req, res) => {
    res.send("Server is running!");
});

const sessions = {};

// LOGIN
app.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    // Find user
    const user = users.find(
        user => user.username === username && user.password === password
    );

    if (!user) {
        return res.status(401).send("Wrong username or password");
    }

    // Create fake session ID
    const sessionId = Math.random().toString(36).substring(2);

    // Store session on server
    sessions[sessionId] = username;

    // Send session ID to browser as cookie
    res.cookie("sessionId", sessionId);

    res.send("Login successful");
});


// PROTECTED ROUTE
app.get("/profile", (req, res) => {

    const sessionId = req.cookies.sessionId;

    if (!sessionId || !sessions[sessionId]) {
        return res.status(401).send("Please login first");
    }

    const username = sessions[sessionId];

    res.send(`Welcome ${username}`);
});


// LOGOUT
app.post("/logout", (req, res) => {

    const sessionId = req.cookies.sessionId;

    delete sessions[sessionId];

    res.clearCookie("sessionId");

    res.send("Logged out");
});


app.listen(3001, () => {
    console.log("Server running on port 3000");
});