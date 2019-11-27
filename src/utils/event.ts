class Eventa{
    _sender: any;
    _linteners: any;
    
    constructor(sender: any){
        this._sender = sender;
        this._linteners = [];
    }
    attach(callback: any){
        this._linteners.push(callback)
    }
    notify(args: any){
        for(let i=0;i<this._linteners.length;i++){
            this._linteners[i](this._sender,args)
        }
    }
}

export default Eventa;