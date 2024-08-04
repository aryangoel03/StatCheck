const userService = require(`../services/userService`);

async function register(req, res) {
    try {
        const { username, email, password } = req.body;
        const user = await userService.registerUser(username, email, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function login(req, res) {
    try {
        const { username, password } = req.body;
        const token = await userService.authenticateUser(username, password);
        res.status(201).json(token);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { register, login };