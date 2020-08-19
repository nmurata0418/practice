const val = [1, 2, 3, 4, 5]

for(let i = 0; i < val.length; i++) {
    if(val[i] === 3) {
        console.log(val[i])
    }
}

const todos = [
    {
        id: 1,
        title: 'Go to school',
        completed: true,
    },
    {
        id: 2,
        title: 'Go to museam',
        completed: true,
    },
    {
        id: 3,
        title: 'Go to home',
        completed: false,
    },
]

for(let i = 0; i < todos.length; i++) {
    if(todos[i].completed === true) {
        console.log(i, todos[i].title)
    }
}


const age = function(num) {
    console.log(num())
}
// アロー関数にすると下記になる
// const age = num => console.log(num)
// 別の記述方法
// function age(num) {
// console.log(num)
// }

// function callbackAge() {
//     return '22'
// }

// age(callbackAge)
//別表記
age(function() {
    return 22
})


const a = function(num) {
    for(let todo in todos) {
        if(todos[todo].id === num()) {
        console.log(todos[todo].title)
        console.log(todos[todo].completed)
        }
    }
}

a(function() {
    return 3
})
//以下アロー関数での書き換え
// a(() => 3)

function doSomething(a, b, callback) {
    const result = callback (a, b)
    console.log(result)
}

function multiPly(a, b) {
    return a * b
}

doSomething(2, 2, multiPly)

todos.forEach(function(v, todo, ary) {
    console.log(v)
})
