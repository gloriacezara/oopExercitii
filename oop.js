// const userOne = {
//     username: 'ryu',
//     email: 'ryu@thenetninja.co.uk',
//     login (){
//         console.log('the user logged in');
//     },
//     logout (){
//         console.log('the user logged out');
//     }
// };
//
// console.log(userOne.email, userOne.username);
// userOne.login();
//
// const userTwo = {
//     username: 'chun li',
//     email: 'chun.li@thenetninja.co.uk',
//     login (){
//         console.log('the user logged in');
//     },
//     logout (){
//         console.log('the user logged out');
//     }
// };
// console.log(userTwo.email, userTwo.username);
// userTwo.login();
//
// const userThree = new User('shaun@thenetninja.co.uk', 'shaun');

//1 - crete a new empty object
//2 - bind the value of 'this' to the new empty object
//3 - call the constructor function to 'build' the object

// class User{
//     constructor(username, email) {
//         //set up propreties
//         this.username = username;
//         this.email = email;
//         this.score = 0;
//     }
//     login(){
//         console.log(`${this.username} just logged in`);
//         return this;
//     }
//     logout(){
//         console.log(`${this.username} just logged out`);
//         return this;
//     }
//     incScore(){
//         this.score += 1;
//         console.log(`${this.username} has a score of ${this.score}`);
//         return this;
//     }
// }
//
// class Admin extends User{
//     constructor(username, email, title) {
//         super (username, email);
//         this.title = title;
//     }
//     deleteUser(user){
//         users = users.filter(u => u.username !== user.username)
//     }
// }


//alta varianta mai noua doar cu o functie//
function User (username, email){
    this.username = username;
    this.email = email;
    this.login = function (){
        console.log(`${this.username} just logged in`);
    }
    this.logout = function (){
        console.log(`${this.username} just logged out`);
    }
}
const userOne = new User ('mario', 'mario@thenetninja.co.uk');
const userTwo = new User ('luigi', 'luigi@thenetninja.co.uk');

console.log(userOne, userTwo);
userOne.login();

// const userThree = new User('shaun', 'shaun@thehetninja.co.uk');
// console.log(userOne, userTwo, userThree);
//
// let users = [userOne, userTwo, userThree];
// console.log(users);
//
// userThree.deleteUser(userTwo);
// console.log(users);
//
// userOne.deleteUser(userThree);
// console.log(users)