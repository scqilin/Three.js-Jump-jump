import GamePage from '../pages/game-page';
import GameOverPage from '../pages/game-over-page';
class GameView {
    private gamePage:  any;
    private gameOverPage: any;
    constructor() {

    }
    public initGamePage(callbacks: any) {
        this.gamePage = new GamePage(callbacks);
        this.gamePage.init()
    }
    public showGameOverPage() {
        this.gameOverPage.show();
    }
    showGamePage(){
        this.gameOverPage.hide();
        this.gamePage.restart();
        this.gamePage.show();
    }
    initGameOverPage(callbacks: any) {
        this.gameOverPage = new GameOverPage(callbacks);
        this.gameOverPage.init();
    }
    restartGame(){
        this.gamePage.restart();
    }
}
export default new GameView()