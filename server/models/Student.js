const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const studentSchema = new Schema ({
    name:{type: String, required:true},
    email:{type: String, required:true, unique:true},
    password:{type: String, required:true},
    dateOfBirth: {type: Date, required:true},
    createdAt: {type: Date, default:Date.now},
});

studentSchema.pre('save',async function (next){
    if (!this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

studentSchema.methods.iscomparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;
