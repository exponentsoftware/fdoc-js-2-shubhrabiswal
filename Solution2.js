const users = [
{
    name:'Brook', 
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
},
{
    name:'Alex', 
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
}, 
{
    name:'David', 
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
}, 
{
    name:'John', 
    scores:85,
    skills:['HTM'],
    age:25
},
{
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
},
{
    name:'Martha', 
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
},
{
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
}
];

// Write a function which filter users who has  scoresGreaterThan85, 

function scoresGreaterThan85(users){
    let output = []
    for(let obj of users){
        // console.log(obj)
        if(obj.scores>85){
            output.push(obj)
        }
    }
    return output
}

console.log(scoresGreaterThan85(users))


// Write a function which addUser  to the user array only if 
// the user does not exist.


function addUser(users,inp){
    for(let obj of users){
        if(inp.name == obj.name){
            return "User already exists"
        }
    }
    users.push(inp)
    console.log("new user added")
    return users
}

let inp= {
    name: 'Thomas B',
    scores: 90,
    skills: [ 'HTM', 'CSS', 'JS' ],
    age: 20
  }
console.log(addUser(users,inp))

// console.log(users)

// Write a function which addUserSkill 
// which can add skill to a user only if the user exist.

function addUserSkill(users,user_name,new_skill){
    for(let obj of users){
        if(obj.name == user_name){
            obj.skills.push(new_skill)
        }
    }

    return users
}

console.log(addUserSkill(users,"Thomas B","OOP"))


// Write a function which editUser if the user exist in the users array.

function editUser(users,uname,new_name){
    for(let obj of users){
        if(obj.name == uname){
            obj.name = new_name
        }
    }

    return users
}

console.log(editUser(users,"Thomas B","Tom"))