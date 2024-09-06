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

module.exports = { addHabit };