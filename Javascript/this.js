let user = {
    name: 'Arsenii',
    age: 18,
    sayHi() {
        console.log(this.name); // if 'this' change to 'user' it won`t work
    }
};

let admin = user;
user = null;
admin.sayHi();