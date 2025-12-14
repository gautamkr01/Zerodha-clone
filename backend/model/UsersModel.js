const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { UsersSchema } = require('../schemas/UsersSchema');

UsersSchema.pre('save', async function () {
    if (!this.isModified('password')) return;

    this.password = await bcrypt.hash(this.password, 12);
});

const UsersModel = mongoose.model('User', UsersSchema);

module.exports = { UsersModel };
