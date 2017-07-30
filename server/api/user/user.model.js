const entity = require('../../dataAccess/entities/user.entity');

class User {
    constructor() {
        this.email = undefined;
        this.firstName = undefined;
        this.lastName = undefined;
    }

    toEntity = () => {
        return User.toEntity(this);
    };

    static toEntity = (user) => {
        let e = new entity();
        e.email = user.email;
        e.firstName = user.firstName;
        e.lastName = user.lastName;
        e.salt = null;
        e.hash = null;
        return e;
    };

    static toModel = (e) => {
        let user = new User();
        user.email = e.email;
        user.firstName = e.firstName;
        user.lastName = e.lastName;
        return user;
    }
}

module.exports = User;