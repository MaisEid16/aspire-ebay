const entity = require('../../dataAccess/entities/user.entity');

class Signup {
    constructor() {
        this.email = undefined;
        this.firstName = undefined;
        this.lastName = undefined;
    }

    toEntity = () => {
        return Signup.toEntity(this);
    };

    static toEntity = (user) => {
        let e = new entity();
        e.email = user.email;
        e.firstName = user.firstName;
        e.lastName = user.lastName;
        e.salt = undefined;
        e.hash = undefined;
        return e;
    };
}

module.exports = Signup;
