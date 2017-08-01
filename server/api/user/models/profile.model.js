const Signup = require('./signup.model');

class Profile extends Signup {
    constructor() {
        super();
        this.phoneNumber = undefined;
        this.birthDate = undefined;
        this.joinDate = undefined;
    }
}