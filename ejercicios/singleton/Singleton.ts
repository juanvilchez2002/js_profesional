class Singleton{
    //3 propieades o metodos
    private static instance: Singleton;

    private constructor(){
        //init
    }

    static getInstance(){
        if(!Singleton.instance){
            Singleton.instance = new Singleton()
        }

        return Singleton.instance
    }

}

export default Singleton