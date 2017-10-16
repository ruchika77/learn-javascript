function greetings() {
    return "Good morning Ruchi";
}

function add(a, b) {
    return a+b;
}
module.exports = {
    // key & value pair
    'test1': "I'm Ruchika, I love Coding",
    'test2': 1234,
    'test3': true,
    // key & value is a function add
    'add': add,
    // key & value is a function - greetings
    'greetings': greetings
};