//Destructure, Object, Array, Destructure Complex Object.

const person = { name: 'Jack William', age: 17, job: 'faacebooker', gfName: 'Ema Watson', address: 'Kochu Khet', phone: '01717112211', friends: ['Tom hancks', 'tom cruise', 'Tom yarn']};

const {phone, gfName, address, salary} = person;


const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}

const {leader} = complexObject.info;

// const gfName = person.gfName;
// const phone = person.phone;

// console.log(person.gfName);
// console.log(person.gfName);
// console.log(person.gfName);

// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);

const friends = ['Sakib Khan', 'Arman Khan', 'Aamir Khan', 'Salman Khan', 'Sharukh Khan']
const [chotoFriend, ...olderF] = friends;
console.log(olderF);
//const [chotoFriend, nextFriend, ...restFriends] = friends;
//console.log(chotoFriend, nextFriend);
//console.log(restFriends);