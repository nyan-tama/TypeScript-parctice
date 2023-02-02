import { toNamespacedPath } from "path"

type User = {
    name: string
    age: number
    premiumUser: boolean
}

const data: string = `
tama,30,1
mike,23,1
pochi,20,0
`

const users: User[] = []
const lines = data.split("\n")
console.log(lines)

for (const line of lines) {
    if (line == "") {
        continue
    }
    const [name, ageString, premiumUserString] = line.split(",")
    const age = Number(ageString)
    const premiumUser = premiumUserString === "1"

    users.push({
        name,
        age,
        premiumUser
    })
}

console.log(users)
for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} (${user.age})はプレミアムユーザーです`)
    } else {
        console.log(`${user.name} (${user.age})はプレミアムユーザーではないです`)
    }
}