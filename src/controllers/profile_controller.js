const connection = require('../database/connection');

module.exports = {
    async get_incidents(request, response) {
        const id = request.headers.authorization;
        const incidents = await connection('incidents').where('ong_id', id).select('*');
        return response.json(incidents);
    }
};