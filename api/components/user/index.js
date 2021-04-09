const controller = require('./controller')
const store      = require('../../../store/dbConfig')

module.exports = controller(store)
