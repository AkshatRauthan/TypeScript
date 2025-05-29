type User = {
    name: string;
    email: string;
    isActive: boolean;
}


function createUser(user:User): User{
    return user;
}
createUser({name:"", email:"", isActive: true});


export {}