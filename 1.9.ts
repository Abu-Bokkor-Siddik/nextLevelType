{
    // type alias 
    type Student={
        name:string,
        age:number,
        contactNo?:string,
        address:string,
        gender?:string
    }
    // frist object 
    // first time
    // const useCase :{
    //     name:string,
    //     age:number,
    //     contactNo:string,
    //     address:string,
    //     gender:string
    // }={
    //     name:'siddik',
    //     age:20,
    //     contactNo:'0183438844748',
    //     address:'savar'
    // }
    // 

    // with alias type 
    const useCase :Student={
        name:'siddik',
        age:20,
        contactNo:'0183438844748',
        address:'savar'
    }
    //  2nd object  contact no nei ..just
    const useCase2 :Student={
        name:'siddik',
        age:20,
        address:'savar'
    }
    // 

    // variable a use 
    type UserName = string;
    const name :UserName='siddik';
    // function a 
    type Add = (num1:number,num2:number)=> number
   const add:Add= (num1,num2)=>{
    return num1+num2
   }
   add(3,4)
}