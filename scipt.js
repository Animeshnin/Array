const users = [
    {
        name: 'Александр',
        age: 28
    },
    {
        name: 'Максим',
        age: 30
    },
    {
        name: 'Ильдар',
        age: 40
    },

]

// Поиск пользователя и возврат его позицию массиве

console.log(
    users.findIndex((element) => element.name === 'Ильдар')
)