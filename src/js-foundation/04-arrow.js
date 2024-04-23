const users = [
    {
        id: 1,
        name: "Erick"
    },
    {
        id: 2,
        name: "Joudy"
    }
];

const getUserById = (id, callback) => {
    const user = users.find( (user) => user.id === id);

    (user)
        ? callback(null, user)
        : callback (`User not found with id ${id}`);
}

module.exports = {
    getUserById,
}