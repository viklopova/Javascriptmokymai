// 1 uzduotis
function sayLetter(callback) {
    setTimeout(callback, 2000);
}

function firstAsyncFunction() {
        console.log('Trololo');
}

sayLetter(firstAsyncFunction)

// 2uzduotis

const people = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (response.status !== 200) {
        throw new Error ('nepavyko gauti duomenu')
    }

    return responde.json()
}

people()
    .then(data => console.log(data))
    .catch(error => console.log(error));



// 3uzduotis

function arLyginiai(mas, callback) {
    for (let item of mas) {
        callback(item)
    }
}

function callback(skaicius) {
    if (skaicius%2===0) {
        console.log('lyginis')
    } else {
        console.log ('nelyginis')
    };
}

let masyvas = [2,5,4,3,2,7,6,8];
arLyginiai(masyvas,callback)

//7 uzduotis
let age = [14,17,18,19,20,21]

function checkAge (mas, callback) {
    for (let item of mas) {
        callback (item)
    }
};

function checkUserAge (checkAge) {
    return new Promise((resolve, reject) => {
        if (age>18) {
            resolve('Vartotojas pilnametis')
        } else {
            reject('Vartototjui nėra 18')
        }
})
};

checkUserAge(true)
.then(message => console.log(message))
.catch(error => console.log(error));

checkUserAge(false)
.then(message => console.log(message))
.catch(error => console.log(error));
