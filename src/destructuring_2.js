console.log(first, last, fb, age);


function post(url, {data: { firstname, lastname}, cashe}) {
    console.log(firstname, lastname, cashe);
}

let result = post('api/users',  {data: user, cache: false});



function getUserInfo() {
    return {
        firstname: 'John',
        lastname: 'Doe',
        social: {
            facebook: 'jokndoe',
            twitter: 'jdoe'
        }
    };
}

let {firstname, lastname, social: { twitter} } = getUserInfo();

console.log(firstname, lastname, twitter);