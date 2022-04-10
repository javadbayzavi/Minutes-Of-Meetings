export class basemodel
{
    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    
    constructor(public iid: string)
    {
        this.id = iid;
    }
}