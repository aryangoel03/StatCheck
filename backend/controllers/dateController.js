const dateService = require(`../services/dateService`);

async function addDate(req, res) {
    try {
        const userId = req.user.userId;
        const updatedUser = await dateService.addDate(userId);
        res.status(201).json(updatedUser);
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

async function getDate(req, res) {
    try {
        const userId = req.user.userId; // Assuming userId is available in the request context
        const date = req.query.date; // Extract the date from the query parameters, ISOString format

        if (!date) {
            return res.status(400).json({ error: 'Date is required' });
        }

        const dateEntry = await dateService.getDate(userId, date);

        if (!dateEntry) {
            return res.status(404).json({ error: 'Date not found' });
        }

        res.status(200).json(dateEntry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { addDate, getDate };