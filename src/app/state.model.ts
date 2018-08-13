export class State{

    constructor(private key : string,private count:number){
this.Key = key;
this.Count = count;
    }
    private _key : string;
    public get Key() : string {
        return this._key;
    }
    public set Key(v : string) {
        this._key = v;
    }
    
    private _count : number;
    public get Count() : number {
        return this._count;
    }
    public set Count(v : number) {
        this._count = v;
    }
    
    
}