class student{
    constructor(name){
        console.log("constructor :student " +name);
    }
}

class teacher extends student{
    constructor(){
        super();
        console.log("constructor :clerk ");
    }

}

let a = new teacher("viru pal");