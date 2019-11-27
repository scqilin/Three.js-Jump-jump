export default class GameOverPage{
    private callbacks: any;
    constructor(callbacks: any){
        this.callbacks = callbacks;
    }
    public init(){
        console.log('game over page init')
    }
    public show(){
        console.log('game over page show')
    }
}