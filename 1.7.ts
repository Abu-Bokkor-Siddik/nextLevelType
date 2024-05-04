

{
    // Spread And Rest Operator

// aki name ar object or variable hole error dibe block scope error .. because all file into global scope .. to solve it ... i will create {} then write all code in block scope .... 


// spread operator  .... 
// array ar khetre ...
const bros :string[]=['mehedi','asif','rabbi','kamal']
const bros2 :string[]=['saddam','sabbir','rofic','jamal']
bros.push(...bros2)
// object a khetre ....
const listof = {
    friend : 'akash',
    justfriend: 'asif',
}
const listOf2 ={
    goodFriend: 'limon',
    bestFriend:'kamal'
}
const allFriend ={
    ...listof,
    ...listOf2
}

// destucturing

// rest operator.
function allFriends (...friends:string[]){
    friends.forEach((item:string)=>{
        console.log(item)
    })
}
allFriends('asif','abir','akash','masud')
}