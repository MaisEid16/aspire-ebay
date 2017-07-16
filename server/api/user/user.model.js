var mongoose = require('mongoose');
var bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;


var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


var UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
 
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        
    },
    password: {
        type: String, required: true,
          required: "Password failed validation. Must have number, upper and special, between 8-32 chars",
       
    },
    
},


UserSchema.pre('save', function (next) {
    var user = this;

    if (!user.isModified('password')) return next();
    
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);
        
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            
        
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) {return cb(err)};
        cb(null, isMatch);
    });
};

mongoose.model('User', UserSchema);

var User = mongoose.model('User');
