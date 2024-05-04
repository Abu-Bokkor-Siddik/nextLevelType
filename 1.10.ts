{
    // union type | type ke literal bole
    type Frontend = 'fakibaz'|'pro';
    const newDev:Frontend = "pro"
    // 
    const useCasess :{
        name:string,
        age:number,
        contactNo:string,
        address:string,
        gender:'male'|'female'
    }={
        name:'siddik',
        age:20,
        contactNo:'0183438844748',
        address:'savar',
        gender:'female'
    }
    // intersection 
    type Frontends = {
        skeels:string[],
        desicnatiion1:'Front end developer'
    }
    type Backend = {
        skeels:string[],
        desicnatiion2:'backend developer'
    }
    type Fullstack = Frontends&Backend
    // usecase of intersection type
    const fullstack :Fullstack={
        skeels:['html','css'],
        desicnatiion1:'Front end developer',
        desicnatiion2:'backend developer'

    }
}