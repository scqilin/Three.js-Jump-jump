import gameController from './controller'

class Game{
    gameController: any;
    constructor(){
        this.gameController = gameController;
    }
    init(){
        this.gameController.initPages();
    }
}
export default new Game();