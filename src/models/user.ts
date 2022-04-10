import { basemodel } from "src/lib/core/models/basemodel";

export class user extends basemodel
{
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _family: string;
    public get family(): string {
        return this._family;
    }
    public set family(value: string) {
        this._family = value;
    }

    public get fullname(): string{
        return this.name + " " + this.family;
    }

    constructor(public idd: string, public nname: string
        , public ffamily: string)
        {
            super(idd);
            this.name = nname;
            this.family = ffamily;
        }
}