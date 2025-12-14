const { model } = require('mongoose');

const { HoldingsSchema } = require('../schemas/HodlingsSchema');

const HoldingsModel = new model('holding', HoldingsSchema);

module.exports = { HoldingsModel };
