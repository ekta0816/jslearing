class employee{
    constructor(id,name,exp){
        this.id = id;
        this.name = name;
        this.exp = exp;
    }
    static myFunction(a,b){
        return a * b
    }
}
class developer extends employee{
    constructor(id,name,exp,language,state){
        super(id,name,exp);
        this.language = language;
        this.state = state;
    }
    myLanguage(){
        if (this.language == "java") {
            return "java"
        } else {
            return "Ruby"
        }
    }
}

 const e1 = new developer(1,"Ekta",2,"html","india")
 console.log(e1.myLanguage())

 