// function non premative 
// normal function and deaful value
function test(test1:number,test2:number=40):number{
    return test1+test2
}
test(3,5)
// arrow function 
const testArrow = (testa:number,testb:number):number=>{
    return testa+testb
}
testArrow(4,6)
// object --> function ---> method 
const mytaka = {
    name: 'siddik',
    blance: 0,
    add(blances:number){
        return this.blance+blances
    }
}
// map oparation 
let c:number[] =[2,3,4,5,6];
const values : number[] = c.map((elem):number=> elem*elem)