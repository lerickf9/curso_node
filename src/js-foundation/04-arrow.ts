interface User{
    id: number,
    name: string;
}

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

export const getUserById = (id: number, callback: (err?: string, user?: User )=> void) =>{
    const user = users.find( (user) => user.id === id);

    (user)
        ? callback(undefined, user)
        : callback (`User not found with id ${id}`);
}

