const habitService = require(`../services/habitService`);

async function addHabit(req, res) {
    try {
        const userId = req.user.userId;
        const { title, description, type } = req.body;
        const habit = await habitService.addHabit(title, description, type, userId);
        await habitService.addHabitToDate(habit);
        res.status(201).json(habit);
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
}

async function completeHabit(req, res) {
    try {
        const userId = req.user.userId;
        const { habitId, completed } = req.body;
        const habit = await habitService.completeHabit(habitId, completed);
        res.status(200).json(habit);
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
}

async function deleteHabit(req, res) {
    try {
        const userId = req.user.userId;
        const { habitId } = req.body;
        const habit = await habitService.deleteHabit(userId, habitId);
        res.status(200).json(habit);
    } catch(error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { addHabit, completeHabit, deleteHabit };