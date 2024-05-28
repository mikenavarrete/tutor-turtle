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
    if (!this.isModified('password')) return next();
    
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password,salt);
    this.password = hash;
});

studentSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;
