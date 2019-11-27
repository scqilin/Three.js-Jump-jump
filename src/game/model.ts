import Eventa from '../utils/event'

class GameModel {
    stage: any;
    stageChange: Eventa;
    constructor() {
        this.stage = ''
        this.stageChange = new Eventa(this)
    }
    getStage() {
        return this.stage;
    }
    setStage (stage: any) {
        this.stage = stage;
        this.stageChange.notify({
            stage:stage
        })
    }
}

export default new GameModel()