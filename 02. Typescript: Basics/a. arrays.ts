const superHeroes: Array<string> = [];
const heroPower: Array<number> = [];

superHeroes.push("spider-man");
heroPower.push(80);

console.log(superHeroes);
console.log(heroPower);

type User = {
    name: string
    isActive:boolean 
}

const allUsers: Array<User> = [];  // Or ==> const allUsers: User[] = []
allUsers.push({name: "a", isActive:true});
console.log(allUsers)

export {}